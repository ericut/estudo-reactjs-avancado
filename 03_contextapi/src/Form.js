import React, { useContext } from 'react';
import { ThemeContext } from './Theme';

function Form() {
  const context = useContext(ThemeContext);

  const renderForm = (
    <form>
      <label>Nome:</label>
      <input />
      <br />
      <label>E-mail:</label>
      <input />
      <br />
    </form>
  );

  const renderNotLogged = <h1>É necessário realizar login!</h1>;

  return <div>{!context.token ? renderNotLogged : renderForm}</div>;
}

export default Form;
