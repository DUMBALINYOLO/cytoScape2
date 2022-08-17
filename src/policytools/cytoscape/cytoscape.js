import React, { useRef, useEffect } from "react";
import CytoscapeComponent from "react-cytoscapejs";
import { List, Header } from "semantic-ui-react";
import { styles } from "./cytoStyle";
import cytoscape from "cytoscape";
import popper from "cytoscape-popper";
import "./tooltipstyle.scss";

cytoscape.use(popper);
const CytoscapeCustom = (props) => {
  const cyRef = useRef(null);
  let tips = document.createElement("div");
  useEffect(() => {
    const cy = cyRef.current;

    cy.on("click", "node", function (event) {
      var node = event.target;
      alert("lilly ' (id = " + node.data("id") + ")");
    });

    cy.nodes().on("mouseover", (event) => {
      let target = event.target;
      target.popperref = event.target.popper({
        content: () => {
          tips.innerHTML = event.target.data("label");
          tips.className = "tooltipstyles";
          document.body.appendChild(tips);
          return tips;
        },
        popper: {
          placement: "top-start",
          removeOnDestroy: true
        }
      });
    });

    cy.nodes().unbind("mouseout");
    cy.nodes().bind("mouseout", (_) => {
      document.body.removeChild(tips);
    });
  }, [tips]);

  return (
    <div>
      {props.data && (
        <CytoscapeComponent
          elements={props.data}
          stylesheet={styles}
          layout={{ name: "cose" }}
          style={{
            height: "600px",
            width: "80%",
            margin: "0px auto",
            border: "1px solid black"
          }}
          cy={(cy) => (cyRef.current = cy)}
        />
      )}
      {props.id !== "" && (
        <div
          style={{
            width: "80%",
            margin: "0px auto"
          }}
        >
          <Header as="h3">Referenced Policies</Header>
          <List divided relaxed>
            {props.policies.sort().map((pol, index) => (
              <List.Item key={index}>{pol}</List.Item>
            ))}
          </List>
        </div>
      )}
    </div>
  );
};

export default CytoscapeCustom;
