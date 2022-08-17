import React, { Component } from "react";
import { Container, Search } from "semantic-ui-react";
import _ from "lodash";
import CytoscapeCustom from "./cytoscape/cytoscape";
import { real_sample_data } from "./RealSampleData2";
import "./searchstyle.scss";

const initialState = {
  isLoading: false,
  results: [],
  value: "",
  searchTitle: "",
  searchID: "",
  policies: [],
  data: [],
  fullData: []
};

function color(reference) {
  console.log(`lilly color ${JSON.stringify(reference)}`);
  if (reference.includes("SECNAVINST")) {
    return "blue";
  } else if (reference.includes("OPNAVINST")) {
    return "green";
  } else if (reference.includes("lilly")) {
    return "red";
  } else {
    return "orange";
  }
}

class PolicyTool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      policyList: [],
      results: [],
      isLoading: false,
      searchTitle: "",
      searchID: "",
      policies: [],
      data: [],
      fullData: []
    };
    this.timeoutRef = React.createRef();
  }

  componentDidMount() {
    const policies = [];
    const data = [];

    //Map policies to list for search results
    real_sample_data.policies.map(function (res) {
      return policies.push({
        title: res.policy,
        id: res.policy
      });
    });
    this.setState({
      policyList: policies
    });

    //create nodes for all records in API
    real_sample_data.policies.map((res) =>
      data.push({
        classes: color(res.policy),
        data: { id: res.policy, label: res.policy }
      })
    );
    //create nodes for all references
    real_sample_data.policies.forEach((res) => {
      res.references &&
        res.references.forEach((ref) =>
          data.push({
            classes: color(ref.policy),
            data: { id: ref.policy, label: ref.policy }
          })
        );
    });

    //create links from all references to corresponding record
    real_sample_data.policies.forEach((res) => {
      res.references &&
        res.references.forEach((ref) =>
          data.push({
            data: { source: res.policy, target: ref.policy }
          })
        );
    });
    this.setState({ data: data, fullData: data });
    initialState.data = data;
    initialState.fullData = data;
  }

  handleResultSelect = (e, { result }) => {
    const policies = [];
    const data = [];

    data.push({
      classes: color(result.title),
      data: { id: result.title, label: result.title }
    });
    let policy = real_sample_data.policies.find(
      (x) => x.policy === result.title
    );
    policy.references.forEach((ref) =>
      data.push({
        classes: color(ref.policy),
        data: { id: ref.policy, label: ref.policy }
      })
    );
    policy.references.forEach((ref) =>
      data.push({
        data: { source: result.title, target: ref.policy }
      })
    );
    console.log(`lilly data: ${JSON.stringify()} `);
    this.setState({
      policies: policies,
      data: data,
      searchTitle: result.title.split("-")[0],
      searchID: result.id,
      value: result.value,
      results: []
    });
    clearTimeout(this.timeoutRef.current);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    clearTimeout(this.timeoutRef.current);
    this.timeoutRef.current = setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState);

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = (result) => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.policyList, isMatch)
      });
    }, 300);
  };

  handleSearchClear = (e) => {
    const data = this.state.fullData;
    this.setState({ searchTitle: "", searchID: "", value: "", data: data });
  };

  render() {
    const { isLoading, value, results } = this.state;
    return (
      <Container style={{ width: "100%", margin: "0px auto" }}>
        <div className="left">
          <Search
            fluid
            input={{ fluid: true }}
            mini
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, {
              leading: true
            })}
            results={results}
            value={value}
            placeholder={"Search for a Policy"}
            style={{ width: "50%", maxHeight: 50 }}
            noResultsMessage={""}
          ></Search>
        </div>
        <div className="right">
          {this.state.data.length !== 0 && (
            <CytoscapeCustom
              selected={this.state.searchTitle}
              id={this.state.searchID}
              key={this.state.searchID}
              data={this.state.data}
              policies={this.state.policies}
            />
          )}
        </div>
      </Container>
    );
  }
}

export default PolicyTool;
