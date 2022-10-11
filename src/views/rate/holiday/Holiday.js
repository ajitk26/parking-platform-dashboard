import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
  CInputGroup,
  CInputGroupText,
  CFormInput,
} from '@coreui/react'
import Popup from 'reactjs-popup'

const Holiday = () => {
  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="warning">Transaction Record</CButton>
        <CButton color="danger">Vehicle Management</CButton>
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
      key: 'holidayname',
      label: 'Holiday Name',
      _props: { scope: 'col' },
    },
    {
      key: 'holidaytype',
      label: 'Holiday Type',
      _props: { scope: 'col' },
    },
    {
      key: 'holidaytime',
      label: 'Holiday Time',
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
      holidayname: 'sunday',
      holidaytype: 'General Holiday',
      holidaytime: '30/09/2022 13:12:12',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Holiday</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '40%',
            justifyContent: 'space-between',
          }}
        >
          <CButton color="info">Quickly set Holiday</CButton>
          <Popup trigger={<CButton color="info">Create Holiday</CButton>} modal nested>
            {(close) => (
              <div className="popup-forms">
                <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Holiday Name :
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="Enter Holiday name"></CFormInput>
                </CInputGroup>
                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Holiday Date :
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="Enter Holiday Date"></CFormInput>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Holiday Type :
                  </CInputGroupText>
                  <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
                    <option value="1">General Holiday (1 day)</option>
                    <option value="2">Special Holiday (2 day)</option>
                  </CFormSelect>
                </CInputGroup>
                <div
                  style={{
                    width: '30%',
                    height: '2rem',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <CButton color="success" size="sm">
                    Submit
                  </CButton>
                  <CButton color="danger" size="sm" onClick={close}>
                    Close
                  </CButton>
                </div>
              </div>
            )}
          </Popup>
          <CButton color="info">Delete all Holidays</CButton>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'max-content',
            minHeight: '12vh',
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
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Mall</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Holiday Type</option>
              <option value="1">General Holiday</option>
              <option value="2">Special Holiday</option>
            </CFormSelect>
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

export default Holiday
