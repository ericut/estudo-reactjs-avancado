import React, { Component } from 'react';

class Post extends Component {
  state = {
    text: 'Title',
  };

  componentDidMount() {
    const { post, loading } = this.props;
    console.log('componentDidMount', post);
    console.log('componentDidMount: loading', loading);
  }

  componentDidUpdate(prevProps) {
    const { loading } = this.props;
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount: onRemoved');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.text !== nextState.text;
  }

  text = () => {
    this.setState({
      text: true,
    });
  };

  render() {
    const { post } = this.props;
    console.log('render', post);
    return (
      <div>
        VAR{/* {post} */}
        <button onClick={this.text}>Re Render</button>
      </div>
    );
  }
}

export default Post;
