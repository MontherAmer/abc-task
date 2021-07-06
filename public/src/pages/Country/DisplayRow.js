import React from "react"

import { Button } from "reactstrap"

const DisplayRow = ({ index, item, handleEdit, handleState, handleDelete }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <img src={item.flag} alt="" width="20" /> {}
      </td>
      <td>{item.name}</td>
      <td>{item.arabicName}</td>
      <td>{item.phoneCode}</td>
      <td>{item.timeZone}</td>
      <td>
        {item.active ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </td>
      <td>
        <Button
          color="primary"
          className="btn btn-primary"
          onClick={() => handleEdit(index - 1)}
        >
          Edit
        </Button>
      </td>
      <td>
        {item.active ? (
          <Button
            color="danger"
            className="btn btn-danger"
            onClick={() => handleState(item)}
            style={{ width: "97px" }}
          >
            Deactivate
          </Button>
        ) : (
          <Button
            color="primary"
            className="btn btn-primary"
            onClick={() => handleState(item)}
            style={{ width: "97px" }}
          >
            Activate
          </Button>
        )}
      </td>
      <td>
        <Button
          color="danger"
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </td>
    </tr>
  )
}

export default DisplayRow
