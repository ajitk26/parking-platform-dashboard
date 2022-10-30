import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const VehicleModifyRecord = () => {
  const properties = (val, str) => {
    if (val === 'success') {
      return (
        <CButton color="success" variant="outline" size="sm">
          {str}
        </CButton>
      )
    } else if (val === 'danger') {
      return (
        <CButton color="danger" variant="outline" size="sm">
          {str}
        </CButton>
      )
    } else if (val === 'warning') {
      return (
        <CButton color="warning" variant="outline" size="sm">
          {str}
        </CButton>
      )
    }
  }

  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="info">View</CButton>
        <CButton color="success">Discount</CButton>
        <CButton color="warning">Edit</CButton>
        <CButton color="danger">Manual Exit</CButton>
        <CButton color="warning">Filter</CButton>
      </CButtonGroup>
    )
  }

  const columns = [
    {
      key: 'plateno',
      label: 'Plate No.',
      _props: { scope: 'col' },
    },
    {
      key: 'parkingname',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'vehicleauthtype',
      label: 'Vehicle Auth Type',
      _props: { scope: 'col' },
    },
    {
      key: 'vehicletype',
      label: 'Vehicle Type',
      _props: { scope: 'col' },
    },
    {
      key: 'operator',
      label: 'Operator',
      _props: { scope: 'col' },
    },
    {
      key: 'operationmode',
      label: 'Operation Mode',
      _props: { scope: 'col' },
    },
    {
      key: 'operationtype',
      label: 'Operation Type',
      _props: { scope: 'col' },
    },
    {
      key: 'operationtime',
      label: 'Operation Time',
      _props: { scope: 'col' },
    },
    {
      key: 'operation',
      label: 'Operation',
      _props: { scope: 'col' },
    },
  ]
  const items = []
  return (
    <>
      <div className="conf-list">
        <h1>Vehicle Modify Record</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'max-content',
            minHeight: '20vh',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '95%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>- Choose Parking -</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>- Operation Type -</option>
              <option value="1">Vehicle Basic info Modification</option>
              <option value="2">Vehicle forced Exit</option>
              <option value="3">Delete Vehicle</option>
            </CFormSelect>
            <input type="text" placeholder="Plate No." />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '11%',
              }}
            >
              <label htmlFor="expiresfrom">Operation Time</label>
              <input type="date" id="operationtime" name="operationtime" />
            </div>
            <CButton color="info" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
              Search
            </CButton>
            <CButton color="secondary" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
              Reset
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
              width: '100vw',
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

export default VehicleModifyRecord
