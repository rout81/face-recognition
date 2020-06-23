import React from "react";

const ImageLinkForm = ({onInput, buttonClick}) => {
  return (
    <div className="f3-ns pa2">
      <p>{"This AI Face Recognition Tool Will Identify Your Favorite Celebrity."}</p>
      <div className="flex justify-center">
        <div className="form flex justify-center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70" 
          onChange={onInput}
          placeholder="Add Image Link"
          type="text" />
          <button
            className="f4 pointer borderbtn grow w-30-l ph3-l pv2 dib white bg-blue"
            onClick={buttonClick}
            type="search"
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
