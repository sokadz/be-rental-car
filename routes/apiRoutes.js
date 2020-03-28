const express = require('express');
const router = express.Router();
const db = require('../models');


// post new car
router.post('/new', (req,res) => {
    db.Car.create({
        registration_no: req.body.registration_no,
        color: req.body.color,
        status: req.body.status,
        customer: req.body.customer
    }).then(submitedCar => res.send(submitedCar))
})

// get cars
router.get('/all', (req, res) => {
    db.Car.findAll().then(cars => res.send(cars));
});

// get car by id
router.get('/find/:id', (req,res) => {
    db.Car.findAll({
        where: {
            id: req.params.id
        }
    }).then(car => res.send(car))
})

// update car
router.put("/edit/:id", (req, res) => {
    db.Car.update(
      {
        registration_no: req.body.registration_no,
        color: req.body.color,
        status: req.body.status,
        customer: req.body.customer
      },
      {
        where: { id: req.params.id }
      }
    ).then(() => res.send("car update success"));
  });

// delete car
router.delete('/deleted/:id', (req, res) => {
    db.Car.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => res.send('car deleted success'))
})


module.exports = router;