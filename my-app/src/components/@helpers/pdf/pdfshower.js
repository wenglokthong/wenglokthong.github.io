import { useState } from "react";
import { MyButton } from "../buttons/button.js";
import styled, { keyframes } from "styled-components";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const PDFOpenAnim = keyframes`
from {opacity:0}
to {opacity:1}
`;

const StyledPDF = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
  animation-name: ${PDFOpenAnim};
  animation-duration: 2s;
`;

export const PDFShower = (props) => {
  const [isShowPDF, setIsShowPDF] = useState(false);

  return (
    <div>
      {props.isNeedButton && (
        <MyButton
          name={"Show " + props.pdfName}
          onClick={() => setIsShowPDF(!isShowPDF)}
        />
      )}

      {props.isNeedButton ? (
        isShowPDF && (
          <StyledPDF>
            <Document file={props.pdfobject}>
              {props.pagesArray.map((element, index) => (
                <Page key={index} pageNumber={element} />
              ))}
            </Document>
          </StyledPDF>
        )
      ) : (
        <StyledPDF>
          <Document file={props.pdfobject}>
            {props.pagesArray.map((element, index) => (
              <Page key={index} pageNumber={element} />
            ))}
          </Document>
        </StyledPDF>
      )}
    </div>
  );
};
