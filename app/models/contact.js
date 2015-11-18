/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Contact Schema
 */
var ContactSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    address1:String,
    address2:String,
    postcode:String,
    mobile:String,
    phone:String,
    userId:String
});

mongoose.model('Contact', ContactSchema);