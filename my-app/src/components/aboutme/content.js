import "./content.css";
import { ContentCollapsible } from "../@helpers/content/contentcollapsible";

export const IntroContent = (
  <div>
    <h1>Hi, I'm Max</h1>
    <h2></h2>
  </div>
);

export const NerdContent = (
  <div>
    <div>
      <h2>Games</h2>
      <h4>
        Although my days of hardcore gaming are over, I am still a casual gamer.
        Mostly exploring and trying out games just for relaxation.
        <br /> Here are some of my favourite and notable games that I have
        played.
      </h4>
      <h3>MMORPGs</h3>
      <h4>
        <ul>
          <li>
            Granado Espada (Hit me up if you actually know or played this)
          </li>
          <li>TERA </li>
          <li>Neverwinter</li>
          <li>PSO2</li>
        </ul>
        <i>Yes, I have never played MapleStory</i>
      </h4>

      <h3>Multiplayer</h3>
      <h4>
        <ul>
          <li>Paladins (Paladins {">"} Overwatch, fight me)</li>
          <li>Remnant: From the Ashes</li>
          <li>Minecraft</li>
          <li>Garry's Mod</li>
          <li>Left 4 Dead 2</li>
        </ul>
      </h4>

      <ContentCollapsible title="MEOW">
        <h4>
          <ul>
            <li>Paladins (Paladins {">"} Overwatch, fight me)</li>
            <li>Remnant: From the Ashes</li>
            <li>Minecraft</li>
            <li>Garry's Mod</li>
            <li>Left 4 Dead 2</li>
          </ul>
        </h4>
      </ContentCollapsible>
      <h3>Singleplayer</h3>
      <h4>
        <ul>
          <li>
            Halo:CE {"&"} Halo 2 (Played them when they launched in the original
            XBox. My childhood is right here)
          </li>
          <li>Halo MCC</li>
          <li>God of War: Chains of Olympus {"&"} Ghost of Sparta</li>
          <li>Garry's Mod</li>
          <li>Left 4 Dead 2</li>
        </ul>
      </h4>
    </div>
  </div>
);
