import React, { useContext } from 'react';

import ReactJson from 'react-json-view';

import Form from './form';
import Aside from './aside';
import { Context } from './context/context';

function Main() {
  const context = useContext(Context);
  console.log(context);

  return (
      <main>
      <Aside history={context.state.history} />
      <section id="right-side">
        <Form processForm={context.processForm} />
        <div id="json">
          <ReactJson src={context.state.results} />
        </div>
      </section>
      </main>
  );
}

export default Main;
