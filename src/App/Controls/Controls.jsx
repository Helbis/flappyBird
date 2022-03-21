import React from "react";
import ButtonRestart from "./Buttons/ButtonRestart";
import ButtonPausePlay from "./Buttons/ButtonPausePlay";

import "./Controls.css";


class Controls extends React.Component {

  render () {
    return (
      <div className="Controls">
        <ButtonRestart />
        <ButtonPausePlay />
      </div>
    )
  }
}

export default Controls;
