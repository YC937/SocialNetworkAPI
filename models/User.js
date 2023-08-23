const { Schema, model } = require('mongoose');


// Create Student model
const userSch = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    thoughts: [
        { 
            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

userSch.virtual("friendCount").get(function () {
    return this.friends.length;
})

const User = model('user', userSch);

module.exports = User;
