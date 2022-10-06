import {
  CButton,
  CFormSelect,
  CTable,
  CPagination,
  CPaginationItem,
  CButtonGroup,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormCheck,
} from '@coreui/react'
import Popup from 'reactjs-popup'
import React from 'react'

const GroupSpaceList = () => {
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
        <CButton color="warning">Edit</CButton>
        <CButton color="success">Bind / Un-bind</CButton>
        <CButton color="primary">Space manage</CButton>
        <CButton color="danger">Delete</CButton>
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
      key: 'name',
      label: 'Name',
      _props: { scope: 'col' },
    },
    {
      key: 'chargingrule',
      label: 'Charging Rule',
      _props: { scope: 'col' },
    },
    {
      key: 'totalspace',
      label: 'Total Space',
      _props: { scope: 'col' },
    },
    {
      key: 'effectspace',
      label: 'Effect Space',
      _props: { scope: 'col' },
    },
    {
      key: 'emptyspace',
      label: 'Empty Space',
      _props: { scope: 'col' },
    },
    {
      key: 'expiredspace',
      label: 'Expired Space',
      _props: { scope: 'col' },
    },
    {
      key: 'bindingspace',
      label: 'Binding Space',
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
      name: '112',
      chargingrule: properties('success', 'First Out'),
      totalspace: '0',
      effectspace: '0',
      emptyspace: '0',
      expiredspace: '0',
      bindingspace: ' ',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]

  return (
    <>
      <div className="conf-list">
        <h1>Group List</h1>
        <Popup
          trigger={
            <CButton color="info" style={{ width: '15%', margin: '1rem 0' }}>
              Create Holiday
            </CButton>
          }
          modal
          nested
        >
          {(close) => (
            <div className="popup-forms">
              <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
              <CInputGroup className="form-content">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  Parking Name :
                </CInputGroupText>
                <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
                  <option value="1">Mall</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup className="form-content">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  Group Space Name :
                </CInputGroupText>
                <CFormInput type="text"></CFormInput>
              </CInputGroup>
              <CInputGroup className="form-content">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  Charging rules :
                </CInputGroupText>
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault1"
                  id="flexRadioDefault2"
                  label="First out"
                  defaultChecked
                />
                <CFormCheck
                  type="radio"
                  name="flexRadioDefault1"
                  id="flexRadioDefault1"
                  label="Backward"
                />
              </CInputGroup>
              <CInputGroup className="form-content">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  Driver :
                </CInputGroupText>
                <CFormInput type="text"></CFormInput>
              </CInputGroup>
              <CInputGroup className="form-content">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  Tel :
                </CInputGroupText>
                <CFormInput type="text"></CFormInput>
              </CInputGroup>
              <CInputGroup className="form-content">
                <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                  Remarks :
                </CInputGroupText>
                <CFormInput type="text"></CFormInput>
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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'max-content',
            minHeight: '15vh',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '65%',
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
              <option>Plate No.</option>
              <option value="1">Plate No.</option>
              <option value="2">Name</option>
            </CFormSelect>
            <input type="text"></input>
          </div>
        </div>
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

export default GroupSpaceList
