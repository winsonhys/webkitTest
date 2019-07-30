import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "semantic-ui-react";

class App extends React.Component {
  
  componentDidMount() {
    window.androidObj = function AndroidClass() {};
  }

  render() {
    return (
      <div className="App">
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
          <Button
            onClick={() => {
              let message = {
                test: "test"
              };

              try {
                // window.androidObj.textToAndroid({"test": "test"});
                javascript_obj.textFromWeb(message)
                console.log("lawl");
              } catch (e) {
                console.log(e);
              }
              try {
                window.webkit.messageHandlers.test.postMessage(message);
                console.log("lawl");
              } catch (e) {
                console.log(e);
              }
            }}
          >
            Click this to trigger event
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
