import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    annotations: [{
        userId: String,
        annotation: [{
            x: Number,
            y: Number
        }]
    }]
});

export default mongoose.model('Image', ImageSchema);