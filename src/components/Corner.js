import React from "react";
import styled from 'styled-components';

const Svg = styled.svg`
    display: block;
    width: 30px;
    height: auto;
    position: absolute;
    top: 100%;
    /* left: 0; */
    transform: scale(1.01);

    path {
        fill: ${(props) => props.fillColor || "#e86927"};
    }
`;

export default function Corner(props) {
    const { style, fillColor } = props;

    return (
        <>
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style={style} fillColor={fillColor}>
                <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z"/>
            </Svg>
        </>
    );
};
