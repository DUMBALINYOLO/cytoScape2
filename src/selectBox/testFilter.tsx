import React from "react";
import "./styles.scss";
import { observer } from "mobx-react";
import { observable } from "mobx";

// demo how observal works
@observer
export class FilterList extends React.Component<{}> {
  @observable
  list = [
    { id: 1, name: "item1", isChecked: false },
    { id: 2, name: "item2", isChecked: true },
    { id: 3, name: "item3", isChecked: true },
    { id: 4, name: "item4", isChecked: false },
    { id: 5, name: "item5", isChecked: false }
  ];
  filterChecked = () => {
    this.list = this.list.filter(x => x.isChecked);
  };
  renderList = () => {
    //alert(JSON.stringify(sortedList));
    return this.list.map(item => (
      <div>
        <label>{item.name}</label>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <button type="button" name="filter" onClick={this.filterChecked}>
          filter
        </button>
        <br />
        {this.renderList()}
        <hr className="separator" />
        <div className="rowLabel">
          <div className="item">
            <div
              className=" ICReporting__button ICReporting-green test"
              style={{ width: "100px" }}
            />
            <label> automated reporting</label>
          </div>
          <div className="item">
            <div className=" ICReporting__button ICReporting-yellow test" />
            <label> Manual reporting</label>
          </div>
          <div className="item">
            <div className=" ICReporting__button ICReporting-red test" />
            <label> No reporting</label>
          </div>
        </div>
      </div>
    );
  }
}
