import React from 'react';
import MinMax from './inputs/minmax/minmax';
import AppLazyInput from './inputs/lazy/lazy';

export default class extends React.Component{
  state = {
    inp1: 'start',
    inp2: 'strat other'
  }

  render() {

    return (
      <div>
        <h2>Lazy input</h2>
        <p>{this.state.inp1}</p>
        <AppLazyInput nativeProps={{ type: 'text' }}
          value={this.state.inp1}
          onChange={(e) => this.setState({ inp1: e.target.value })}
        />
        <h2>Not so lazy input</h2>
        <p>{this.state.inp2}</p>
        <AppLazyInput nativeProps={{ type: 'text', onChange: (e) => this.setState({inp2: e.target.value })}}
          value={this.state.inp2}
        />
        <hr/>
        <Button onClick={(e) => this.setState({inp1: 'test'})}>Unreal change</Button>
      </div>
    );
  }
};