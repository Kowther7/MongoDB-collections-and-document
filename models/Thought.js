const { Schema, model } = require('mongoose');
const reactionSchema = require("./Reaction")

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,

    },
    createdAt: {
      type: Date,
      default: Date.now ,
      get: createdTime => new Date(createdTime).toLocaleString()
    },
    username: {
        type: String,
        required: true,
      },
  
    reactions: [reactionSchema],
   
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
thoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
