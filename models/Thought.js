const { Schema, model } = require("mongoose");

// Import the Reaction Schema
const Reaction = require("./Reaction");

const mongooseDateFormat = require('mongoose-date-format');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});



const Thought = model("thought", thoughtSchema);

// Format timestamps
thoughtSchema.plugin(mongooseDateFormat);


module.exports = Thought;
