import React, { useContext, useState } from 'react';
import { Context } from '../context/context';


function Put() {
  const [checked, setChecked] = useState(false);
  const context = useContext(Context);

  const handleSelect = (event) => {
    setChecked(true);
    context.saveMethod(event);
  };

  return (
      <label>
      <input type="radio" onChange={handleSelect} checked={checked} name="method" value="Put"></input>
      <span>Put</span>
    </label>
  );
}

export default Put;
