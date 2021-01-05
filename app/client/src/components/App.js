import React from 'react';
import './css/App.css';
import MainScreen from './MainScreen.jsx';
import SelectionScreen from './SelectionScreen.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      response: '',
      access: params.access_token
    }
    this.createPlaylist = this.createPlaylist.bind(this);
  }


  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  // callApi = async () => {
  //   const response = await fetch('/api/hello');
  //   const body = await response.json();
  //   if (response.status !== 200) throw Error(body.message);

  //   return body;
  // }

  createPlaylist() {
    axios.post('/api/playlist', {
      access: this.state.access
    })
      .then(() => { console.log('success') })
      .catch(() => { console.log('error') })
  }

  render() {
    if (!this.state.loggedIn) {
      return (
        <div className="App">
          <MainScreen />
        </div>
      );
    } else {
      return (
        <div className="App">
          <SelectionScreen params={this.state.access} createPlaylist={this.createPlaylist}/>
        </div>
      )
    }
  }
}

export default App;
