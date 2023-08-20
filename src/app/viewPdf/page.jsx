"use client";

import React from "react";

import dynamic from "next/dynamic";
import ReqInclusaoDepPDF from "../formDestProcCur/reqFeitProcCur/reqInclusaoDep/pdf/ReqInclusaoDepPDF";
// import ReqDivIntProcCurPDF from "../formDestProcCur/reqFeitProcCur/reqDivIntProcCur/pdf/ReqDivIntProcCurPDF";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const ViewPdf = () => {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <ReqInclusaoDepPDF />
    </PDFViewer>
  );
};

export default ViewPdf;
