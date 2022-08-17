// tslint:disable: linebreak-style
const modal = {
  position: "fixed",
  fontFamily: "Arial, Helvetica, sans-serif",
  top: 50,
  right: 10,
  bottom: 10,
  left: 50,
  height: "200px",
  width: "200px",
  background: "rgba(0, 0, 0, 0.8)",
  border: "1px solid black",
  zIndex: 99999,
  transition: "opacity 1s ease-in",
  pointerEvents: "auto",
  overflowY: "auto"
};

const container = {
  width: "200px",
  position: "relative",
  margin: "0px auto 00px auto",
  padding: "0",
  background: "#fff",
  height: "200px"
};

const close = {
  background: "#606061",
  color: "#FFFFFF",
  lineHeight: "25px",
  position: "absolute",
  right: "-12px",
  textAlign: "center",
  top: "-10px",
  width: "24px",
  textDecoration: "none",
  fontWeight: "bold",
  borderRadius: "12px",
  boxShadow: "1px 1px 3px #000",
  cursor: "pointer"
};

export default {
  modal,
  container,
  close
};
