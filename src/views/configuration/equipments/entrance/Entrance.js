import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'

const Entrance = () => {
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
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'parkingName',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'code',
      label: 'Code',
      _props: { scope: 'col' },
    },
    {
      key: 'iccid',
      label: 'ICCID',
      _props: { scope: 'col' },
    },
    {
      key: 'ip',
      label: 'IP',
      _props: { scope: 'col' },
    },
    {
      key: 'property',
      label: 'Property',
      _props: { scope: 'col' },
    },
    {
      key: 'type',
      label: 'Type',
      _props: { scope: 'col' },
    },
    {
      key: 'model',
      label: 'Model',
      _props: { scope: 'col' },
    },
    {
      key: 'hardware',
      label: 'Hardware',
      _props: { scope: 'col' },
    },
    {
      key: 'software',
      label: 'Software',
      _props: { scope: 'col' },
    },
    {
      key: 'lstonline',
      label: 'Last Time Online',
      _props: { scope: 'col' },
    },
    {
      key: 'network',
      label: 'Network',
      _props: { scope: 'col' },
    },
    {
      key: 'control',
      label: 'Control',
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
      id: 7,
      name: 1,
      parkingName: 'Mall',
      code: 'C32958383335090034344631',
      iccid: ' ',
      ip: '192.168.64.5',
      property: properties('success'),
      type: ' ',
      model: ' ',
      hardware: '1.21',
      software: '1.44',
      lstonline: '28/11/2019 18:27:40',
      network: properties('danger'),
      control: ' ',
      operation: operation(),
    },
  ]
  return (
    <>
      <div className="conf-list">
        <div>
          <h1>Entrance & Exit</h1>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            padding: '2rem 0',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            width: '100%',
          }}
        >
          <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
            <option>- Choose Parking -</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
          <input type="text" placeholder="Code" className="entrance-input"></input>
          <input type="text" placeholder="Hardware" className="entrance-input"></input>
          <input type="text" placeholder="Software" className="entrance-input"></input>
          <input type="text" placeholder="ICCID" className="entrance-input"></input>
          <CButton color="info">Search</CButton>
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
            bordered
            borderColor="secondary"
            color="dark"
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

export default Entrance
