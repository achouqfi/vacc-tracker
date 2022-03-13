const sideEffect = require("../models/sideEffect.model");

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
    const result = await sideEffect.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const store = async (req, res, next) => {
  const { email, Cin,  phone, SideEffectDesc } = req.body;
  try {
    const newSideEffect = await sideEffect.create({
      email,
      Cin,
      phone,
      SideEffectDesc,
    });

    res.status(200).json({ newSideEffect });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  index,
  show,
  store,
};