const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");
const router = express.Router();
const { insertRestaurant, getRestaurant, getIdRestaurant, updateRestaurant, deleteRestaurant } = require('../controllers/restaurant.controllers');

router.post("/restaurant", insertRestaurant);
router.get("/restaurant", getRestaurant);
router.get("/restaurant/:id", getIdRestaurant);
router.put("/restaurant/:id", updateRestaurant);
router.delete("/restaurant/:id", deleteRestaurant);

module.exports = router;

