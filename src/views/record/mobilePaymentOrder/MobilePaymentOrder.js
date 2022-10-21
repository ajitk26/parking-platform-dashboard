import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const MobilePaymentOrder = () => {
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
      key: 'orderno',
      label: 'Order No.',
      _props: { scope: 'col' },
    },
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
      key: 'transtime',
      label: 'Trans. Time',
      _props: { scope: 'col' },
    },
    {
      key: 'paytime',
      label: 'Pay Time',
      _props: { scope: 'col' },
    },
    {
      key: 'fare',
      label: 'Fare',
      _props: { scope: 'col' },
    },
    {
      key: 'actualamount',
      label: 'Actual Amount',
      _props: { scope: 'col' },
    },
    {
      key: 'paytype',
      label: 'Pay Type',
      _props: { scope: 'col' },
    },
    {
      key: 'paystatus',
      label: 'Pay Status',
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
      orderno: 'ABC123',
      plateno: ' ',
      parkingname: 'Mall',
      transtime: properties('success', '11/05/2021 15:02:02'),
      paytime: ' ',
      fare: '0.00',
      actualamount: ' ',
      paytype: properties('danger', 'Un-Paid'),
      paystatus: properties('danger', 'Un-Paid'),
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>MobilePayment Order</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Export Details
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
              width: '55%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '30%' }}>
              <option>Mall</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '30%' }}>
              <option>- Pay Type -</option>
              <option value="1">Line Pay</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '30%' }}>
              <option>- Pay Status -</option>
              <option value="1">Paid</option>
              <option value="2">Un-Paid</option>
              <option value="3">Overtime</option>
            </CFormSelect>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '55%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '20%' }}>
              <option>Plate No.</option>
              <option value="1">Plate No.</option>
              <option value="2">Card No.</option>
            </CFormSelect>
            <input type="text" placeholder="Search Content" />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '11%',
              }}
            >
              <label htmlFor="expiresfrom">Pay Time</label>
              <input type="date" id="paytime" name="paytime" />
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

export default MobilePaymentOrder
