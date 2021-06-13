const router = require("express").Router();
const Workout = require("../models/workout.js");

// finds the workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  if(err){
    console.log(err);
  } else {
      res.json(workouts);
  }
});

// add exercise
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      {
          $push: { exercises: req.body }
      },
      { new: true }).then(dbWorkout => {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      });

});

// create workouts
router.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body).then(newWorkout => {
    res.json(newWorkout);
    }).catch(err => {
      res.json(err);
    });
});


// get workouts in range
// router.get("/api/workouts/range", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });


module.exports = router;
