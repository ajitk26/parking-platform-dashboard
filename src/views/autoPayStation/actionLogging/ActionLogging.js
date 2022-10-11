import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const ActionLogging = () => {
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
      key: 'aps',
      label: 'APS',
      _props: { scope: 'col' },
    },
    {
      key: 'plateno',
      label: 'Plate No.',
      _props: { scope: 'col' },
    },
    {
      key: 'operationinstructions',
      label: 'Operation Instructions',
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
        <h1>Action Logging</h1>
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
              width: '45%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Mall</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>- Choose APS -</option>
              <option value="1"></option>
            </CFormSelect>
            <input type="text" placeholder="Plate No." style={{ width: '25%' }}></input>
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
              width: '80vw',
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

export default ActionLogging
