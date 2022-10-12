import { useEffect, useState } from "react";
import { MyBackButton } from "../../../@helpers/buttons/button";

export const Des396A3 = () => {
  const [a3images, seta2images] = useState([]);
  useEffect(() => {
    const importAll = (r) => {
      return r.keys().map(r);
    };

    var listOfImages = importAll(
      require.context(
        "./../../../../assets/images/DES396/A3",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );

    seta2images(listOfImages);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h1>Style guide images for Spirita</h1>
      </div>
      <div>
        {a3images.map((image, index) => (
          <img style={{ width: "100%" }} key={index} src={image} alt=""></img>
        ))}
      </div>
      <div>
        <MyBackButton />
      </div>
    </div>
  );
};
