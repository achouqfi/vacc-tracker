const appointment = require("../models/appointment.model");
const bcrypt = require("bcryptjs");
const {sendMail} = require("../utils/mail")
var dayjs = require('dayjs')

const index = async (req, res) => {
  sss.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};


const show = async (req, res) => {
  try {
    const result = await appointment.find();
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


const updateStatus = async (req, res) => {

  const { id } = req.params
  const record = { _id: id }
  try {
    const appointmentById = await appointment.findById(record)

    const current = dayjs(patient.date).format('DD/MM/YYYY')
    await appointment.updateOne(record, {
      $set: {
        vacc1Status: "Vaccinated",
        vacc1Status: "Vaccinated",
        vacc1Status: "Vaccinated",
      },
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
}

module.exports = {
  index,
  show,
  store,
  destroy,
  updateStatus,
};