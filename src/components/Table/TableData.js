import React from "react";

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableData = (props) => {
  return (
    <tr>
      <td>{props.data.year}</td>
      <td>{formatter.format(props.data.savingsEndOfYear)}</td>
      <td>{formatter.format(props.data.yearlyInterest)}</td>
      <td>
        {formatter.format(+props.data.savingsEndOfYear -
          props.initialInvestment -
          props.data.yearlyContribution * props.data.year)}
      </td>
      <td>
        {formatter.format(+props.initialInvestment +
          props.data.yearlyContribution * props.data.year)}
      </td>
    </tr>
  );
};

export default TableData;
