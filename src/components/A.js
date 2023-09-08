import React, { useState } from "react";

const A = ({ children }) => {
  const [state, setState] = useState(0);

  return (
    <>
      <button onClick={() => setState((state) => state + 1)}>add</button>
      <div>{children(state)}</div>
    </>
  );
};

export default A;
