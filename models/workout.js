const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// gets workouts in array
const ExerciseSchema = new Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
    {
      name: {
        type: Schema.Types.ObjectId,
        ref: "exercise"
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

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
