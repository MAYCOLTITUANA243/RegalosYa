const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleErrors");
const { adornoModel } = require("../models");

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
const getItems = async (req, res) => {
  try {
    const data = await adornoModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error);
  }
};

/**
 * Obtener detalle
 * @param {*} req
 * @param {*} res
 */
const getItemByID = async (req, res) => {
  try {
    const data = await adornoModel.findOne({
      idAdorno: req.params.idAdorno,
    });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, error);
  }
};

/**
 * Crear registro
 * @param {*} req
 * @param {*} res
 */
const createItem = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    const data = await adornoModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Actualizar registro
 * @param {*} req
 * @param {*} res
 */
const updateItem = async (req, res) => {
  try {
    let updatedProduct = {
      idAdorno: req.body.idAdorno,
      nombre: req.body.nombre,
      precio: req.body.precio,
      url: req.body.url,
      descripcion: req.body.descripcion,
    };

    const data = await adornoModel.findOneAndUpdate(
      { idAdorno: req.params.idAdorno },
      updatedProduct
    );
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Eliminar registro
 * @param {*} req
 * @param {*} res
 */
const deleteItem = async (req, res) => {
  try {
    const data = await adornoModel.deleteOne({
      idAdorno: req.params.idAdorno,
    });
    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

/**
 * Eliminar registro (logico)
 * @param {*} req
 * @param {*} res
 */
const deleteItemLogic = async (req, res) => {
  req = matchedData(req);
  const { id } = req;
  const data = await adornoModel.delete({ _id: id });
  res.send({ data });
};

module.exports = {
  getItems,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
  deleteItemLogic,
};
