import { useState } from "react";
import styled from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

export const PDFShower = (props) => {
  <div>
    <Document file={props.pdfobject}>
      {props.pagesArray.map((element, index) => {
        <Page key={index} pageNumber={element} />;
      })}
    </Document>
  </div>;
};
