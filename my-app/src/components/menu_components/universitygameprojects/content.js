export const RagnarokImages = [
  {
    imgSrc: require("../../../assets/images/digipengampictures/ragnarok1.png"),
    imgInfo: "Main Menu",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/ragnarok2.png"),
    imgInfo: "Gameplay",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/ragnarok3.png"),
    imgInfo: 'Starting "cutscene"',
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/ragnarok4.png"),
    imgInfo: "Instructions page",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/ragnarok5.png"),
    imgInfo: "Example of powerup drop",
  },
];

export const RagnarokText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      Ragnarok is an ASCII graphics top down shooter game, developed using basic
      C language in a team of four within the span of about 2 months.
      <div style={{ marginTop: "1em" }} />
      This was quite a small project, with everyone in the team new to gamedev
      and coding at that point in time
    </div>
    <div style={{ marginTop: "1em" }}>
      <u style={{ fontWeight: "bold" }}>About the game</u>
      <ul>
        <li>Move and shoot!</li>
        <li>Destroy enemies, which might drop powerups</li>
        <li>
          Powerups might be random stat modifiers, different weapons, or health
        </li>
        <li>Survive the longest and score points</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Development</u>
      <ul>
        <li>
          Small project structure, most source and header files being in one
          folder
        </li>
        <li>
          Rendering is done with the aid of console output helper functions
          supplied by our lecturer
        </li>
        <li>
          No complex algorithms in this project, everything was done by
          iterative loops or hardcoding. There was no need to optimize anything
          anyway since the project was so small.
        </li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Role and contribution</u>
      <div>
        Official Role: Producer <br />
        <br />
        Contributions
        <ul>
          <li>Managing team progress and taskings</li>
          <li>Project file management</li>
          <li>
            Gameplay features
            <ul>
              <li>AI behaviour</li>
              <li>Player movement</li>
              <li>Player firing</li>
              <li>Overall mechanics</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const ZeroDayImages = [
  {
    imgSrc: require("../../../assets/images/digipengampictures/zeroday/zeroday1.png"),
    imgInfo: "Main Menu",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/zeroday/zeroday2.png"),
    imgInfo: "Mission display",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/zeroday/zeroday3.png"),
    imgInfo: "Gameplay",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/zeroday/zeroday4.png"),
    imgInfo: "Boss fight",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/zeroday/zeroday5.png"),
    imgInfo: "Mission failed",
  },
];

export const ZeroDayText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      ZER0-DAY (yes, it is spelled with a numerical zero) is a 2D pixel art
      styled, top down shooter game developed using C/C++ in a team of four,
      within a span of about 3 months. <div style={{ marginTop: "1em" }} />
      This was a 2D game project with rendering support from an external library
      provided by the module (using openG).
    </div>
    <div style={{ marginTop: "1em" }}>
      <u style={{ fontWeight: "bold" }}>About the game</u>
      <ul>
        <li>Move and shoot with mouse aim! </li>
        <li>
          Different kinds of enemies with different behaviours (eg. grow larger
          when they take damage, sudden burst of speed every interval etc
        </li>
        <li>Enemies might drop health</li>
        <li>2 different helper skills: Shield and Teleport </li>
        <li>
          Three levels in total, two levels with objectives and the last level
          being a boss fight
        </li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Development</u>
      <ul>
        <li>
          Usage of an external library 'AlphaEngine' provided to help with
          backend operations
          <ul>
            <li>
              Rendering: Loading and freeing of textures, rendering of meshes
              and fonts
            </li>
            <li>Math: Vector and trigonometric math</li>
            <li>Input: Mouse and keyboard input data</li>
          </ul>
        </li>
        <li>State machine to transition between levels</li>
        <li>
          Object pooling for all entities
          <ul>
            <li>All entities share the same pool</li>
          </ul>
        </li>
        <li>Spritesheet UV iteration for animation</li>
        <li>Enemy AI</li>
        <li>
          2D collision
          <ul>
            <li>AABB collision checking (no OBB though)</li>
          </ul>
        </li>
        <li>FMod for audio</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Role</u>
      <div>
        Official Role: Producer
        <br />
        <br />
        Contributions
        <ul>
          <li>Managing team progress and taskings</li>
          <li>
            Gameplay features
            <ul>
              <li>AI behaviour</li>
              <li>Player movement</li>
              <li>Abilities</li>
              <li>Mission mechanics</li>
            </ul>
          </li>

          <li>Architecture</li>
        </ul>
      </div>
    </div>
  </div>
);

export const GlowingUnderImages = [
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder1.PNG"),
    imgInfo: "Main menu",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder2.PNG"),
    imgInfo: "Pause menu",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder3.PNG"),
    imgInfo: "Environmental storytelling",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder4.PNG"),
    imgInfo: "Gameplay",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder5.PNG"),
    imgInfo: "Village scene",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder6.PNG"),
    imgInfo: "Dialogue bubble",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder7.PNG"),
    imgInfo: "Editor tiling feature",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder8.PNG"),
    imgInfo: "Editor debugging feature",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder9.PNG"),
    imgInfo: "Editor graph feature",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder10.PNG"),
    imgInfo: "Hints",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder11.PNG"),
    imgInfo: "Platforming puzzle",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/GlowingUnder/GlowingUnder12.PNG"),
    imgInfo: "Environmental entities",
  },
];

