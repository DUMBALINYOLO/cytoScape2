import React from "react";
import "../styles.scss";
import { parseInputString } from "./parseInput";
import "./modalStyles";
import { MessagePopup } from "./messagePopup";
export function UserInputGui() {
  const [value, setValue] = React.useState<string>("");
  const [open, setOpen] = React.useState(true);
  const hideModal = () => {
    setOpen(false);
  };
  const handleSearchText = (e) => {
    //console.log(`lilly test: ${JSON.stringify(e.target.value)}`);
    setValue(e.target.value);
    // setSearchText(value);
  };
  const handleSearchClick = (e) => {
    parseInputString(value);
  };
  const inform =
    "Keyword search resulted in 10,000+ CVEs." +
    " Please redefine the keyword search.<br /> <br />" +
    "Acceptable operators are: comma (,) Ampersand (&) Exclamation (!) Symbols for OR, AND, and NOT respectively." +
    "Use QUOTE SYMBOLS for quoted phrase (i.e., “keyword”).";
  return (
    <div>
      <br />
      <MessagePopup show={open} msg={inform} handleOnClick={hideModal} />
      <textarea
        style={{ width: "100%", height: "40px", fontSize: "12px" }}
        placeholder="You must use very specific keywords, such as an application name, when searching the CVE List,  For example, Sendmail, wu-ftp, ToolTalk, ps, etc."
        onChange={handleSearchText}
      />
      <button onClick={handleSearchClick}>I took another step</button>
    </div>
  );
}
