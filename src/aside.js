import React, { useContext } from 'react';

import { Context } from './context/context';


function Aside() {
  const context = useContext(Context);
  return (
      <aside>
      <h2>History</h2>
      <ul>
        {context.state.history.map((entry, i) => {
          return (<li key={`history-${i}`}>{entry}</li>);
        })}
      </ul>
    </aside>
  );
}

export default Aside;
