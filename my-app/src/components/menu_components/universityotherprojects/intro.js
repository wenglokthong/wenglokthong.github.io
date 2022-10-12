import { MyHomeButton } from "../../@helpers/buttons/button";
import { Link } from "react-router-dom";
export const UniversityOtherProjectsIntro = () => {
  return (
    <div>
      <div
        style={{
          fontSize: "2em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Other school projects
      </div>
      <div style={{ fontSize: "1.2em" }}>
        This section is a collection of some of other modules/projects I have
        done in my course of university.
      </div>

      <div>
        <h2>
          <Link style={{}} to="../des396">
            {"Visual Design and Interaction Design for Game UI (DES396)"}
          </Link>
        </h2>
      </div>
      <div>
        <MyHomeButton />
      </div>
    </div>
  );
};
