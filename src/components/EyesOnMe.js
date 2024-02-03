// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function handleFocus(e) {
    console.log("Good!");
  }

  function handleBlur(e) {
    console.log("Hey! Eyes on me!");
  }

  return (
    <button onBlur={handleBlur} onFocus={handleFocus}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
