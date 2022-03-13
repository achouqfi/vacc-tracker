const appointment = require("../models/appointment.model");
const bcrypt = require("bcryptjs");
const {sendMail} = require("../utils/mail")
var dayjs = require('dayjs')

const index = async (req, res) => {
  try {
    const result = await appointment.find();
    res.status(200).json(result);
  } catch (err) { 
    res.status(400).json({ error: err.message });
  }
};


const show = async (req, res) => {
  const { region } = req.params;
  try {
    const result = await appointment.find({region});
    res.status(200).json(result);
  } catch (err) { 
    res.status(400).json({ error: err.message });
  }
};

const store = async (req, res, next) => {
  const { email, firstName, lastName, age, city, Cin, region, phone, chronicDisease } = req.body;
  try {
    const existingEmail = await appointment.findOne({ email });

    if (existingEmail)
      return res.status(400).json({ message: "email already exists" });
      const vacc3 = dayjs(new Date()).add(2, 'month').format('DD/MM/YYYY')
      const vacc2 = dayjs(new Date()).add(1, 'month').format('DD/MM/YYYY')
      const vacc1 = dayjs(new Date()).add(0, 'month').format('DD/MM/YYYY')

    const newAppointment = await appointment.create({
      email,
      firstName,
      lastName,
      age,
      Cin,
      city,
      chronicDisease,
      phone,
      region,
      vacc1: vacc1,
      vacc2: vacc2,
      vacc3: vacc3,
      vacc1Status:'vaccined',
      vacc2Status:'not yet',
      vacc3Status:'not yet',
    });

    sendMail(email, firstName, lastName, vacc1, vacc2, vacc3)
    res.status(200).json({ newAppointment });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const destroy = async (req, res) => {
  const { id } = req.params;
  const record = { _id: id };
  try {
    const result = await appointment.deleteOne(record);
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateStatusByDate = async (id, vacc1, vacc2, vacc3) =>{
  if (vacc1) {
    await appointment.updateOne(id, {
      $set: {
          vacc1Status: "not vaccinated",
      },
    });  
  }else if (vacc2) {
    await appointment.updateOne(id, {
        $set: {
            vacc2Status: "not vaccinated",
        },
    });
  }else if (vacc3) {
    await appointment.updateOne(id, {
      $set: {
          vacc3Status: "not vaccinated",
      },
    });
  }  
}

const updateStatus = async (req, res) => {
  const { vaccNumber, status, id } = req.body
  const record = { _id: id };
  
  if (vaccNumber == '1') {
    const updateStatus = await appointment.updateOne(record, {
      $set: {
          vacc1Status:status,
      },
    });  
    console.log(updateStatus);
  }else if (vaccNumber == '2') {
    const updateStatus = await appointment.updateOne(record, {
        $set: {
            vacc2Status: status,
        },
    });
    res.status(200).json(updateStatus);
  }else if (vaccNumber == '3') {
    const updateStatus = await appointment.updateOne(record, {
      $set: {
          vacc3Status: status,
      },
    });
    console.log(updateStatus);
  }  
}

module.exports = {
  index,
  show,
  store,
  destroy,
  updateStatus,
  updateStatusByDate
};