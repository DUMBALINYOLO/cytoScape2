import cytoscape from "cytoscape";

Promise.all([
  fetch("cy-style.json", { mode: "no-cors" }).then(function (res) {
    return res.json();
  }),
  fetch("network.json", { mode: "no-cors" }).then(function (res) {
    return res.json();
  })
]).then(function (dataArray) {
  var cy = (window.cy = cytoscape({
    container: document.getElementById("cy"),

    layout: {
      name: "cose",
      idealEdgeLength: 55,
      nodeOverlap: 5,
      refresh: 20,
      fit: true,
      padding: 30,
      randomize: false,
      componentSpacing: 100,
      nodeRepulsion: 250000,
      edgeElasticity: 100,
      nestingFactor: 6,
      gravity: 75,
      numIter: 1000,
      initialTemp: 100,
      coolingFactor: 0.95,
      minTemp: 1.0
    },

    style: dataArray[0],

    elements: dataArray[1],

    minZoom: 3e-1,
    maxZoom: 15
  }));

  cy.unbind("mouseover");
  cy.bind("mouseover", "node", function (evt) {
    console.log(evt.target.id());
    var node = evt.target;
    var neighbors = node.neighborhood();
    var connections = node.connectedEdges();
    cy.elements()
      .difference(neighbors.nodes())
      .not(neighbors)
      .addClass("semitransp");
    //console.log(neighbors);
    node.addClass("highlight");
    neighbors.nodes().addClass("highlight");
    connections.edges().addClass("highlight");
  });
  cy.unbind("mouseout");
  cy.bind("mouseout", "node", function (evt) {
    var node = evt.target;
    var neighbors = node.neighborhood();
    var connections = node.connectedEdges();

    node.removeClass("highlight");
    neighbors.nodes().removeClass("highlight");
    connections.edges().removeClass("highlight");
    cy.elements().removeClass("semitransp");
  });
  //var directlyConnected = node.connectedEdges();
  //directlyConnected.edges().addClass('unhighlighted');
});
