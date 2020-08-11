import React, {Component} from 'react';
import Particles from 'react-particles-js';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';




const particlesOoptions = {
  particles: {
    number: {
      value: 150,
      density:{
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  constructor() {
    super();
    this.state={
      input:'',
      imageUrl:'',
      box:{}
      }
    }
  

   

    calculateFaceLocation = (data) => {
      const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
      const image = document.getElementById('inputimage');
      const width = Number(image.width);
      const height = Number(image.height);
      return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row *height)
      }
    }


    displayFaceBox = (box) =>{
      this.setState({box: box});
    }

    onInputChange = (event) => {
      this.setState({input:event.target.value});
    }

    onSubmit = () => {
      this.setState({imageUrl:this.state.input});
      fetch('http://localhost:3001/api',{
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({
          input:this.state.input
        })
      })
      .then(response => response.json())
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
          .catch(err => console.log(err));
    }


    render(){
    return (
      <div className="App">
        <Particles className='particles' params={particlesOoptions}/>
            <div>
              <Logo/>
              <ImageLinkForm onInputChange={this.onInputChange} onSubmit={this.onSubmit}/>
              <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
            </div>
      </div>
    );
  }
}

export default App;
