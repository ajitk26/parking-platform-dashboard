import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const RateList = () => {
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
        <CButton color="danger">Delete</CButton>
      </CButtonGroup>
    )
  }
  const ratefunctions = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="primary">Edit</CButton>
        <CButton color="primary">Test</CButton>
        <CButton color="primary">Copy to</CButton>
      </CButtonGroup>
    )
  }

  const columns = [
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
      key: 'ratetype',
      label: 'Rate Type',
      _props: { scope: 'col' },
    },
    {
      key: 'modifytime',
      label: 'Modify Time',
      _props: { scope: 'col' },
    },
    {
      key: 'modifier',
      label: 'Modifier',
      _props: { scope: 'col' },
    },
    {
      key: 'ratefunctions',
      label: 'Rate Setting/Testing/Copying',
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
      parkingname: 'Mall',
      zonename: 'Main Garage',
      vehicleauthtype: 'Passport Car',
      vehicletype: 'Small Car',
      ratetype: properties('success', 'Charge for simple accumulation'),
      modifytime: 'N/A',
      modifier: 'exparkadmin',
      ratefunctions: ratefunctions(),
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Rate List</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '23%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Maximum Charge per Day
          </CButton>
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Create Rate
          </CButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'max-content',
            minHeight: '17vh',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '35%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '45%' }}>
              <option>Mall</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '45%' }}>
              <option>- Choose Zone -</option>
              <option value="1">Main Garage</option>
            </CFormSelect>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '51%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '30%' }}>
              <option>Vehicle Auth Type</option>
              <option value="1">VIP</option>
              <option value="2">Passport Car</option>
              <option value="3">Stored value Car</option>
              <option value="4">Parking</option>
              <option value="5">Free Car</option>
              <option value="6">Parking pool Car</option>
              <option value="7">Hourly Rental Car</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '30%' }}>
              <option>Vehicle Type</option>
              <option value="1">Motorcycle</option>
              <option value="2">Small Car</option>
              <option value="3">Medium Car</option>
              <option value="4">Large Car</option>
              <option value="5">Spare Model 1</option>
              <option value="6">Spare Model 2</option>
            </CFormSelect>
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

export default RateList
