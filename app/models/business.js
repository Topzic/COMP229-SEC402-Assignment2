import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BusinessSchema = new Schema({
    name: String, 
    phone: Number, 
    email: String
}, {
    timestamps: true,
    collection: 'business'
});

export default mongoose.model('Business', BusinessSchema);