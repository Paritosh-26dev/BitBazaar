import React from "react";
const Errorstyle = {
  color: "black",
  //   marginLeft: "34%",
  //   marginTop: "10%",
  textAlign: "center",
  justifyContent: "center",
  fontFamily: "Arial",
};
function ErorPage() {
  return (
    <div style={Errorstyle}>
      <h1>ERROR 404!</h1>
      <h1>PAGE NOT FOUND!</h1>
    </div>
  );
}

export default ErorPage;
