import "./content.css";
import { ContentCollapsible } from "../@helpers/content/contentcollapsible";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./aboutme.css";
import linkedinlogo from "../../assets/images/linkedin-logo.png";
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
      <h2>Programming</h2>
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
      <h2>IDE</h2>
      <h3>
        <ul>
          <li>Visual Studios </li>
          <li>Visual Studio Code </li>
          <li>Notepad++</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>Microsoft Office</h2>
      <h3>
        <ul>
          <li>Word</li>
          <li>Powerpoint </li>
          <li>Excel</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>Game Engines</h2>
      <h3>
        <ul>
          <li>Unreal Engine</li>
          <li>Unity </li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>Video/Image Manipulation</h2>
      <h3>
        <ul>
          <li>DaVinci Resolve</li>
          <li>VideoPad</li>
          <li>Adobe Illustrator</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>3D</h2>
      <h3>
        <ul>
          <li>Blender</li>
          <li>AutoCad</li>
          <li>RealityCapture</li>
        </ul>
      </h3>
    </div>
    <div style={{ margin: "1em" }}>
      <h2>Art/Drawing</h2>
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

export const NerdContent = (
  <div>
    <h2>Games</h2>
    <h4>
      I love playing games, and I have tried and explored many digital games out
      there. My favourite genre would be action rpg, hack and slash, looter
      shooters games. I tend to avoid the puzzle, narrative or racing genre.
      <br /> Here are some of my favourite games (I might not have necessarily
      played or completed them, but I have interest in them)
    </h4>

    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ flex: "1" }}>
        <h3>MMORPGs</h3>
        <h4>
          <ul>
            <li>
              Granado Espada (Hit me up if you actually know or played this)
            </li>
            <li>TERA </li>
            <li>PSO2</li>
          </ul>
        </h4>
      </div>

      <div style={{ flex: "1" }}>
        <h3>Multiplayer</h3>

        <h4>
          <ul>
            <li>Paladins (Paladins {">"} Overwatch, fight me)</li>
            <li>The Division 1 {"&"} 2</li>
            <li>Tom Clancy's Ghost Recon Wildlands and Breakpoint</li>
          </ul>
        </h4>
      </div>
      <div style={{ flex: "1" }}>
        <h3>Singleplayer</h3>
        <h4>
          <ul>
            <li>Halo Series (Those under Bungie anyway)</li>
            <li>God of War Series</li>
            <li> Far Cry Series</li>
          </ul>
        </h4>
      </div>
      <div style={{ flex: "1" }}>
        <h3>Mobile</h3>
        <h4>
          <ul>
            <li>Brawl Stars (I'm probably still playing this)</li>
          </ul>
        </h4>
      </div>
    </div>

    <h2>Shows</h2>
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ flex: "1" }}>
        <h3>Anime</h3>
        <h4>
          <ul>
            <li>Attack on Titan (My first anime, so I'm biased)</li>
            <li>
              Seven Deadly Sins S1 {"&"} S2 (I refuse to accept anything after){" "}
            </li>
            <li>Toriko</li>
          </ul>
        </h4>
      </div>

      <div style={{ flex: "1" }}>
        <h3>Cartoon</h3>

        <h4>
          <ul>
            <li>Avatar: The Last Airbender {"&"} The Legend of Korra</li>
            <li>Invincible</li>
            <li>
              Phineas and Ferb (This show seems funnier when you watch it as an
              adult)
            </li>
          </ul>
        </h4>
      </div>
    </div>
  </div>
);
