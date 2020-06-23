import React from "react";

const NameAndPercent = ({ chances, name }) => {
  return (
    <div className="bounding_box-name ma2">
      {`there's ${chances}% chance that this celebrity is ${name}`}
    </div>
  );
};

export default NameAndPercent;
