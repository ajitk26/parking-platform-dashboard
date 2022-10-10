import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const SettlementRecord = () => {
  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="info">View</CButton>
        <CButton color="warning">Edit</CButton>
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
      key: 'aps',
      label: 'APS',
      _props: { scope: 'col' },
    },
    {
      key: 'fare',
      label: 'Fare',
      _props: { scope: 'col' },
    },
    {
      key: 'totalcount',
      label: 'Total Count',
      _props: { scope: 'col' },
    },
    {
      key: 'cashfare',
      label: 'Cash Fare',
      _props: { scope: 'col' },
    },
    {
      key: 'cashcount',
      label: 'Cash Count',
      _props: { scope: 'col' },
    },
    {
      key: 'otherfare',
      label: 'Other Fare',
      _props: { scope: 'col' },
    },
    {
      key: 'othercount',
      label: 'Other Count',
      _props: { scope: 'col' },
    },
    {
      key: 'from',
      label: 'from',
      _props: { scope: 'col' },
    },
    {
      key: 'to',
      label: 'To',
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
      parkingname: ' ',
      aps: ' ',
      fare: ' ',
      totalcount: ' ',
      cashfare: ' ',
      cashcount: ' ',
      otherfare: ' ',
      othercount: ' ',
      from: ' ',
      to: ' ',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Settlement Record</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="info" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Export Details
          </CButton>
          <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Print Record
          </CButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'max-content',
            minHeight: '10vh',
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
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '40%' }}>
              <option>-Choose APS-</option>
              <option value="1"></option>
            </CFormSelect>
            <CButton color="success" size="sm">
              Submit
            </CButton>
            <CButton color="secondary" size="sm">
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

export default SettlementRecord
