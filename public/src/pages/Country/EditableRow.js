import React, { useState, useEffect } from "react"

import { Button } from "reactstrap"

const Editable = ({ index, item, update }) => {
  const [state, setState] = useState({})

  useEffect(() => {
    setState({ ...state, ...item })
  }, [])

  const handleChagne = e =>
    setState({ ...state, [e.target.name]: e.target.value })

  const handleClick = () => update(state)

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>
        <img src={item.flag} alt="" width="20" />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="name"
          onChange={handleChagne}
          value={state.name}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="arabicName"
          onChange={handleChagne}
          value={state.arabicName}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="phoneCode"
          onChange={handleChagne}
          value={state.phoneCode}
        />
      </td>
      <td>
        <input
          className="form-control"
          type="text"
          name="timeZone"
          onChange={handleChagne}
          value={state.timeZone}
        />
      </td>
      <td>
        {item.active ? (
          <i className="fas fa-check"></i>
        ) : (
          <i className="fas fa-times"></i>
        )}
      </td>
      <td>
        <Button color="primary" className="btn btn-primary" onClick={handleClick}>
          Save
        </Button>
      </td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default Editable
