import React from "react";
import "./styles.scss";
import { agent } from "./sampleData";

export function Step() {
  const [steps, setSteps] = React.useState<number>(0);

  function increment() {
    setSteps((prevState) => prevState + 1);
  }
  function testarr() {
    const obj = {
      a: {
        // To safely update obj.a.c, we have to copy each piece
        c: 3,
        d: 4
      },
      b: 2
    };

    const obj2 = {
      // copy obj
      ...obj,
      // overwrite a
      a: {
        // copy obj.a
        // overwrite c
        c: 42
      }
    };
    console.log(JSON.stringify(obj));
    console.log(`lilly 2 ${JSON.stringify(obj2)}`);
  }
  function testremove() {
    const agency =
      '["ICOverview","DIA","NGA","NRO","NSA","ODNI","FBI","DEA","State","Treasury","DOE","DHS","USA","USN","USAF","USMC","USCG","SubAgency53","SubAgency1","SubAgency2","SubAgency3","SubAgency4","SubAgency5","SubAgency6","SubAgency7","SubAgency8","SubAgency9","SubAgency10","SubAgency11","SubAgency12","SubAgency13","SubAgency14","SubAgency15","SubAgency16","SubAgency17","SubAgency18","SubAgency19","SubAgency20","SubAgency21","SubAgency22","SubAgency23","SubAgency24","SubAgency25","SubAgency26","SubAgency27","SubAgency28","SubAgency29","SubAgency30","SubAgency31","SubAgency32","SubAgency33","SubAgency34","SubAgency35","SubAgency36","SubAgency37","SubAgency38","SubAgency39","SubAgency40","SubAgency41","SubAgency42","SubAgency43","SubAgency44","SubAgency45","SubAgency46","SubAgency47","SubAgency48","SubAgency49","SubAgency50","SubAgency52"]';
    const agencyFinal = JSON.parse(agency).filter((x) => x !== "ICOverview");
    console.log(JSON.stringify(agencyFinal));
  }
  const allowedAgencies = ["DIA", "CIA"];
  const items = agent.map((item, index) =>
    allowedAgencies.includes(item.Agency) ? (
      <div
        key={index}
        role="rowgroup"
        style={{ height: "20px", marginTop: 0, paddingTop: 0, opacity: 0.5 }}
      >
        <input
          type="checkbox"
          style={{
            color: "black",
            width: "14px",
            height: "14px",
            padding: 0,
            paddingBottom: "0px"
          }}
          disabled
        />
        {item.AgencyName}
      </div>
    ) : (
      <div
        key={index}
        role="rowgroup"
        style={{ height: "20px", marginTop: 0, paddingTop: 0 }}
      >
        <input
          type="checkbox"
          style={{
            color: "black",
            width: "14px",
            height: "14px",
            padding: 0,
            paddingBottom: "0px"
          }}
        />
        {item.AgencyName}
      </div>
    )
  );

  function simpleTest() {
    const superRoles = ["admin", "vm", "scc"];
    let filters = [];
    const userRolearr = ["DIA_user", "NGA_user"];

    const selectedAgencies = agent.map((x) => x.Agency);
    let userRoles = [];
    userRolearr.forEach((x) => {
      if (x.indexOf("_") > 0) {
        userRoles.push(x.substring(0, x.indexOf("_")).toLowerCase());
      } else {
        userRoles.push(x);
      }
    });
    console.log(`lilly test agencies: ${JSON.stringify(selectedAgencies)}`);
    if (selectedAgencies.length > 0 && userRoles.length > 0) {
      userRoles.forEach((x) => {
        if (superRoles.includes(x.toLowerCase())) {
          filters = selectedAgencies;
        } else {
          const index = selectedAgencies.findIndex(
            (agency) => agency.toLowerCase() === x
          );
          if (index !== -1) {
            filters.push(selectedAgencies[index]);
          }
        }
      });
    }
    console.log(`lilly test filter: ${JSON.stringify(filters)}`);
  }

  return (
    <div>
      Today you've taken {steps} steps!
      <br />
      {testarr()}
    </div>
  );
}
