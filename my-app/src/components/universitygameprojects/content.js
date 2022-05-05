export const RagnarokImages = [
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const RagnarokText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      Ragnarok is an ASCII graphics top down shooter game, developed using basic
      C language in a team of four within the span of about 2 months. (C++ is
      allowed but not encouraged because the point of this project was to have
      the foundation of C in place)
    </div>
    <div style={{ marginTop: "1em" }}>
      <u style={{ fontWeight: "bold" }}>About the game</u>
      <ul>
        <li>Move and shoot!</li>
        <li>Destroy enemies, which might drop powerups</li>
        <li>
          Powerups might be random stat modifiers, different weapons, or health
        </li>
        <li>Survive the longest and score points!</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Development takeaways</u>
      <ul>
        <li>
          The game itself is small enough to not require a full scale 'engine'
        </li>
        <li>
          Project structure is only consisted of 3 major parts: rendering, logic
          and input.
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
      <u style={{ fontWeight: "bold" }}>Role</u>
      <div>
        I was the Producer for the team, in charge of keeping taskings and
        progress on track. Technical wise, I was involved in almost all parts of
        the game development, mostly game logic and state management.
      </div>
      <div
        style={{
          marginTop: "1em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Experience
      </div>
      Overall, I would say this is a short and fun project. Looking back at this
      project when I am writing this, there is definitely things to improve and
      fix, but we all got to start somewhere in the world of coding.
    </div>
  </div>
);

export const ZeroDayImages = [
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const ZeroDayText = (
  <div style={{ fontSize: "1em" }}>
    <div>
      ZER0-DAY (yes, it is spelled with a numerical zero) is a 2D pixel art
      styled, top down shooter game developed using C/C++ in a team of four,
      within a span of about 3 months. A helper library for rendering and math
      was provided for this project, since 2D graphics rendering was something
      new at this point. The goal of this project was to expose us to making a
      2D game, focusing less on the engine features but more on game design and
      C/C++ foundation, although we still mostly used C since we were currently
      learning C++ in the same semester and were not confident in properly
      applying it yet.
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
      <u style={{ fontWeight: "bold" }}>Development takeaways</u>
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
        <li>
          Dealing with pointers and memory leaks
          <ul>
            <li>
              Usage of AlphaEngine heavily involves passing pointers around
            </li>
            <li>
              Need to be careful in remembering to free memory as we were
              allocating and deallocating on our own
            </li>
          </ul>
        </li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Role</u>
      <div>
        I was the Producer for the team, in charge of keeping taskings and
        progress on track. Technical wise, I was involved in
        <ul>
          <li>Gameplay logic</li>
          <li>AI behaviour</li>
          <li>Architecture</li>
        </ul>
      </div>
      <div
        style={{
          marginTop: "1em",
          fontWeight: "bold",
          textDecoration: "underline",
        }}
      >
        Experience
      </div>
      We had a rough start during the first few weeks of the project due to not
      having a concrete architecture for our game. Also, alot of time was spent
      learning and integrating the external library into the game (the library
      was a blackbox and the documentation wasn't that helpful). We ended up
      using the framework of an Asteroids game project from another module.
      <br />
      However, after this initial hurdle, everything became smoother once the
      architecture was in place. Gameplay logic was fun, including learning how
      to use vector operations to make enemies move in a certain path or face a
      certain direction.
    </div>
  </div>
);
