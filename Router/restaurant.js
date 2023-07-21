const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require("express");
const router = express.Router();

// router.post("/user", async (req, res) => {
//     const{name,email}=req.body 
//     const user = await prisma.user.create({
//         data: {
//           name: name,
//           email: email,
//         },
//       })
//       console.log(user)
      
    // try {
    //     const restaurant = await Restaurant.getAllRestaurant();
    //     res.status(200).json(restaurant);
    // } catch (err) {
    //     res.status(500).json({ error: "ผิด" });
    // }
// });

module.exports = router;
