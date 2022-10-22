/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/21/2022
    File:           business.js
*/

// Imports
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Business Schema
const BusinessSchema = new Schema({
    name: String, 
    phone: Number, 
    email: String
}, {
    timestamps: true,
    collection: 'business'
});


// Exports
export default mongoose.model('Business', BusinessSchema);