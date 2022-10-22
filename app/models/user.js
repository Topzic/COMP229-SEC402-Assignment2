/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/21/2022
    File:           user.js
*/

// Imports
import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

const { PassportLocalSchema } = mongoose;
const Schema = mongoose.Schema;

// User Creation Schema
const UserSchema = new Schema({
    username: String,
    emailAddress: String,    
}, {
    timestamps: true,
    colleciton: 'users'
});

UserSchema.plugin(passportLocalMongoose);

// Exports
export default mongoose.model('User', UserSchema);