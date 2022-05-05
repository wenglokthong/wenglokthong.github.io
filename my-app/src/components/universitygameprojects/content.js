export const RagnarokImages = [
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const RagnarokText = (
  <div>
    <div>
      Ragnarok is an ASCII graphics top down shooter game, developed using basic
      C language in a team of four. (C++ is allowed but not encouraged because
      the point of this project was to have the foundation of C in place)
    </div>
    <div style={{ marginTop: "1em" }}>
      <u style={{ fontWeight: "bold" }}>What you can do in the game</u>
      <ul>
        <li>WASD to move, firing of weapon is automatic</li>
        <li>Destroy enemies, which might drop powerups</li>
        <li>
          Powerups might be
          <ul>
            <li>
              random stat modifiers (come in a pair of positive and negative
            </li>
            <li>different weapon</li>
            <li>health</li>
          </ul>
        </li>
        <li>Survive the longest and score points!</li>
      </ul>
      <u style={{ fontWeight: "bold" }}>Development and role</u>
      <ul>
        <li>
          The game itself is small enough to not require a full scale 'engine'
        </li>
        <li>
          Project structure is only consisted of 3 major parts: rendering, logic
          and input. All the files are in one folder.
        </li>
        <li>
          Rendering is done with the aid of console output helper functions
          supplied by our lecturer
        </li>
        <li>
          No complex algorithms in this project, everything was done by
          iterative loops or hardcoding
        </li>
      </ul>
      Since everyone in the team had no prior experience or knowledge in game
      development and coding, there wasn't any proper splitting of taskings and
      roles. Everybody was involved in everything. It was more of an opportunity
      to grasp a hold of C programming.
    </div>
  </div>
);

export const ZeroDayImages = [
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok1.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok2.png") },
  { imgSrc: require("../../assets/images/digipengampictures/ragnarok3.png") },
];

export const ZeroDayText = (
  <div>
    Ragnarok is an ASCII graphics top down shooter game, developed using basic C
    language in a team of four.
  </div>
);
