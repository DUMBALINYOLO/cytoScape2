import React from "react";
import "./styles.scss";

export function Box() {
  const list = [
    { id: 1, name: "item1", isChecked: false },
    { id: 2, name: "item2", isChecked: false },
    { id: 3, name: "item3", isChecked: false },
    { id: 4, name: "item4", isChecked: false },
    { id: 5, name: "item5", isChecked: false }
  ];

  const list2 = [
    { id: 6, name: "item6", isChecked: false },
    { id: 7, name: "item7", isChecked: false }
  ];
  const [cvesSelected, setCvesSelected] = React.useState<string[]>([]);
  const [cveAllSelected, setCveAllSelected] = React.useState<boolean>(false);

  function sortAgency(items) {
    const agencyIdOrder = ["item3", "item2", "item1"];
    let leftAgency: any[] = [];
    const sortedAgencies: any[] = [];
    agencyIdOrder.map(item => {
      let index = items.findIndex(agency => agency.name === item);
      sortedAgencies.push(items[index]);
    });
    items.map(agency => {
      if (sortedAgencies.findIndex(item => item.name === agency.name) === -1) {
        leftAgency.push(agency);
      }
    });
    // alert(JSON.stringify(sortedAgencies));
    return sortedAgencies.concat(leftAgency);

    // alert(JSON.stringify(items));
  }

  const handleCveRowClick = itemId => () => {
    if (cvesSelected.indexOf(itemId) === -1) {
      setCvesSelected([...cvesSelected, itemId]);
      if (list.length === cvesSelected.length + 1) {
        setCveAllSelected(cveAllSelected => true);
      }
    } else {
      //alert("beginb" + `${JSON.stringify(cvesSelected)}`);
      setCvesSelected(cvesSelected.filter(cve => cve !== itemId));
      if (list.length === cvesSelected.length) {
        setCveAllSelected(cveAllSelected => false);
      }
    }
  };

  const handleChange = () => {
    if (!cveAllSelected) {
      list.forEach(item => {
        if (cvesSelected.indexOf(item.id) === -1)
          setCvesSelected(cvesSelected => [...cvesSelected, item.id]);
      });
    } else {
      setCvesSelected(cvesSelected => []);
    }
    setCveAllSelected(!cveAllSelected);
  };
  renderList = () => {
    let sortedList = sortAgency(list);
    //alert(JSON.stringify(sortedList));
    return sortedList.map(item => (
      <div>
        <input
          key={item.id}
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={cvesSelected.includes(item.id ? item.id : "")}
          onChange={handleCveRowClick(item.id)}
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
        checked={cveAllSelected}
        onChange={handleChange}
      />
      Check all
      <br />
      {this.renderList()}
      <hr className="separator" />
      <div className="rowLabel">
        <div className="item">
          <div className=" ICReporting__button ICReporting-green test" />
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
