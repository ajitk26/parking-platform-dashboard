import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
} from '@coreui/react'
const VehicleAuthType = () => {
  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="warning">Edit</CButton>
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
      key: 'parkingname',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'vehicleauthtype',
      label: 'Vehicle Auth Type',
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
      key: 'describe',
      label: 'Describe',
      _props: { scope: 'col' },
    },
    {
      key: 'status',
      label: 'Status',
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
      id: 1,
      parkingname: 'Mall',
      vehicleauthtype: 'VIP',
      createtime: '23/2/2021 12:43:22',
      creator: 'zhuyi',
      modifytime: '06/04/2022 13:12:12',
      modifier: 'zhuyi',
      describe: 'VIP',
      status: 'Enable',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Vehicle Auth Type</h1>
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
          </div>
        </div>
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

export default VehicleAuthType
