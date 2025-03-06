const express = require("express");
const router = express.Router();

const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks.js");
const { validatorGetItem, validatorCreateItem } = require("../validators/tracks.js");
const {authMiddleware} = require ("../middleware/session.js");
const checkRol = require("../middleware/rol")



router.get("/", getItems);
router.get("/:id", getItem);

router.post("/", validatorCreateItem, createItem);
router.put("/", updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

router.get("/", authMiddleware, getItems);
router.post("/", authMiddleware , validatorCreateItem , createItem )

router.post("/", authMiddleware, checkRol(["admin"]), validatorCreateItem, createItem)

module.exports = router;