const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const extendSchema = require('mongoose-extend-schema');
// Create Schema
const StudyLeaveSchema = extendSchema(LeaveSchema,  
    {
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    dateTo: {
        type: Date,
    },
    dateFrom: {
        type: Date,
    },
    apointmentDate: {
        type: Date,
    },

    reason: {
        type: String,
    },
    nameOfActor: {
        type: String,
    },
    actorEmail: { type: String, trim: true },
    isHODApproved: {
        type: Boolean,
    },
    isDeanApproved: {
        type: Boolean,
    },
    isARApproved: {
        type: Boolean,
    },

});

module.exports = Leave = mongoose.model('leave', StudyLeaveSchema);
