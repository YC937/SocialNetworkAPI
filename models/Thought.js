const { Schema, model, Types } = require("mongoose");
const Reaction = require("./Reaction");

const thoughtSch = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },

        createdAt: {
            type: Date,
            deafult: Date.now,
            get: (timestamp) => dateFormat(timestamp),
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

thoughtSch.virtual("reactionCount").get(function () {
    return this.reaction.length;
});

const Thought = model("thought", thoughtSch);

module.exports = Thought;
