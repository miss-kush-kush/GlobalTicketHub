import React, { Component } from 'react';
import './AuthForm.css';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class AuthForms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeForm: 'login',
    };
  }

  handleFormSwitch = (newForm) => {
    this.setState({ activeForm: newForm });
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="buttons-container">
          <button
              classNames = 'button-select'
              onClick={() => this.handleFormSwitch('login')}
              className={this.state.activeForm === 'register' ? 'active' : ''}
            >
              Аутентифікація
            </button>
            <button
              classNames = 'button-select'
              onClick={() => this.handleFormSwitch('register')}
              className={this.state.activeForm === 'login' ? 'active' : ''}
            >
              Реєстрація
            </button>
            
            {/* Place the forms below the buttons */}
            <div className="forms-container">
              {this.state.activeForm === 'login' ? <LoginForm /> : <RegisterForm />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthForms;
