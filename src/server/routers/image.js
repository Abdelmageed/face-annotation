import express from 'express';
import Image from '../models/Image';

const router = express.Router();

router.post('/submit-annotation', (req, res) => {
    const data = req.body;
    Image.findOneAndUpdate({url: data.imageUrl}, {$push: {annotations: {userId: data.userId, annotation: data.annotation}}}, {new: true}, (err, image) => {
        if (err) {throw err;}
        res.send(image);
        res.end();
    });
});

router.get('/load-image', (req, res) => {
    const userId = req.body.userId;
    Image.find({
        'annotations.1': {$exists: false},
        'annotations.0.userId': {$ne: userId}}, (err, images) => {
            if (err) {throw err;}
            let index = Math.floor(Math.random() * images.length);
            res.send(images[index].url)
            res.end();
        });
    
});

export default router;