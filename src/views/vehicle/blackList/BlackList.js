import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const BlackList = () => {
  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="warning">Edit</CButton>
        <CButton color="danger">Delete</CButton>
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
      key: 'reason',
      label: 'Reason',
      _props: { scope: 'col' },
    },
    {
      key: 'createtime',
      label: 'Create Time',
      _props: { scope: 'col' },
    },
    {
      key: 'creator',
      label: 'Creator',
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
      parkingname: 'Mall',
      reason: ' ',
      createtime: '23/2/2021 12:43:22',
      creator: ' ',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Black List</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '20%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="danger" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Create
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
              width: '40%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '30%' }}>
              <option>Mall</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <input type="text" placeholder="Plate No." />
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

export default BlackList
