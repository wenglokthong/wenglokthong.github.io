import { MyBackButton } from "../../../@helpers/buttons/button";
import { Link } from "react-router-dom";
export const Des396 = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Visual Design and Interaction Design for Game UI
      </div>
      <div style={{ fontSize: "1.2em" }}>
        <i>
          This course will refine student’s knowledge and practice of visual
          design, multi-page composition and layout, typography and use of type
          as an advanced communication tool, logo and identity design,
          interfaces and design for interaction, creation of design
          documentation, design thinking and application of design methodologies
          across multiple domains.
        </i>
      </div>
      <div>
        <h2>
          <u>Assignments</u>
        </h2>
      </div>
      <div>
        <h3>
          <Link to="../des396a1">{"Game Logo Design"}</Link>
        </h3>
      </div>
      <div>
        <h3>
          <Link to="../des396a2">{"UI Mockups"}</Link>
        </h3>
      </div>
      <div>
        <h3>
          <Link to="../des396a3">{"Style Guide"}</Link>
        </h3>
      </div>
      <div>
        <h3>
          <a
            href="https://www.youtube.com/watch?v=bmN2eWTX2sA&ab_channel=Sparkatus"
            target="_blank"
            rel="noreferrer"
          >
            {"Final Product (video link)"}
          </a>
        </h3>
      </div>
      <div>
        <MyBackButton />
      </div>
    </div>
  );
};
