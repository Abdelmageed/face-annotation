import React, {Component} from 'react';

import Marker from './Marker';

export default class Annotator extends Component {
    constructor(props) {
        super(props);

        this.cont = null;
        this.annotationCount = 8;

        this.addAnnotation = this.addAnnotation.bind(this);
        this.annotationsComplete = this.annotationsComplete.bind(this);
        this.submit = this.submit.bind(this);
        this.props.loadImage(this.props.userId);
    }


    submit() {
        const annotation = {
            userId: this.props.userId,
            annotation: this.props.annotations,
            imageUrl: this.props.url
        };
        this.props.submitAnnotation(annotation);
        this.props.loadImage(this.props.userId);
    }

    annotationsComplete() {
        return (this.props.annotations.length === this.annotationCount);
    }

    addAnnotation (e) {
        if (this.annotationsComplete()) {return;}
        let x = e.pageX - this.cont.offsetLeft,
            y = e.pageY - this.cont.offsetTop,
            annotation = {x, y};
        this.props.addAnnotation(annotation);
    }

    render() {

        const contStyle = {
            position: 'relative'
        };

        const markers = this.props.annotations.map((annotation, index) => {
            return (
                <Marker key={index} number={index + 1} top={annotation.y} left={annotation.x} />
            );
        });
        
        return (
            <div>
                <div
                    style={contStyle}
                    onClick={this.addAnnotation}
                    ref={(ref) => {this.cont = ref;}}>
                    <img src={this.props.url} alt="Face Image"/>
                    {markers}
                </div>
                <br />
                <div>
                    <button
                        disabled={!this.annotationsComplete()}
                        onClick={this.submit}>Next</button>
                </div>
            </div>
        );
    }
}