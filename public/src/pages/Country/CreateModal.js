import React, { useState } from "react"
import { Modal, Row, Col } from "reactstrap"
import Dropzone from "react-dropzone"

const CreateModal = ({ show, hide, submit }) => {
  const [state, setState] = useState({})

  const handleChange = e =>
    setState({ ...state, [e.target.name]: e.target.value })

  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const handleAcceptedFiles = files => {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setState({ ...state, image: files[0] })
  }

  const handleClick = () => {
    let { name, arabicName, phoneCode, timeZone, image } = state
    if (!name || !arabicName || !phoneCode || !timeZone || !image)
      return setState({ ...state, error: true })

    submit(state)
  }

  return (
    <Modal size="xl" isOpen={show}>
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
        <Row className="mb-3">
          <Col lg={6}>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Country name.."
              onChange={handleChange}
              value={state.name}
            />
          </Col>
          <Col lg={6}>
            <input
              className="form-control"
              type="text"
              name="arabicName"
              placeholder="Arabic name..."
              onChange={handleChange}
              value={state.arabicName}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={6}>
            <input
              className="form-control"
              type="text"
              name="phoneCode"
              placeholder="Phone code"
              onChange={handleChange}
              value={state.phoneCode}
            />
          </Col>
          <Col lg={6}>
            <input
              className="form-control"
              type="text"
              name="timeZone"
              placeholder="Time zone"
              onChange={handleChange}
              value={state.timeZone}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col lg={12}>
            <Dropzone
              onDrop={acceptedFiles => {
                handleAcceptedFiles(acceptedFiles)
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <div className="dropzone">
                  <div
                    className="dz-message needsclick mt-2"
                    {...getRootProps()}
                  >
                    <input {...getInputProps()} />
                    <div className="mb-3">
                      <i className="display-4 text-muted bx bxs-cloud-upload" />
                    </div>
                    <h4>Drop files here or click to upload.</h4>
                  </div>
                </div>
              )}
            </Dropzone>
            {state.image ? (
              <Row className="align-items-center">
                <Col className="col-auto">
                  <img
                    data-dz-thumbnail=""
                    height="80"
                    className="avatar-sm rounded bg-light"
                    alt={state?.image?.name}
                    src={state?.image?.preview}
                  />
                </Col>
                <Col>
                  {state?.image?.name}
                  <p className="mb-0">
                    <strong>{state?.image?.formattedSize}</strong>
                  </p>
                </Col>
              </Row>
            ) : null}
          </Col>
        </Row>
        <Row>{state.error ? <p>Please fill all fields</p> : null}</Row>
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
        <button type="button" className="btn btn-success" onClick={handleClick}>
          Save changes
        </button>
      </div>
    </Modal>
  )
}

export default CreateModal
