import React from "react";
import MemeGeneratorDumb from "./MemeGenerator_DumbComponent";

class MemeGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(resp => resp.json())
      .then(resp => {
        const { memes } = resp.data;
        console.log(memes);
        this.setState({
          allMemeImgs: memes
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    console.log("randomNum", randomNum);
    const newImgUrl = this.state.allMemeImgs[randomNum].url;
    this.setState({
      randomImg: newImgUrl
    });
  }

  render() {
    return (
      <MemeGeneratorDumb
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default MemeGenerator;
