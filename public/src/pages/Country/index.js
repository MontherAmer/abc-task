import React, { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import {
  listCountriesAction,
  updateCountryAction,
} from "../../store/country/actions"

import MetaTags from "react-meta-tags"

import { Table, Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import Breadcrumbs from "../../components/Common/Breadcrumb"

import TableHeader from "./TableHeader"
import DisplayRow from "./DisplayRow"
import EditableRow from "./EditableRow"

const Country = () => {
  const [state, setState] = useState({})
  const dispatch = useDispatch()
  const { countries } = useSelector(state => state.countries)

  useEffect(() => {
    dispatch(listCountriesAction())
  }, [])

  const handleEdit = e => setState({ ...state, editableItem: e })

  const handleState = e =>
    dispatch(updateCountryAction({ _id: e._id, active: !e.active }))

  const handleDelete = e => setState({ ...state, editableItem: e })

  const updateCountry = data => {
    dispatch(updateCountryAction(data))
    setState({ ...state, editableItem: null })
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
                  <CardTitle>Countries list</CardTitle>
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
                              handleState={handleState}
                              handleDelete={handleDelete}
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
    </React.Fragment>
  )
}

export default Country
