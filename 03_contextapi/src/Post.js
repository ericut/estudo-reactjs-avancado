import React, { useEffect, useState, memo } from 'react';

const areEqual = (prevProps, nextProps) => {
  console.log('ReRender prevented?');
  return prevProps.loading === nextProps.loading;
};

function Post(props) {
  const { loading } = props;

  const [text, setText] = useState('Title');

  // componentDidMount
  useEffect(() => {
    const { post, loading } = props;
    console.log('componentDidMount', post);
    console.log('componentDidMount: loading', loading);
  }, [props]);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate: loading', loading);
  }, [loading]);

  // componentWillUnmount
  useEffect(() => {
    // passando return o react entende que o componente foi desmontado
    return () => {
      console.log('componentWillUnmount: onRemoved');
    };
  }, []);

  const handleText = () => {
    setText('Atualizado');
  };

  console.log('Texto Atualizado?', text);

  const { post } = props;
  console.log('render', post);
  return (
    <div>
      VAR{/* {post} */}
      <button onClick={handleText}>Re Render</button>
    </div>
  );
}

export default memo(Post, areEqual);
