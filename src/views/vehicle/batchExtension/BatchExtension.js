import React from 'react'
import { CTable, CPagination, CPaginationItem, CFormSelect, CButton } from '@coreui/react'
const BatchExtension = () => {
  const [platecardInput, setPlatecardInput] = React.useState('My passPlate No. Search')

  const platecardInputtype = (val) => {
    if (val === '2') {
      setPlatecardInput('My passCard No. Search')
    } else if (val === '3') {
      setPlatecardInput('May passName Search')
    } else if (val === '4') {
      setPlatecardInput('May passTel. Search')
    } else if (val === '5') {
      setPlatecardInput('May passParkingNo. Search')
    } else if (val === '6') {
      setPlatecardInput('May passAddress Search')
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
      key: 'parkingname',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'authzone',
      label: 'Auth Zone.',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
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
      key: 'driver',
      label: 'Driver',
      _props: { scope: 'col' },
    },
    {
      key: 'address',
      label: 'Address',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      plateno: 'ABC123',
      cardno: ' ',
      vehicleauthtype: 'Passport Car',
      vehicletype: 'Small Car',
      parkingname: 'Mall',
      authzone: properties('success', 'Main Garage'),
      status: properties('danger', 'OUT'),
      effect: '12/11/2021',
      expired: properties('success', '11/05/2021 15:02:02'),
      driver: '1',
      address: ' ',
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Batch Extension</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
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
              width: '70%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>Mall</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>- Choose Zone -</option>
              <option value="1">Main Garage</option>
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
              <option value="3">Name</option>
              <option value="4">Tel.</option>
              <option value="5">Parking No.</option>
              <option value="6">Address</option>
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
              <label htmlFor="expiresfrom">Expires From</label>
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
