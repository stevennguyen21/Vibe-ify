import React from 'react';
import './css/App.css';
import MainScreen from './MainScreen.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      response: ''
    }
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
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

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
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
        <div>
          {this.state.response}
        </div>
      )
    }
  }
}

export default App;
