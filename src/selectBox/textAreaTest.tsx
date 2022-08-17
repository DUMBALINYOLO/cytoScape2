import React from "react";
import "./styles.scss";

export function TextAreaTest() {
  const [searchText, setSearchText] = React.useState<string>("");

  const handleSearchText = e => {
    const { value } = e.target;
    setSearchText(value);
  };
  const handleSearchClick = e => {
    const stringSearch: string[] = searchText.split(",");
    console.log(`lilly test search input: ${stringSearch}`);
    const search: ISearch = {
      searchText: stringSearch.toString(),
      agenciesSelected: ""
    };
  };
  return (
    <div>
      <br />
      <textarea
        style={{ width: "100%", height: "40px", fontSize: "12px" }}
        placeholder="You must use very specific keywords, such as an application name, when searching the CVE List,  For example, Sendmail, wu-ftp, ToolTalk, ps, etc."
        onChange={handleSearchText}
      />
      <button onClick={handleSearchClick}>I took another step</button>
    </div>
  );
}
