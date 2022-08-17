import React from "react";
import "./styles.css";

export default function Box2() {
  const allChecked = false;
  const list = [
    { id: 1, name: "item1", isChecked: false },
    { id: 2, name: "item2", isChecked: false },
    { id: 3, name: "item3", isChecked: false }
  ];

  handleChange = e => {
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
        );
        allChecked = list.every(item => item.isChecked);
      }
      return { list, allChecked };
    });
  };

  renderList = () => {
    return this.state.list.map(item => (
      <div>
        <input
          key={item.id}
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={this.cvesSelected.includes(item.id ? item.id : "")}
          onChange={this.handleCveRowClick(item.id)}
        />
        <label>{item.name}</label>
      </div>
    ));
  };

  return (
    <div>
      <input
        type="checkbox"
        name="checkAll"
        checked={this.state.allChecked}
        onChange={this.handleChange}
      />
      Check all
      <br />
      {this.renderList()}
    </div>
  );
}
