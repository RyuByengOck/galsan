import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Login, Join, Main } from './pages';

class App extends Component {

  state = { username: null };

  componentDidMount() {
    fetch('/api/getUserName')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }


  render() {
    const { username } = this.state;
    return (
      <Fragment>
        <Router exact path="/" component={Login} />
        <Router exact path="/Join" component={Join} />
        <Router exact path="/Main" component={Main} />
        <div>
          {username}
        </div>
      </Fragment>
    );
  }
}

export default App;