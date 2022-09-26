import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const ParkingList = () => {
  const properties = (val) => {
    if (val === 'success') {
      return (
        <CButton color="success" variant="outline" size="sm">
          Success
        </CButton>
      )
    } else if (val === 'danger') {
      return (
        <CButton color="danger" variant="outline" size="sm">
          Offline
        </CButton>
      )
    }
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
      key: 'systemType',
      label: 'System Type',
      _props: { scope: 'col' },
    },
    {
      key: 'account',
      label: 'Account',
      _props: { scope: 'col' },
    },
    {
      key: 'lastonline',
      label: 'Last Time Online',
      _props: { scope: 'col' },
    },
    {
      key: 'network',
      label: 'Network',
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
      parkingName: 'Mark',
      systemType: 'Otto',
      account: '@mdo',
      lastonline: '10:00 AM',
      network: properties('danger'),
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>ParkingList</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignContent: 'center',
            padding: '2rem 0',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            width: '100%',
          }}
        >
          <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
            <option>-- System Type --</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
          <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
            <option>-- Network --</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
          <input type="text" placeholder="Parking Name"></input>
          <CButton color="info" shape="rounded-0">
            Search
          </CButton>
          <CButton color="secondary" shape="rounded-0">
            Reset
          </CButton>
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

export default ParkingList
