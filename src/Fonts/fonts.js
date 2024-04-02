import { jsPDF } from "jspdf";

export default function addFontNormal() {
  const font =
    "ARiAAATo0/bP94GIq9ytTFAP8C...";
  const callAddFont = function () {
    this.addFileToVFS("NotoSansBengali.ttf", font);
    this.addFont("NotoSansBengali.ttf", "NotoSansBengali", "normal");
  };
  jsPDF.API.events.push(["addFonts", callAddFont]);
}