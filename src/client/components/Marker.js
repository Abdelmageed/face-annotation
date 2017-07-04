import React, {Component} from 'react';

export default function Marker(props) {
    const contStyle = {
        position: 'absolute',
        zIndex: 1,
        top: props.top,
        left: props.left
    };

    const circleStyle = {
        width: 10,
        height: 10,
        borderRadius: '50%',
        backgroundColor: 'yellow',
        position: 'absolute'
    };

    const numberStyle = {
        position: 'absolute',
        top: 20,
        left: 2.5,
        color: 'yellow'
    };

    return (
        <span style={contStyle}>
            <span style={circleStyle}></span>
            <span style={numberStyle}>{props.number}</span>
        </span>
    );
}