const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserWorkoutSchema = new Schema({
    username: {
      type: String,
      trim: true,
      required: "Username is Required"
    },
