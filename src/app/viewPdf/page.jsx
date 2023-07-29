"use client";

import React from "react";
import DecDependEconPdf from "../formDestProcCur/decFeitProcCur/pdf/DecDependEconPdf";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
  () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
  { ssr: false }
);

const ViewPdf = () => {
  return (
    <PDFViewer style={{ width: "100vw", height: "100vh" }}>
      <DecDependEconPdf />
    </PDFViewer>
  );
};

export default ViewPdf;
