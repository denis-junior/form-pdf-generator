"use client";

import React from "react";

import dynamic from "next/dynamic";
import ReqDivIntProcCurPDF from "../formDestProcCur/reqFeitProcCur/reqDivIntProcCur/pdf/ReqDivIntProcCurPDF";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const ViewPdf = () => {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <ReqDivIntProcCurPDF />
    </PDFViewer>
  );
};

export default ViewPdf;
