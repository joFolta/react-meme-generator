import React from "react";

function MemeGeneratorDumb(props) {
  return (
    <div>
      <form className="meme-form" onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="topText"
          placeholder="Enter Here"
          value={props.data.topText}
          onChange={props.handleChange}
        />
        <div />

        <input
          type="text"
          name="bottomText"
          placeholder="Enter Here"
          value={props.data.bottomText}
          onChange={props.handleChange}
        />
        <button>Generate</button>
      </form>

      <div className="meme">
        <img src={props.data.randomImg} />
        <h2 className="top">{props.data.topText}</h2>
        <h2 className="bottom">{props.data.bottomText}</h2>
      </div>
    </div>
  );
}

export default MemeGeneratorDumb;
