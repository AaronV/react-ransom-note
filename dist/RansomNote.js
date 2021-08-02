"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chroma_js_1 = __importDefault(require("chroma-js"));
var react_1 = __importDefault(require("react"));
var styled_components_1 = __importDefault(require("styled-components"));
var RANSOM_FONTS = [
    "Arial",
    "Times New Roman",
    "Helvetica",
    "Courier New",
    "Verdana",
    "Comic Sans",
];
var CASES = ["uppercase", "lowercase"];
var WEIGHTS = ["normal", "bold"];
var Space = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n"], ["\n  display: inline-block;\n"])));
function randomArrayEntry(array) {
    var rand = Math.floor(Math.random() * array.length);
    return array[rand];
}
function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function RansomNote(_a) {
    var text = _a.text, _b = _a.fontSize, fontSize = _b === void 0 ? 48 : _b;
    if (!text)
        return null;
    var letterArray = Array.from(text);
    function renderLetter(l, i) {
        var letterFontSize = randomRange(fontSize * 0.9, fontSize);
        if (l === " ")
            return react_1.default.createElement(Space, { key: i, style: { width: letterFontSize / 2 + "px" } });
        var backgroundColor = chroma_js_1.default.random();
        var textColor = chroma_js_1.default(backgroundColor).luminance() >= 0.5 ? "black" : "white";
        var Letter = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n      display: inline-block;\n      font-family: ", ";\n      font-size: ", "px;\n      text-transform: ", ";\n      font-weight: ", ";\n      transform: ", ";\n      background-color: ", ";\n      color: ", ";\n      margin-right: 0.2vw;\n      padding-right: 0.2vw;\n      padding-left: 0.2vw;\n    "], ["\n      display: inline-block;\n      font-family: ", ";\n      font-size: ", "px;\n      text-transform: ", ";\n      font-weight: ", ";\n      transform: ", ";\n      background-color: ", ";\n      color: ", ";\n      margin-right: 0.2vw;\n      padding-right: 0.2vw;\n      padding-left: 0.2vw;\n    "])), randomArrayEntry(RANSOM_FONTS), letterFontSize, randomArrayEntry(CASES), randomArrayEntry(WEIGHTS), "rotate(" + randomRange(-5, 5) + "deg)", backgroundColor.hex(), textColor);
        return react_1.default.createElement(Letter, { key: i }, l);
    }
    return react_1.default.createElement("div", null, letterArray.map(renderLetter));
}
exports.default = RansomNote;
var templateObject_1, templateObject_2;
//# sourceMappingURL=RansomNote.js.map