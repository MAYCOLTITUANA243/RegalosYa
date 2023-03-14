const express = require("express");
const router = express.Router();
const {
  getItems,
  getItemByID,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/Adorno");

/**
 * Lista los items
 */
router.get("/", getItems);

/**
 * Obtener detalle de item
 */
router.get("/:idAdorno", getItemByID);

/**
 * Crear un registro
 */
router.post("/", createItem);

/**
 * Actualizar un registro
 */
router.put("/:idAdorno", updateItem);

/**
 * Eliminar un registro
 */
router.delete("/:idAdorno", deleteItem);

module.exports = router;
