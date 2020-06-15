import React from "react";
import "./MemTable.css"

function Table() {
  const fields = [
    {
      Member: "Dormmamu69",
      Contact: "0555 552 556",
      Session: "3",
      Time: "10 - 11am",
      SessionCode: "S309365",
      Adults: "2",
      Children: "1",
    },
    {
      Member: "Dormmamu69",
      Contact: "0555 552 556",
      Session: "3",
      Time: "10 - 11am",
      SessionCode: "S309365",
      Adults: "2",
      Children: "1",
    },
    {
      Member: "Dormmamu69",
      Contact: "0555 552 556",
      Session: "3",
      Time: "10 - 11am",
      SessionCode: "S309365",
      Adults: "2",
      Children: "1",
    },
  ];

  const renderField = (field, index) => {
    return (
      <tr key={index}>
        <td>{field.Member}</td>
        <td>{field.Contact} </td>
        <td> {field.Session}</td>
        <td> {field.Time}</td>
        <td> {field.SessionCode}</td>
        <td> {field.Adults}</td>
        <td> {field.Children}</td>
      </tr>
    );
  };

  return (
    <div className="content-tabble">
      <tbody className="tableBody">{fields.map(renderField)}</tbody>
    </div>
  );
}

export default Table;
