import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const GroupSpaceVehicle = () => {
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
        <CButton color="warning">Edit</CButton>
        <CButton color="success">Space Extension</CButton>
        <CButton color="danger">Delete</CButton>
      </CButtonGroup>
    )
  }

  const columns = [
    {
      key: 'spaceno',
      label: 'Space No.',
      _props: { scope: 'col' },
    },
    {
      key: 'parkingname',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'zonename',
      label: 'Zone Name',
      _props: { scope: 'col' },
    },
    {
      key: 'groupspacename',
      label: 'Group Space Name',
      _props: { scope: 'col' },
    },
    {
      key: 'spacetype',
      label: 'Space Type',
      _props: { scope: 'col' },
    },
    {
      key: 'effect',
      label: 'Effect',
      _props: { scope: 'col' },
    },
    {
      key: 'expired',
      label: 'Expired',
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
      spaceno: ' ',
      parkingname: ' ',
      zonename: ' ',
      groupspacename: ' ',
      spacetype: properties('success', 'Public Spaces'),
      effect: properties('success', '11/02/2022'),
      expired: properties('danger', '18/02/2022'),
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Group Space Vehicle</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Create Vehicle
          </CButton>
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Batch Extension
          </CButton>
        </div>
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
              width: '50%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '40%' }}>
              <option>Mall</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '40%' }}>
              <option>Screening Space</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '70%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <input type="text" placeholder="Search Content" />
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>Pay Mode</option>
              <option value="1">Public Spaces</option>
              <option value="2">Private Spaces</option>
            </CFormSelect>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '11%',
              }}
            >
              <label htmlFor="expiresfrom">Expires From:</label>
              <input type="date" id="expiresfrom" name="expfrom" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '11%' }}>
              <label htmlFor="expiresto">Expires To:</label>
              <input type="date" id="expiresto" name="expfrom" />
            </div>
            <CButton color="info" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
              Search
            </CButton>
            <CButton color="secondary" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
              Reset
            </CButton>
          </div>
        </div>
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

export default GroupSpaceVehicle
