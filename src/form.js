import React, { useContext } from 'react';
import Get from './methods/get';
import Post from './methods/post';
import Put from './methods/put';
import Patch from './methods/patch';
import Delete from './methods/delete';

import { Context } from './context/context';


function Form() {
  const context = useContext(Context);
  return (
      <>
      <form>
      <section>
        <input type="text" className="wide" name="url" placeholder="URL" onChange={context.saveUrl}></input>
        <div id="methods">
          <Get saveMethod={context.saveMethod} />
          <Post saveMethod={context.saveMethod} />
          <Put saveMethod={context.saveMethod} />
          <Patch saveMethod={context.saveMethod} />
          <Delete saveMethod={context.saveMethod} />
          <label>
            <button type="submit" onClick={context.passData}>Go!</button>
          </label>
        </div>
      </section>

      <section className="col-2">
        <div id="body">
          <textarea name="requestBody" placeholder="Raw JSON Body"></textarea>
        </div>

        <div id="headers">
          <button>Headers</button>
          <div>
            <h2>Basic Authorization</h2>
            <input name="authusername" placeholder="Username"></input>
            <input name="authpassword" placeholder="Password" type="authpassword"></input>
          </div>

          <div>
            <h2>Bearer Token</h2>
            <input type="text" name="authtoken" placeholder="Bearer Token"></input>
          </div>
        </div>
      </section>
    </form>
      </>
  );
}

export default Form;
