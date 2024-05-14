const { Schema, Types } = require('mongoose');
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
    _id: false,
  }
)

module.exports = reactionSchema;