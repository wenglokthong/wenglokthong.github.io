import "./content.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./aboutme.css";
export const IntroContent = (
  <div>
    <h1>
      Hi, I'm{" "}
      <span
        style={{
          fontFamily: "'Smooch',cursive",

          fontSize: "2em",
        }}
      >
        Max
      </span>
    </h1>
    <h2>
      Currently an undergraduate studying Computer Science and Game Design.
      Previously studied Diploma in Mechanical Engineering. I have worked on
      several 2D and 3D game projects, using both commercial and custom game
      engines.
      <br />
      <br />I have an interest of how things work under the hood, which was my
      reason of pursuing engineering in the first place. Hence, as an avid
      gamer, I wanted to know how games are built, which led to my pursue in
      Computer Science and Game Design.
      <br />
      <br />
      Having almost completed my degree, my next step is to expand my technical
      skillsets and explore other areas of the technical industry. My goal is to
      learn and improve towards being a full stack developer. <br /> <br />
      Click to go to my LinkedIn profile! (opens up a new window)
      <br />
    </h2>
    <div style={{ display: "flex" }}>
      <LinkedInIcon
        className="linkedin-button"
        onClick={() => {
          window.open("https://www.linkedin.com/in/maxthong/", "_blank");
        }}
        style={{ fontSize: "4em", margin: "auto" }}
      />
    </div>
    <h2>
      {/*If i dont put the breaks here, the auto height resize of the swipeable will cut the last part off*/}
      <br />
      <br />
      <br />
      <br />
    </h2>
  </div>
);

export const SkillContent = (
  <div style={{ display: "flex", flexWrap: "wrap" }}>
    <div style={{ margin: "1em" }}>
      <h2>
        <u>Programming</u>
      </h2>
      <h3>
        <ul>
          <li>C/C++ </li>
          <li>C# </li>
          <li>Python</li>
          <li>SQL</li>
          <li>HTLM/CSS/JavaScript</li>
          <li>ReactJS</li>
        </ul>
      </h3>
    </div>

    <div style={{ margin: "1em" }}>
      <h2>
        <u>IDE</u>
      </h2>
      <h3>
        <ul>
          <li>Visual Studios </li>
          <li>Visual Studio Code </li>
          <li>Notepad++</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>
        <u>Microsoft Office</u>
      </h2>
      <h3>
        <ul>
          <li>Word</li>
          <li>Powerpoint </li>
          <li>Excel</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>
        <u>Game Engines</u>
      </h2>
      <h3>
        <ul>
          <li>Unreal Engine</li>
          <li>Unity </li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>
        <u>Video/Image Manipulation</u>
      </h2>
      <h3>
        <ul>
          <li>DaVinci Resolve</li>
          <li>VideoPad</li>
          <li>Adobe Illustrator</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>
        <u>3D</u>
      </h2>
      <h3>
        <ul>
          <li>Blender</li>
          <li>AutoCad</li>
          <li>RealityCapture</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>
        <u>Art/Drawing</u>
      </h2>
      <h3>
        <ul>
          <li>Paint Tool SAI</li>
          <li>Krita</li>
          <li>Clip Studio Paint</li>
          <li>Corel Painter</li>
        </ul>
      </h3>
    </div>
  </div>
);

export const HobbiesContent = <div></div>;
