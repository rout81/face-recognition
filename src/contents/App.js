import React, { Component } from "react";
import "./App.css";
import Navigation from "../components/Navigation";
import ImageLinkForm from "../components/ImageLinkForm";
// import Rank from "../components/Rank";
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import FaceRecognization from "../components/FaceRecognization";
import NameAndPercent from "../components/NameAndPercent";

//outputs[0].data.regions[0].data.concepts[0].name;

const app = new Clarifai.App({
  apiKey: "df91a4274f8e4cc989e62691767958db",
});

const customParticles = {
  particles: {
    number: {
      value: 80,
    },
    size: {
      value: 3,
    },
  },
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgurl: "",
      box: {},
      celebrityName: "",
      chances: "",
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  boxDisplay = (box) => {
    this.setState({ box: box });
    // console.log(box);
  };

  // getName = (celebrityName) => {
  //   this.setState({ celebrityName: celebrityName });
  //   console.log(celebrityName);
  // };

  onInput = (e) => {
    this.setState({ input: e.target.value });
  };

  buttonClick = () => {
    this.setState({ imgurl: this.state.input });

    app.models
      .predict(Clarifai.CELEBRITY_MODEL, this.state.input)
      .then((response) => {
        const concepts = response.outputs[0].data.regions[0].data.concepts[0];
        this.setState({
          celebrityName: concepts.name,
          chances: Number(concepts.value * 100).toFixed(3),
        });
      });

    app.models
      .predict(Clarifai.CELEBRITY_MODEL, this.state.input)
      .then((response) => this.boxDisplay(this.calculateFaceLocation(response)))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Particles className="particle" params={customParticles} />
        <Navigation />
        <ImageLinkForm onInput={this.onInput} buttonClick={this.buttonClick} />
        {this.state.celebrityName !== "" ? <div>
          <NameAndPercent
          chances={this.state.chances}
          name={this.state.celebrityName}
        />
        </div> : '' }
        <FaceRecognization imgurl={this.state.imgurl} box={this.state.box} />
        {/* <Rank /> */}
      </div>
    );
  }
}

export default App;
