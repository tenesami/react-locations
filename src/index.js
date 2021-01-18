import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props){
    //uses to refernce the parent of constructor class 
    super(props)

    //since we don't know the value of lat we intialize to null
    this.state = {lat: null, errorMessage: ''};

  }

  componentDidMount(){

    window.navigator.geolocation.getCurrentPosition (
      postition => this.setState({lat: postition.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }
  //render is for react requirment 
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }  
    return<div>Loading! </div>;
  };
}




ReactDOM.render(
<App />,

  document.getElementById('root')
);

