import React, { Component } from 'react';
import Post from './Post';

class App extends Component {
  state = {
    loading: false,
    actived: true,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 3000);
  }

  onRemove = () => {
    this.setState({
      actived: false,
    });
  };

  render() {
    const post = [
      {
        title: 'Título',
        description: 'Foo',
      },
      {
        title: 'Título',
        description: 'Bar',
      },
    ];

    return (
      <div>
        <button onClick={this.onRemove}>Remover</button>
        {this.state.actived && <Post post={post} loading={this.state.loading} />}
      </div>
    );
  }
}

export default App;
