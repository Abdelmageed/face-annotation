import Image from './Image';

const urls = [
    'http://facefacts.scot/images/science/Q2_high_health_f.jpg',
'http://cdn.newsapi.com.au/image/v1/335a6997d394c4d65a00aadc99c4fd44',
'https://s-media-cache-ak0.pinimg.com/736x/76/d1/09/76d109f7c5adeddb4dadcc5891d76c88--face-expressions-face-reference.jpg',
'https://s-media-cache-ak0.pinimg.com/736x/de/1e/fe/de1efef55429481f3b9d8daf14686e82--beautiful-eyes-most-beautiful.jpg',
'https://s-media-cache-ak0.pinimg.com/originals/5e/ba/9b/5eba9b690570bd8438186f68f36bffae.jpg',
'https://s-media-cache-ak0.pinimg.com/736x/dd/45/96/dd4596b601062eb491ea9bb8e3a78062--black-and-white-portraits-black-and-white-photography.jpg',
'http://7bna.net/images/face/face-5.jpg',
'https://cdn.pixabay.com/photo/2014/05/22/16/57/face-351281_960_720.jpg',
];

export default function setImages() {
    Image.count({}, (err, count) => {
        if (count === 0) {
            console.log('inserting images');
            urls.forEach(url => {
                let image = new Image({
                    url,
                    annotations: []
                });
                image.save();
            });
        }

    });
}