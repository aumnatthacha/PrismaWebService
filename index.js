const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');
const cors = require('cors');
const server = express();
const connectMysql = require('./db/db');


server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cors());
server.use(require("./Router/restaurant"));

//
// server.post('/restaurant', async (req, res) => {
//     const{name,type,img}=req.body 
//     const restaurant = await prisma.restaurant.create({
//         data: {
//             name: name,
//             type: type,
//             img: img,
//         },
//     });
//     res.status(201).json(restaurant)
//     console.log(restaurant)
// });
//
// server.get('/restaurant', async (req, res) => {
//     const{name,type,img}=req.body 
//     const restaurant = await prisma.restaurant.findMany()
//     res.status(200).json(restaurant)
//     console.log(restaurant)
// })

//get by Id
// server.get('/restaurant/:id', async (req, res) => {
//     const id = req.params.id
//     const restaurant = await prisma.restaurant.findMany({
//         where:{
//             id: parseInt(id),
//         }
//     })
//     res.status(200).json(restaurant)
//     console.log(restaurant)
// })

//
// server.put('/restaurant/:id', async (req, res) => {
//     const{name,type,img}=req.body 
//     const id = req.params.id
//     const restaurant = await prisma.restaurant.update({
//         where: { id: parseInt(id)},
//         data: { name: name,type: type, img:img},
//     });
//     res.status(200).json(restaurant)
//     console.log(restaurant)
// })
//
// server.delete('/restaurant/:id', async (req, res) => {
//     const id = req.params.id
//     const restaurant = await prisma.restaurant.delete({
//         where:{
//             id: parseInt(id),
//         }
//     })
//     res.status(200).json(restaurant)
//     console.log(user)
// })

//
server.listen(3000, () => {
    console.log("Natthacha Mumdaeng")
    // connectMysql.connect((err) => {
    //     if (err) {
    //         console.error('error connect:' + 'err.stack');
    //         return;
    //     }
    //     console.log('connected!!!');
    // })
});
