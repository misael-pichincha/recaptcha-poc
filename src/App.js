import logo from './logo.svg';
import React from 'react';
import { ReCaptcha, loadReCaptcha } from 'react-recaptcha-v3';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recaptchaToken: ''
    };
  }
  componentDidMount() {
    loadReCaptcha(process.env.REACT_APP_RECAPTCHA_SITE_KEY);
  }
  updateRecaptchaToken() {
    this.recaptcha.execute();
  }
  render() {
    return (
      <div className="App">
        <ReCaptcha action='cr'
          ref={ref => this.recaptcha = ref}
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          verifyCallback={(token) => {
            console.log(token);
            this.setState({
              recaptchaToken: token
            })
          }}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button onClick={() => this.updateRecaptchaToken()}>Generar recaptcha</button>
        </header>
      </div>
    );
  }
}

export default App;
