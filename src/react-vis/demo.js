import React, { useEffect, useMemo, useCallback } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import DirectedGraph from "./DirectedGraph";
import graphData from "./graph-data.json";

const useStyles = makeStyles((theme) => ({
  graph: {
    width: "100%"
  }
}));

const getSize = (node) => {
  switch (node.type) {
    case "organization":
      return 60;
    case "department":
      return 50;
    default:
      return null;
  }
};

const buildData = (data) => {
  let { nodes, edges } = data;
  nodes = nodes.map((n) => ({
    id: n.id,
    label: n.label || n.id,
    shape: "circularImage",
    size: getSize(n),
    group: n.type || "employee",
    image: "" // const image = "data:image/svg+xml;charset=utf-8,"+ encodeURIComponent(svg);
  }));
  return { nodes, edges };
};

let clustered = false;
// let data = { nodes: [], edges: [] };
export default function SimpleMenu() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [strength, setStrength] = React.useState(() => Math.random() * 60 - 30);

  let data = useMemo(() => buildData(graphData));
  // useEffect(() => {
  //   data = buildData(graphData);
  // }, []);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Open Menu
      </Button>
      <Button
        className="showcase-button"
        onClick={() => setStrength(Math.random() * 60 - 30)}
      >
        {" "}
        REWEIGHT{" "}
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      <DirectedGraph
        className={classes.graph}
        data={data}
        animation
        height={500}
        getNetwork={(network) => {
          // animation
          // network.once("beforeDrawing", function() {
          //   console.log("before drawing");
          //   network.focus(2, {
          //     scale: 12
          //   });
          // });
          // network.once("afterDrawing", function() {
          //   console.log("after drawing");
          //   network.fit({
          //     animation: {
          //       duration: 2000,
          //       easingFunction: "easeOutQuint"
          //     }
          //   });
          // });

          if (!clustered) {
            const clusterOptions = {
              // processProperties: (clusterOptions, childNodes) => {
              //   clusterOptions.label = "[" + childNodes.length + "]";
              //   return clusterOptions;
              // },
              clusterNodeProperties: {
                // borderWidth: 3,
                color: "orange",
                shape: "box"
                // font: { size: 30 }
              }
            };
            clustered = true;

            network.clusterOutliers(clusterOptions);
            network.on("selectNode", function (params) {
              if (params.nodes.length == 1) {
                if (network.isCluster(params.nodes[0]) === true) {
                  network.openCluster(params.nodes[0]);
                }
              }
            });
          }
          //  if you want access to vis.js network api you can set the state in a parent component using this property
        }}
      />
    </div>
  );
}

/*

Patrick Brockmann @PBrockmann Jul 09 09:26
For the record, I did it with this:
var allParentsNode = [];
function findAllParents(nodesArray) {
         if (nodesArray.length == 0) {
                                    return 1;
         }
         var parentsArray = network.getConnectedNodes(nodesArray[0], 'from');
         //console.log('node ', nodesArray[0], 'has ', parentsArray);
          nodesArray = nodesArray.concat(parentsArray).unique();
         //console.log('---> ', nodesArray);
         allParentsNode = allParentsNode.concat(nodesArray[0]).unique();
         nodesArray.splice(0, 1);
         return findAllParents(nodesArray);
}
var parentsArray = network.getConnectedNodes(node, 'from');
findAllParents(parentsArray);
*/
