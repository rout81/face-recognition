import React from "react";
import "./facerecognition.css";

const FaceRecognization = ({ imgurl, box}) => {
  return (
    <div className="flex justify-center ma">
      <div className="relative mt2">
        <img id="inputImage" width="500px" height="auto" src={imgurl} alt="" />
        <div
          className="bounding_box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        >
        </div>
      </div>
    </div>
  );
};

export default FaceRecognization;
