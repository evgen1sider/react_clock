import React from 'react';
import './App.scss';
import { Clock } from './components/Clock';

interface State {
  isClockVisible: boolean,
  clockName: number;
}

export class App extends React.Component<{}, State> {
  state: State = {
    isClockVisible: true,
    clockName: 0,
  };

  showClock = () => {
    this.setState((currentState) => ({
      isClockVisible: !currentState.isClockVisible,
    }));
  };

  hideClock = () => {
    this.setState({
      isClockVisible: false,
    });
  };

  setRandomName = () => {
    this.setState({
      clockName: Math.ceil(Math.random() * 10),
    });
  };

  render() {
    const { isClockVisible, clockName } = this.state;

    return (
      <div className="App">
        <h1>
          React clock
          <span>{clockName}</span>
        </h1>

        <button
          type="button"
          onClick={this.setRandomName}
        >
          random
        </button>

        <button
          type="button"
          onClick={this.showClock}
        >
          show clock
        </button>

        <button
          type="button"
          onClick={this.hideClock}
        >
          hide clock
        </button>
        <p>
          Current time:
          {' '}
          {isClockVisible && (
            <div>
              <Clock name={clockName} />
            </div>
          )}
        </p>
      </div>
    );
  }
}
