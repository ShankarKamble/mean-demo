/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Contact = mongoose.model('Contact'),
    _ = require('underscore');


/**
 * Create Contact
 */
exports.create = function(req, res) {
    var contact = new Contact(req.body),message="";
    contact.userId = req.user._id;
    contact.save(function(err) {
        if (err) {
           res.render('error', {
                status: 500
            });
        }

        return res.jsonp({
                message: ''
            });
        
    });
};


/**
 * Update a User
 */
exports.update = function(req, res) {

    Contact.findOneAndUpdate({_id:req.params.id}, req.body, function (err, place) {
       if (err) {
           res.render('error', {
                status: 500
            });
        }

        return res.jsonp({
                message: ''
            });
        
});
    
};


/**
 * Remove a Contact
 */
exports.remove = function(req, res) {
    Contact.remove({ _id: req.params.id },function(err) {
        if (err) {
            res.render('error', {
                status: 500
            });
        }

        return res.jsonp({
                message: ''
            });
    });
};


/**
 * List of Contact
 */
exports.all = function(req, res) {

    Contact.find({userId: req.user._id }).exec(function(err, UserChats) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            
            res.jsonp(UserChats);
        }
    });
};