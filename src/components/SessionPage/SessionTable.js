import React from "react";
import "./SesTable.css";

function Table() {
  const fields = [
    {
      Member: "SESSION",
      Contact: "Jon Mensah",
      Session: "3",
      Time: "10 - 11am",
      SessionCode: "S309365",
      Adults: "2",
      Children: "1",
    },
    {
      Member: "SESSION",
      Contact: "Jon Mensah",
      Session: "3",
      Time: "10 - 11am",
      SessionCode: "S309365",
      Adults: "2",
      Children: "1",
    },
    {
      Member: "SESSION",
      Contact: "Jon Mensah",
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
        <td className="border"> {field.Adults}</td>
        <td> {field.Children}</td>
      </tr>
    );
  };

  return (
    <div className="content-table">
      <tbody className="tableBody">{fields.map(renderField)}</tbody>
    </div>
  );
}

export default Table;
