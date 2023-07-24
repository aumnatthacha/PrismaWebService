const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const insertRestaurant = async (req, res) => {
    const { name, type, img } = req.body
    const restaurant = await prisma.restaurant.create({
        data: {
            name: name,
            type: type,
            img: img,
        },
    });
    res.status(201).json(restaurant)
    console.log(restaurant)
}
//get All
const getRestaurant = async (req, res) => {
    const { name, type, img } = req.body
    const restaurant = await prisma.restaurant.findMany()
    res.status(200).json(restaurant)
    console.log(restaurant)
}
//get by Id
const getIdRestaurant = async (req, res) => {
    const id = req.params.id
    const restaurant = await prisma.restaurant.findMany({
        where: {
            id: parseInt(id),
        }
    })
    res.status(200).json(restaurant)
    console.log(restaurant)
}

//update
const updateRestaurant = async (req, res) => {
    const { name, type, img } = req.body
    const id = req.params.id
    const restaurant = await prisma.restaurant.update({
        where: { id: parseInt(id) },
        data: { name: name, type: type, img: img },
    });
    res.status(200).json(restaurant)
    console.log(restaurant)
}

//delete
const deleteRestaurant = async (req, res) => {
    const id = req.params.id
    const restaurant = await prisma.restaurant.delete({
        where: {
            id: parseInt(id),
        }
    })
    res.status(200).json(restaurant)
    
}


module.exports = { insertRestaurant, getRestaurant, getIdRestaurant, updateRestaurant, deleteRestaurant } 
