const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// gets workouts in array
const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  workout: [
    {
      name: {
        type: String,
        trim: true,
      },
      type: {
        type: String,
        trim: true,
      },
      weight: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      duration: {
        type: Number,
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],

  totalDuration: {
    type: Number,
    default: 0,
  },
});

const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
