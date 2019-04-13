import React, { Component } from 'react';
import '../galsan.css';

class Login extends Component {
    state = {
        id: '',
        pass: ''
    }

    handlerIdChange = (e) => {
        this.setState({
            id: e.target.value
        });
    }


    handlerPassChange = (e) => {
        this.setState({
            pass: e.target.value
        });
    }

    handlerCheck = () => {
        if (this.state.id === "galsan" && this.state.pass === '1111')
            alert('어서오세요!');
        else {
            alert('ID, PassWord 를 다시 확인해 주세요');
        }
    }

    render() {
        return (
            <div className="Login">
                <div className="pT150">
                    <div>
                        <div>ID</div>
                        <input type="text" onChange={this.handlerIdChange}></input>
                    </div>
                    <div>
                        <div>Password</div>
                        <input type="password" onChange={this.handlerPassChange}></input>
                    </div>
                    <br />
                    <button className="mR10" onClick={() => {
                        this.props.history.push('/Home');
                    }}>Login</button>
                    <button className="mL10" onClick={() => {
                        this.props.history.push('/Join');
                    }}>Join</button>
                </div>
            </div>
        );
    }
}

export default Login;