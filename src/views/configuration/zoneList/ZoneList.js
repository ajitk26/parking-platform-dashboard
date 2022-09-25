import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const ZoneList = () => {
  const properties = () => {
    return (
      <CButton color="success" variant="outline" size="sm">
        Success
      </CButton>
    )
  }

  const status = () => {
    return (
      <CFormSelect aria-label="Default select example" style={{ width: '6rem' }} size="sm">
        <option value="enable">Enable</option>
        <option value="disable">Disable</option>
      </CFormSelect>
    )
  }

  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="info">View</CButton>
        <CButton color="warning">Edit</CButton>
        <CButton color="success">Update</CButton>
      </CButtonGroup>
    )
  }
  const columns = [
    {
      key: 'id',
      label: 'No.',
      _props: { scope: 'col' },
    },
    {
      key: 'parkingName',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'zonename',
      label: 'Zone Name',
      _props: { scope: 'col' },
    },
    {
      key: 'properties',
      label: 'Properties',
      _props: { scope: 'col' },
    },
    {
      key: 'totalqty',
      label: 'Total Qty.',
      _props: { scope: 'col' },
    },
    {
      key: 'availableqty',
      label: 'Available Qty.',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
      _props: { scope: 'col' },
    },
    {
      key: 'operation',
      label: 'Operation',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      parkingName: 'Mall',
      zonename: 'Main Garage',
      properties: properties(),
      totalqty: 2000,
      availableqty: 1972,
      status: status(),
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <div>
          <h1>Zone List</h1>
          <div style={{ margin: '1rem 0' }}>
            <CButton color="info" shape="rounded-0">
              Create Auth Value
            </CButton>
            <CButton color="info" shape="rounded-0" style={{ marginLeft: '1rem' }}>
              Create Zone
            </CButton>
          </div>
        </div>
        <CFormSelect aria-label="Default select example" style={{ width: '10%', margin: '1rem 0' }}>
          <option>10</option>
          <option value="1">10</option>
          <option value="2">25</option>
          <option value="3">50</option>
          <option value="4">All</option>
        </CFormSelect>
        <div style={{ overflow: 'auto' }}>
          <CTable
            columns={columns}
            items={items}
            style={{
              width: '100%',
              minWidth: '600px',
            }}
            hover
          />
        </div>
        <CPagination size="sm" align="end" aria-label="Page navigation example">
          <CPaginationItem style={{ color: 'black' }} disabled>
            Previous
          </CPaginationItem>
          <CPaginationItem style={{ color: 'black' }} active="true">
            1
          </CPaginationItem>
          <CPaginationItem style={{ color: 'black' }}>2</CPaginationItem>
          <CPaginationItem style={{ color: 'black' }}>3</CPaginationItem>
          <CPaginationItem style={{ color: 'black' }}>Next</CPaginationItem>
        </CPagination>
      </div>
    </>
  )
}

export default ZoneList
