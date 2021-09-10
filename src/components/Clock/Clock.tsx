import React from 'react';

interface Props {
  name: number;
}

interface State {
  date: string;
}

export class Clock extends React.Component<Props, State> {
  timer: number;

  state: State = {
    date: new Date().toLocaleTimeString(),
  };

  constructor(props: Props) {
    super(props);

    this.timer = 0;
  }

  componentDidMount() {
    // eslint-disable-next-line no-console
    console.log('mounted');

    window.setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),
      }, () => {
        // eslint-disable-next-line no-console
        console.log(this.state.date);
      });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // eslint-disable-next-line no-console
    console.log('updated');

    const oldName = prevProps.name;
    const newName = this.props.name;

    if (oldName !== newName) {
      // eslint-disable-next-line no-console
      console.log(`clock name rename from ${oldName} to ${newName}`);
    }
  }

  componentWillUnmount() {
    // eslint-disable-next-line no-console
    console.log('unmount');
    clearInterval(this.timer);
  }

  render() {
    const { date } = this.state;

    return (
      <>
        {/* <div className="h2"></div> */}
        <div className="h3">
          Current time:
          {' '}
          {date}
        </div>
      </>
    );
  }
}
