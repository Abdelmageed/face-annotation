import React, {Component} from 'react';

export default class Annotator extends Component {
    constructor(props) {
        super(props);

        this.cont = null;

        this.loadImage = this.loadImage.bind(this);
        this.addAnnotation = this.addAnnotation.bind(this);
        this.loadImage();
    }

    loadImage() {
        this.props.loadImage();
    }

    addAnnotation (e) {
        let x = e.pageX - this.cont.offsetLeft,
            y = e.pageY - this.cont.offsetTop,
            annotation = {x, y};
            console.log(annotation);
        this.props.addAnnotation(annotation);
    }

    render() {

        const contStyle = {
            position: 'absolute'
        };


        return (
            <div>
                <div
                    style={contStyle}
                    onClick={this.addAnnotation}
                    ref={(ref) => {this.cont = ref;}}>
                    <img src={this.props.url} alt="Face Image"/>
                </div>
                <button onClick={this.loadImage}>Next</button>
            </div>
        );
    }
}