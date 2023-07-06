const { Schema, model } = require('mongoose');
// Mongoose User Schema implemented
const userSchema = new Schema(
    {
        id: {
            type: Number,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: '\b[a-z0-9#$_-]+@[a-z0-9]+\.[a-z]{2,3}\b/gi'
        },
        thoughts: [{
            type: Schema.Types.ObjectID,
            ref: 'Thoughts'
        }],
        friends: [{
            type: Schema.Types.ObjectID,
            ref: 'Users'
        }]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
)

const friends = model('user', userSchema);

module.exports = friends;