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
    } else if (val === 'authzone') {
      return (
        <CButton color="success" variant="outline" size="sm">
          Main Garage
        </CButton>
      )
    } else if (val === 'expbal') {
      return (
        <CButton color="danger" variant="outline" size="sm">
          12/12/2021
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
        <CButton color="danger">Delete</CButton>
        <CButton color="warning">ZoneAuth.</CButton>
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
      key: 'cardno',
      label: 'Card No.',
      _props: { scope: 'col' },
    },
    {
      key: 'driver',
      label: 'Driver',
      _props: { scope: 'col' },
    },
    {
      key: 'vehicletype',
      label: 'Vehicle Type',
      _props: { scope: 'col' },
    },
    {
      key: 'vehicleauthtype',
      label: 'Vehicle Auth Type',
      _props: { scope: 'col' },
    },
    {
      key: 'effect',
      label: 'Effect',
      _props: { scope: 'col' },
    },
    {
      key: 'expbal',
      label: 'Expired / Balance',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
      _props: { scope: 'col' },
    },
    {
      key: 'lstentry',
      label: 'Last Entry',
      _props: { scope: 'col' },
    },
    {
      key: 'lstexit',
      label: 'Last Exit',
      _props: { scope: 'col' },
    },
    {
      key: 'authzone',
      label: 'Auth. Zone',
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
      plateno: 'ABC123',
      cardno: ' ',
      driver: '1',
      vehicletype: 'Small Car',
      vehicleauthtype: 'Passport Car',
      effect: '11/11/2021',
      expbal: properties('expbal'),
      status: 'OUT',
      lstentry: 'N/A',
      lstexit: 'N/A',
      authzone: properties('authzone'),
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
