const Studiocah = require('../models/Studiocah');

exports.getAllModels = async (req, res) => {
  try {
    const models = await Studiocah.findAll();
    res.status(200).json(models);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los modelos', error });
  }
};

exports.getModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await Studiocah.findByPk(id);
    if (!model) {
      return res.status(404).json({ message: 'Modelo no encontrado' });
    }
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener el modelo', error });
  }
};

exports.createModel = async (req, res) => {
  try {
    const { name, priceArgentina, priceUSA, priceEurope } = req.body;
    const newModel = await Studiocah.create({ name, priceArgentina, priceUSA, priceEurope });
    res.status(201).json(newModel);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el modelo', error });
  }
};

exports.updateModel = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, priceArgentina, priceUSA, priceEurope } = req.body;
    const model = await Studiocah.findByPk(id);
    if (!model) {
      return res.status(404).json({ message: 'Modelo no encontrado' });
    }
    await model.update({ name, priceArgentina, priceUSA, priceEurope });
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el modelo', error });
  }
};

exports.deleteModel = async (req, res) => {
  try {
    const { id } = req.params;
    const model = await Studiocah.findByPk(id);
    if (!model) {
      return res.status(404).json({ message: 'Modelo no encontrado' });
    }
    await model.destroy();
    res.status(200).json({ message: 'Modelo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el modelo', error });
  }
};
