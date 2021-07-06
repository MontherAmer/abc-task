import React from "react"
import { Modal } from "reactstrap"
const DeleteModal = ({ show, hide, submit }) => {
  return (
    <Modal isOpen={show}>
      <div className="modal-header">
        <button
          type="button"
          className="close"
          data-dismiss="modal"
          aria-label="Close"
          onClick={hide}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        Are you sure you want to delete this country
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary "
          data-dismiss="modal"
          onClick={hide}
        >
          Close
        </button>
        <button type="button" className="btn btn-danger" onClick={submit}>
          Delete
        </button>
      </div>
    </Modal>
  )
}

export default DeleteModal
