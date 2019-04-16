import React, { Component } from 'react';
import '../css/galsan.css';

class Join extends Component {

    state = {
        id : '',
        pass : '',
        name : '',
        phone : '',
        address : ''
    };

    handlerIdChange = (e) => {
        this.setState({
            id :  e.target.value
        });
    }

    handlerPassChange = (e) => {
        this.setState({
            pass :  e.target.value
        });
    }

    handlerNameChange = (e) => {
        this.setState({
            name :  e.target.value
        });
    }

    handlerPhoneChange = (e) => {
        this.setState({
            phone :  e.target.value
        });
    }

    handlerAddressChange = (e) => {
        this.setState({
            address :  e.target.value
        });
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
                <div>
                    <div>Name</div>
                    <input type="text" onChange={this.handlerNameChange}></input>
                </div>
                <div>
                    <div>Phone</div>
                    <input type="text" onChange={this.handlerPhoneChange}></input>
                </div>
                <div>
                    <div>Address</div>
                    <input type="text" onChange={this.handlerAddressChange}></input>
                </div>
                <br />
                <button className="mR10" onClick={() => this.handlerJoin()}>Join</button>
                <button className="mL10" onClick={() => {this.props.history.push('/')}}>Cancel</button>
                </div>
            </div>
        );
    }
}


export default Join;