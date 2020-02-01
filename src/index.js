import React from 'react';
// import styled from 'styled-components';
// import chroma from 'chroma-js';

const RANSOM_FONTS = [
  'Arial',
  'Times New Roman',
  'Helvetica',
  'Courier New',
  'Verdana',
  'Comic Sans',
];

const CASES = ['uppercase', 'lowercase'];
const WEIGHTS = ['normal', 'bold'];

// const Space = styled.div`
//   display: inline-block;
//   width: ${props => props.fontSize}vw;
// `;

function randomArrayEntry(array) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function RansomLetters({ text }) {
  if (!text) return null;
  const letterArray = Array.from(text);

  function renderLetter(l, i) {
    const fontSize = randomRange(4, 5);

    if (l === ' ') return <Space key={i} fontSize={fontSize / 2} />;

    const backgroundColor = chroma.random();
    const textColor =
      chroma(backgroundColor).luminance() >= 0.5 ? 'black' : 'white';

    const Letter = styled.div`
      display: inline-block;
      font-family: ${randomArrayEntry(RANSOM_FONTS)};
      font-size: ${fontSize}vw;
      text-transform: ${randomArrayEntry(CASES)};
      font-weight: ${randomArrayEntry(WEIGHTS)};
      transform: ${`rotate(${randomRange(-5, 5)}deg)`};
      background-color: ${backgroundColor};
      color: ${textColor};
      margin-right: 0.2vw;
      padding-right: 0.2vw;
      padding-left: 0.2vw;
    `;

    return <Letter key={i}>{l}</Letter>;
  }

  return <div>{letterArray.map(renderLetter)}</div>;
}
