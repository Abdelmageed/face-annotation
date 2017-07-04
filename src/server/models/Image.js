import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    userId: String,
    annotations: [Object]
});

export default mongoose.model('Image', ImageSchema);