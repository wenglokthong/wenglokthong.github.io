export const RagnarokImages = [
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png"),
    imgInfo: "",
  },
];

export const RagnarokText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      Ragnarok is an ASCII graphics top down shooter game, developed using basic
      C language in a team of four within the span of about 2 months.
      <div style={{ marginTop: "1em" }} />
      This was quite a small project, and everyone in the team was new to
      gamedev and coding at that time, so there was not much going on other than
      getting the grasp of C programming.
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
          <li>Gameplay logic</li>
          <li>Ad hoc taskings</li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "1em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Post Mortem
      </div>
      To be honest, I can't really remember any significant ups or downs during
      the course of this project, but it was fun nonetheless.
    </div>
  </div>
);

export const ZeroDayImages = [
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png"),
    imgInfo: "",
  },
];

export const ZeroDayText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      ZER0-DAY (yes, it is spelled with a numerical zero) is a 2D pixel art
      styled, top down shooter game developed using C/C++ in a team of four,
      within a span of about 3 months. <div style={{ marginTop: "1em" }} />
      This was the first 'real' 2D game project, with 2D rendering support from
      an external library provided by the module (using opnGL under the hood).
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
          <li>Gameplay logic</li>
          <li>AI behaviour</li>
          <li>Architecture</li>
          <li>Ad hoc taskings</li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "1em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Post Mortem
      </div>
      Rough start due to inexperience with using C-styled libraries (AlphaEngine
      was a blackbox and the documentation was <s>horrible</s> not enough) and
      game programming. We managed to get something working out only at around
      the half sem point, and the rest of the semester was spent throwing
      everything together and duct-taping our game up.
      <br />
      Suprisingly, we managed to produce something satisfactory (to us). <br />
      Rough but memorable project!
    </div>
  </div>
);

export const GlowingUnderImages = [
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png"),
    imgInfo: "",
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
      Glowing Under is a puzzle platformer developed using C/C++ in a team of
      nine, within a span of about 8 months.
      <br />
      It was the first GAM project where the team had to develop a game using
      our own <i>custom engine</i>. Also, we had the opportunity to work with
      designers and artists from the BAGD and BFA degree respectively.
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
      It's hard to list down every single feature and aspect of the project, so
      I will only list down notable ones.
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
          <li>Setting up custom physics system in the game</li>
          <li>Gameplay mechanics</li>
          <li>Ad hoc taskings</li>
        </ul>
      </div>
    </div>
    <div
      style={{
        marginTop: "1em",
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      Post Mortem
    </div>
    Overall, it was a new experience working with designers and artists that
    were not from our course. The journey was fun with a great team.
    <br />
    Learnt alot about 2D physics, especially when I had to set up the physics
    system from scratch. (For anyone who is interested in learning 2D physics,
    google 'Randy Ghaul' or 'Erin Catto', they write very good articles and
    tutorials).
  </div>
);

export const RRRImages = [
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png"),
    imgInfo: "",
  },
  {
    imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png"),
    imgInfo: "",
  },
];

export const RRRText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      <br />
      <br />
      Glowing Under is a puzzle platformer developed using C/C++ in a team of
      nine, within a span of about 8 months.
      <br />
      It was the first GAM project where the team had to develop a game using
      our own <i>custom engine</i>. Also, we had the opportunity to work with
      designers and artists from the BAGD and BFA degree respectively.
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
      It's hard to list down every single feature and aspect of the project, so
      I will only list down notable ones.
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
          <li>Setting up custom physics system in the game</li>
          <li>Gameplay mechanics</li>
          <li>Ad hoc taskings</li>
        </ul>
      </div>
    </div>
    <div
      style={{
        marginTop: "1em",
        fontWeight: "bold",
        textDecoration: "underline",
      }}
    >
      Post Mortem
    </div>
    Overall, it was a new experience working with designers and artists that
    were not from our course. The journey was fun with a great team.
    <br />
    Learnt alot about 2D physics, especially when I had to set up the physics
    system from scratch. (For anyone who is interested in learning 2D physics,
    google 'Randy Ghaul' or 'Erin Catto', they write very good articles and
    tutorials).
  </div>
);
