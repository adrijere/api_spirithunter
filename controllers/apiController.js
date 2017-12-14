'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.list_all_users = function(req, res) {
  User.find({}, function(err, users) {
    if (err)
      res.send(err);
    res.json(users);
  });
};


exports.get_a_user = function(req,res) {
  User.findOne({ "_id" : req.params.userId }, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

exports.list_all_success_of_user = function(req,res) {
  User.findOne({ "_id" : req.params.userId }, function(err, user) {
    if (err) res.send(err);
    res.json(user.success);
  });
};

exports.add_success_to_user = function(req,res) {
  User.findOne({ "_id" : req.params.userId }, function(err, user) {
    if (err) res.send(err);
    user.success.push(req.body.success);
    user.save(function(err) {
      if (err) res.send(err);
    });
    res.json(user.success);
  });
};

exports.premium = function(req,res) {
  User.findOne({ "_id" : req.params.userId }, function(err, user) {
    if (err) res.send(err);
    res.json(user.premium);
  });
};

