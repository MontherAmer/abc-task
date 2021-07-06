import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  listCountriesAction,
  updateCountryAction,
  deleteCountryAction,
  createCountryAction,
} from "../../store/country/actions"

import MetaTags from "react-meta-tags"

import { Table, Button, Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

import TableHeader from "./TableHeader"
import DisplayRow from "./DisplayRow"
import EditableRow from "./EditableRow"
import DeleteModal from "./DeleteModal"
import CreateModal from "./CreateModal"

const Country = () => {
  const [state, setState] = useState({})

  const dispatch = useDispatch()

  const { countries } = useSelector(state => state.countries)

  useEffect(() => {
    dispatch(listCountriesAction())
  }, [])

  const handleEdit = e => setState({ ...state, editableItem: e })

  const handleStatus = e =>
    dispatch(updateCountryAction({ _id: e._id, active: !e.active }))

  const showDeleteModal = e =>
    setState({ ...state, showDeleteModal: true, item: e })

  const hideModal = () =>
    setState({ ...state, showDeleteModal: false, showCreateModal: false })

  const deleteCountry = () => {
    dispatch(deleteCountryAction(state.item))
    hideModal()
  }

  const updateCountry = data => {
    dispatch(updateCountryAction(data))
    setState({ ...state, editableItem: null })
  }

  const showCreateModal = () => setState({ ...state, showCreateModal: true })

  const createCountry = data => {
    dispatch(createCountryAction(data))
    hideModal()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>Country</title>
        </MetaTags>
        <div className="container-fluid">
          <Breadcrumbs title="Country" breadcrumbItem="Countries" />

          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <CardTitle>
                    <div className="d-flex justify-content-between">
                      <>Countries list</>

                      <Button
                        color="primary"
                        className="btn btn-primary"
                        onClick={showCreateModal}
                      >
                        Create
                      </Button>
                    </div>
                  </CardTitle>
                  <div className="table-responsive">
                    <Table className="table mb-0">
                      <TableHeader />
                      <tbody>
                        {countries?.map((item, i) =>
                          i === state.editableItem ? (
                            <EditableRow
                              index={i + 1}
                              item={item}
                              key={i}
                              update={updateCountry}
                            />
                          ) : (
                            <DisplayRow
                              index={i + 1}
                              item={item}
                              key={i}
                              handleEdit={handleEdit}
                              handleStatus={handleStatus}
                              handleDelete={showDeleteModal}
                            />
                          )
                        )}
                      </tbody>
                    </Table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <DeleteModal
        show={state.showDeleteModal || false}
        hide={hideModal}
        submit={deleteCountry}
      />
      <CreateModal
        show={state.showCreateModal || false}
        hide={hideModal}
        submit={createCountry}
      />
    </React.Fragment>
  )
}

export default Country
