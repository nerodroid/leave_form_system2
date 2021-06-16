const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Post model
const Leave = require('../../models/Leave');
// Profile model
const Profile = require('../../models/Profile');

 //Validation
const validateLeaveInput = require('../../validation/leave');

// @route   GET api/leave/test
// @desc    Tests leave route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Leave Works' }));

// @route   GET api/leave
// @desc    Get leave
// @access  Public
router.get('/', (req, res) => {
  Leave.find()
    .sort({ date: -1 })
    .then(leaves => res.json(leaves))
    .catch(err => res.status(404).json({ noleavesfound: 'No leaves found' }));
});

// @route   GET api/leave/:id
// @desc    Get leave by id
// @access  Public
router.get('/:id', (req, res) => {
  Leave.findById(req.params.id)
    .then(leave => res.json(leave))
    .catch(err =>
      res.status(404).json({ nopostfound: 'No leave found with that ID' })
    );
});

// @route   POST api/leaves
// @desc    Create leave
// @access  Private
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateLeaveInput(req.body);

    // Check Validation

    //console.log(isValid);
    if (!isValid) {
      // If any errors, send 400 with errors object
      return res.status(400).json(errors);
    }
    console.log(req.user.id);
    const newLeave = new Leave({
      user: req.user.id,
      nameOfActor: req.body.nameOfActor,
      reason: req.body.reason,
           
    });

    newLeave.save().then(leave => res.json(leave));
  }
);

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Leave.findById(req.params.id)
        .then(leave => {
          // Check for post owner
          if (leave.user.toString() !== req.user.id) {
            return res
              .status(401)
              .json({ notauthorized: 'User not authorized' });
          }

          // Delete
          leave.remove().then(() => res.json({ success: "Leave deleted" }));
        })
        .catch(err => res.status(404).json({ leavenotfound: 'No leave found' }));
    });
  }
);




module.exports = router;
