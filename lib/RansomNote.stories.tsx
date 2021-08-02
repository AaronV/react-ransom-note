import React from "react";
import RansomNoteComponent from "./RansomNote";

export default {
  title: "RansomNote",
  component: RansomNoteComponent,
};

export const RansomNote = (args: any) => <RansomNoteComponent {...args} />;
RansomNote.args = {
  text: "Ransom Note",
  fontSize: 48,
};
