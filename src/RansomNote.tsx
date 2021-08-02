import chroma from "chroma-js";
import React from "react";
import styled from "styled-components";
import {iRansomNoteProps} from "./types";

const RANSOM_FONTS = [
  "Arial",
  "Times New Roman",
  "Helvetica",
  "Courier New",
  "Verdana",
  "Comic Sans",
];

const CASES = ["uppercase", "lowercase"];
const WEIGHTS = ["normal", "bold"];

const Space = styled.div`
  display: inline-block;
`;

function randomArrayEntry(array: string[]) {
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
}

function randomRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}


export default function RansomNote({text, fontSize = 48}: iRansomNoteProps) {
  if (!text) return null;
  const letterArray = Array.from(text);

  function renderLetter(l: string, i: number) {
    const letterFontSize = randomRange(fontSize * 0.9, fontSize);

    if (l === " ")
      return <Space key={i} style={{width: `${letterFontSize / 2}px`}}/>;

    const backgroundColor = chroma.random();
    const textColor =
      chroma(backgroundColor).luminance() >= 0.5 ? "black" : "white";

    const Letter = styled.div`
      display: inline-block;
      font-family: ${randomArrayEntry(RANSOM_FONTS)};
      font-size: ${letterFontSize}px;
      text-transform: ${randomArrayEntry(CASES)};
      font-weight: ${randomArrayEntry(WEIGHTS)};
      transform: ${`rotate(${randomRange(-5, 5)}deg)`};
      background-color: ${backgroundColor.hex()};
      color: ${textColor};
      margin-right: 0.2vw;
      padding-right: 0.2vw;
      padding-left: 0.2vw;
    `;

    return <Letter key={i}>{l}</Letter>;
  }

  return <div>{letterArray.map(renderLetter)}</div>;
}
