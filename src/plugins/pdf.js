import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "@/assets/fonts/TH_Sarabun.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  THSarabun: {
    normal: "THSarabunIT9.woff",
    bold: "THSarabunIT9Bold.woff",
  },
};
const headSytle = () =>{
  return{
    font: "THSarabun",
    fontsize: 18,
    lineHeight: 1.5,
    columns: 1.5,
  }
}
const primaryStyle = () => {
  return {
    font: "THSarabun",
    fontSize: 15,
    lineHeight: 1.5,
    columns: 1.4,
  };
};
const pdfPrintPreview = (content) => {
  const pdfDocGenerator = window.pdfMake.createPdf(content);
  pdfDocGenerator.getBlob(function (blob) {
    const pdfPreview = document.getElementById("pdfPreview");
    if (pdfPreview) {
      pdfPreview.remove();
    }
    const iframe = document.createElement("iframe");
    iframe.id = "pdfPreview";
    iframe.style.display = "none";
    iframe.src = URL.createObjectURL(blob);
    document.body.appendChild(iframe);
    iframe.contentWindow.focus();
    iframe.contentWindow.print();
  });
};
export default {
  pdfPrintPreview,
  headSytle,
  primaryStyle,
};
