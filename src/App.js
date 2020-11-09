import React from "react";
import logo from './logo.svg';
import './App.css';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
Amplify.configure(awsExports);

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello World - Bravo!
        </p>
        <AmplifySignOut />
        </header>
        <AmplifySignOut />
      </div>
    )

  }
  
}

export default withAuthenticator(App, true);