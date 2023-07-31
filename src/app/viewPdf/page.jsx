"use client";

import React from "react";
import ReqRevalCartFunPDF from "../formDestProcCur/decFeitProcCur/pdf/TesteReqRevalCartFunPDF";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const ViewPdf = () => {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <ReqRevalCartFunPDF />
    </PDFViewer>
  );
};

export default ViewPdf;
