import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  //bable will built constructor for us 
    state = {lat: null, errorMessage: ''};

  componentDidMount (){
    window.navigator.geolocation.getCurrentPosition (
      postition => this.setState({lat: postition.coords.latitude}),
      err => this.setState({errorMessage: err.message})
    );
  }

  renderContent (){
      if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>;
      }

      if(!this.state.errorMessage && this.state.lat) {
        return <SeasonDisplay lat={this.state.lat}/>
      }  
      return <Spinner message="please accept location request to see the page" />;
   }
  
    render(){
      return (
        <div className="border red">
          {this.renderContent()}
        </div>
      )
  }
}


ReactDOM.render(
<App />,

  document.getElementById('root')
);

