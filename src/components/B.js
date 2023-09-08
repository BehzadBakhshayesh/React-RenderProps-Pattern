import React from "react";
const style = {
  width: "200px",
  height: "100px",
  border: "1px solid blue",
  textAlign: "center",
  lineHeight: "100px",
  cursor: "pointer",
};

const B = ({ value }) => {
  return <div style={style}>B compoent: {value}</div>;
};

export default B;
