import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Login, Join, Main } from './pages';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router exact path="/" component={Login} />
        <Router exact path="/Join" component={Join} />
        <Router exact path="/Main" component={Main} />
        <div>
          파일 정리좀 했으~~ ㅋㅋㅋ npm 버전도 맞춰 놨으~
          노드 연동은 아직 ; ㅎㅎㅎ 회사일 바빠서~ 4월 말까지 CRUD 동작할 수 있게 여기다가 붙여놓을께 
        </div>
      </Fragment>
    )
  }
}

export default App;