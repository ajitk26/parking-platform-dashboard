import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const BatchExtension = () => {
  const [platecardInput, setPlatecardInput] = React.useState('My passPlate No. Search')

  const platecardInputtype = (val) => {
    if (val === '2') {
      setPlatecardInput('My passCard No. Search')
    } else {
      setPlatecardInput('My passPlate No. Search')
    }
  }

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
      key: 'photo',
      label: 'Photo',
      _props: { scope: 'col' },
    },
    {
      key: 'adjust',
      label: 'Adjust',
      _props: { scope: 'col' },
    },
    {
      key: 'cardno',
      label: 'Card No.',
      _props: { scope: 'col' },
    },
    {
      key: 'parkingname',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'entrytime',
      label: 'Entry Time',
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
      key: 'paystatus',
      label: 'Pay Status',
      _props: { scope: 'col' },
    },
    {
      key: 'fare',
      label: 'Fare',
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
      photo: ' ',
      adjust: properties('warning', 'Adjust'),
      cardno: ' ',
      parkingname: 'Mall',
      entrytime: properties('success', '11/05/2021 15:02:02'),
      vehicleauthtype: 'Passport Car',
      vehicletype: 'Small Car',
      paystatus: properties('danger', 'Un-Paid'),
      fare: '0.00',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Vehicle On Field</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Manual Entry
          </CButton>
          <CButton color="danger" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Man-Exit ResultSet
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
              width: '70%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>Mall</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>- Choose Zone -</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            <CFormSelect
              aria-label="Default select example"
              style={{ width: '20%' }}
              onChange={(e) => {
                console.log(e.target.value)
                platecardInputtype(e.target.value)
              }}
            >
              <option value="1">Plate No.</option>
              <option value="2">Card No.</option>
            </CFormSelect>
            <input type="text" placeholder={`${platecardInput}`} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '85%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>Vehicle Auth Type</option>
              <option value="1">VIP</option>
              <option value="2">Passport Car</option>
              <option value="3">Stored value Car</option>
              <option value="4">Parking</option>
              <option value="5">Free Car</option>
              <option value="6">Parking pool Car</option>
              <option value="7">Hourly Rental Car</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>Vehicle Type</option>
              <option value="1">Motorcycle</option>
              <option value="2">Small Car</option>
              <option value="3">Medium Car</option>
              <option value="4">Large Car</option>
              <option value="5">Spare Model 1</option>
              <option value="6">Spare Model 2</option>
            </CFormSelect>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '11%',
              }}
            >
              <label htmlFor="expiresfrom">Entry Time</label>
              <input type="date" id="expiresfrom" name="expfrom" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '11%' }}>
              <label htmlFor="expiresto">To</label>
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

export default BatchExtension
