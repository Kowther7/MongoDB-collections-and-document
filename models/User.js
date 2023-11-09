const { Schema, model } = require('mongoose');


// Schema to create Student model
const usersSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\w+@\w+\.\w{2,20}/, "Must be a valid email!"],
      max_length: 50,
    },
  
    thoughts: [
        {
            type: Schema.Types.ObjectId , 
            ref: "Thought"
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId , 
            ref: "User"
        }
    ],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);
usersSchema.virtual("friendCount").get(function(){
    return this.friends.length
})
const User = model('User', usersSchema);

module.exports = User;