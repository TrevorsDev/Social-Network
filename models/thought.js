const { Schema, model, Types } = require('mongoose');
const { formatDate } = require("../utils/dateFormat");
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    }
    , reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: ts => formatDate(ts),

    },

  },
  {
    toJSON: {
      getters: true,
    },
    //THis is a case by case basis 
    id: false,
    _id: false,
  }
)
// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: ts => formatDate(ts),
    },
    //This line simpifies a users reaction by importing the reaction from above, down here instead of writing out the code in full.
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    //THis is a case by case basis 
    id: false,
  }
);
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
