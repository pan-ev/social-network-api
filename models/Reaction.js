const { Schema, Types } = require('mongoose');

const mongooseDateFormat = require('mongoose-date-format');

const reactionSchema = new Schema( {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

// Format timestamps
reactionSchema.plugin(mongooseDateFormat);

module.exports = reactionSchema;