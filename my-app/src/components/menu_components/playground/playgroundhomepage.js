import { PlaygroundLinksArray } from "./playgroundlinks";
import { ButtonGroupLinks } from "../../@helpers/buttons/buttongrouplinks";
export const PlaygroundHomepage = (props) => {
  return (
    <>
      <div style={{ textAlign: "center" }}>Random stuff</div>
      <ButtonGroupLinks
        buttonArray={PlaygroundLinksArray}
        settings={{ orientation: "vertical" }}
        style={{ textAlign: "center" }}
        buttonMargin="1em"
      />
    </>
  );
};
