import { MyHomeButton } from "../../@helpers/buttons/button";
import { Link } from "react-router-dom";
export const UniversityOtherProjectsIntro = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div>Intro text</div>
      <div>
        <Link style={{}} to="../des396">
          {"DES396"}
        </Link>
      </div>
      <div>
        <MyHomeButton />
      </div>
    </div>
  );
};