export const GLowingUnderText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      <a
        href="https://games.digipen.edu/games/glowing-under"
        target="_blank"
        rel="noreferrer"
      >
        Download the game here
      </a>
      <br />
      <br />
      Glowing Under is a 2D puzzle platformer developed using C/C++ in a team of
      nine, within a span of about 8 months.
      <br />
      It was the first GAM project where the team had to develop a game using
      our own <i>custom game engine</i>. Also, we had the opportunity to work
      with designers and artists from the BAGD and BFA degree respectively.
    </div>
    <div style={{ marginTop: "1em" }}>
      <u style={{ fontWeight: "bold" }}>About the game</u>
      <ul>
        <li>Explore an underground cave by walking or flying</li>
        <li>Interact with the environment with your light puff</li>
        <li>Platform and entities with variety of mechanics</li>
        <li>Light up totems and torches along the way </li>
        <li>Experience cinematics and storytelling while playing the game</li>
        <li>Outstanding art!</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Development</u>
      <br />
      Some notable features...
      <ul>
        <li>
          Custom Engine
          <ul>
            <li>Entity Component System(ECS) Framework</li>
            <li>Native scripting</li>
            <li>Property reflection using RTTR library</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          Custom Editor made using Dear IMGui
          <ul>
            <li>Drag and drop</li>
            <li>Timeline and animator</li>
            <li>Sprite tiling</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          Custom 2D physics system
          <ul>
            <li>Collision detection and resolution</li>
            <li>Box,Circle,Polygon collider shapes support</li>
            <li>Dynamic AABB narrow phase optimization</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          2D graphics
          <ul>
            <li>Batch rendering</li>
            <li>Lighting</li>
            <li>Fonts</li>
            <li>...</li>
          </ul>
        </li>
        <li>Dialogue System</li>
        <li>Fmod for audio</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Role</u>
      <div>
        Official Role: Physics and Collision Champion
        <br />
        <br />
        Contributions
        <ul>
          <li>
            Setting up custom physics system in the game
            <ul>
              <li>AABB and OBB collision detection and resolution</li>
              <li>Box,Circle,Polygon collider shapes support</li>
              <li>Broad phase and narrow phase optimization</li>
              <li>Forces and gravity</li>
            </ul>
          </li>
          <li>
            Gameplay features
            <ul>
              <li>Player movement (walking, boosting, flying)</li>
              <li>Player ability</li>
              <li>AI behaviour</li>
              <li>Environmental mechanics</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export const RRRImages = [
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_MenuScreen-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_StartScreen-min.png"),
    imgInfo: "",
  },

  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame00-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame01-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame02-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame03-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame04-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame05-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame06-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame07-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame08-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame09-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame10-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame11-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_InGame12-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_Editor01-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_Editor02-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_Editor03-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_Editor04-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_Editor05-min.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../../assets/images/digipengampictures/rapidridefight/RapidRideFight_Editor06-min.png"),
    imgInfo: "",
  },
];

export const RRRText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      <a
        href="https://www.youtube.com/watch?v=bge3fiypg5U&ab_channel=ChuRuiHeng"
        target="_blank"
        rel="noreferrer"
      >
        Watch the trailer here!
      </a>
      <br />
      <br />
      Rapid Ride Fight is a 3D Capture the Flag, 4v4 networked multiplayer,
      arena battle game developed using C/C++ in a team of ten, within a span of
      about 8 months.
      <br />
      Again, it is made using our own developed custom game engine. It was a
      challenging project due to the nature of making a 3D game. However, the
      team members were mostly the same as those in the previous GAM project,
      which made workflow and teamwork smoother.
    </div>
    <div style={{ marginTop: "1em" }}>
      <u style={{ fontWeight: "bold" }}>About the game</u>
      <ul>
        <li></li>
        <li>4v4 Capture the flag</li>
        <li>
          Play with others across a dedicated server or locally against AI. Or
          both!
        </li>
        <li>3 different skills to utilize</li>
        <li>Water environment</li>
        <li>3D audio</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Development</u>
      <br />
      Some notable features...
      <ul>
        <li>
          Custom Engine Architecture
          <ul>
            <li>Entity Component System(ECS) Framework</li>
            <li>Mono C# scripting</li>
            <li>Reflection, Serialisation/Deserialistion</li>
            <li>Multithreading support</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          Custom Editor made using Dear IMGui
          <ul>
            <li>Drag and drop</li>
            <li>Timeline</li>
            <li>Asset loader</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          Physics integrated using PhysX
          <ul>
            <li>Static,Rigid,Kinetic bodies support</li>
            <li>Sphere,Box,Capsule,Convex collider support</li>
            <li>Forces and collision resolution</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          2D graphics
          <ul>
            <li>UI rendering</li>
            <li>Fonts</li>
            <li>Particles (billboard style)</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          3D graphics
          <ul>
            <li>Frustum culling</li>
            <li>Lighting and shadows</li>
            <li>PBL material pipeline</li>
            <li>...</li>
          </ul>
        </li>
        <li>SLikenet for networking</li>
        <li>Fmod for 2D and 3D audio</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Role</u>
      <div>
        Official Role: Physics and Collision Champion
        <br />
        <br />
        Contributions
        <ul>
          <li>
            Physics
            <ul>
              <li>Setting up the physics system using PhysX API</li>
              <li>Syncing PhysX and ECS components together</li>
              <li>"Water physics"</li>
            </ul>
          </li>
          <li>
            Gameplay scripting using C#
            <ul>
              <li>Player movement (normal, drift, stuns)</li>
              <li>Player abilities (shield, missle, boost)</li>
              <li>Dynamic camera (smoothed motions, collision detection)</li>
            </ul>
          </li>
          <li>Extending the Particle System</li>
        </ul>
      </div>
    </div>
  </div>
);
