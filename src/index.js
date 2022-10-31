import React from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import ReactTable from "react-table";

import { makeData } from "./util";
import Pagination from "./Pagination";

import "react-table/react-table.css";
import "./styles.css";

const App = props => (
  <ReactTable
    PaginationComponent={Pagination}
    data={makeData()}
    columns={[
      {
        Header: "First Name",
        accessor: "firstName",
        minWidth: 300
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        minWidth: 300
      },
      {
        Header: "Age",
        accessor: "age",
        minWidth: 300
      },
      {
        Header: "Status",
        accessor: "status",
        minWidth: 300
      },
      {
        Header: "Visits",
        accessor: "visits",
        minWidth: 300
      }
    ]}
  />
);

render(<App />, document.getElementById("root"));
