import React from "react";
import styles from "./Table.module.css";
import TableHead from "./TableHead";
import TableData from "./TableData";

const Table = (props) => {
  return (
    <table className={styles.result}>
      <TableHead />
      <tbody>
        {props.yearlyData.map((data) => (
          <TableData initialInvestment={props.initialInvestment} data={data} key={Math.floor(Math.random() * 1000)} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
