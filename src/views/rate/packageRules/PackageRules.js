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
  CFormTextarea,
} from '@coreui/react'
import Popup from 'reactjs-popup'
const PackageRules = () => {
  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="info">Edit</CButton>
        <CButton color="warning">View</CButton>
        <CButton color="danger">Delete</CButton>
      </CButtonGroup>
    )
  }

  const columns = [
    {
      key: 'packagename',
      label: 'Package Name',
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
      key: 'cardcategory',
      label: 'Card Category',
      _props: { scope: 'col' },
    },
    {
      key: 'packageeffdate',
      label: 'Package Effective Date',
      _props: { scope: 'col' },
    },
    {
      key: 'packageexptime',
      label: 'Package Expired Time',
      _props: { scope: 'col' },
    },
    {
      key: 'totalpackagecost',
      label: 'Total Package Cost',
      _props: { scope: 'col' },
    },
    {
      key: 'carcardramt',
      label: 'Card Charge Amount',
      _props: { scope: 'col' },
    },
    {
      key: 'numberdelayedmonths',
      label: 'Number of delayed months',
      _props: { scope: 'col' },
    },
    {
      key: 'chargeamtelectriccard',
      label: 'Charge amount of electric card',
      _props: { scope: 'col' },
    },
    {
      key: 'numberdelayedmonthselectric',
      label: 'Number of delayed months of electric card',
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
      packagename: '55',
      vehicleauthtype: 'Passport Car',
      vehicletype: 'Small Car',
      cardcategory: ' ',
      packageeffdate: '-',
      packageexptime: '-',
      totalpackagecost: '10.00 rs',
      carcardramt: '-',
      numberdelayedmonths: '10',
      chargeamtelectriccard: '-',
      numberdelayedmonthselectric: '-',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Package Rules</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '23%',
            justifyContent: 'space-between',
          }}
        >
          <Popup
            trigger={
              <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
                New package rule
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
                    Package Name:
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="Enter package name"></CFormInput>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                    Vehicle Auth Type:
                  </CInputGroupText>
                  <CFormSelect id="inputGroupSelect02">
                    <option value="1">VIP</option>
                    <option value="2">Passport Car</option>
                    <option value="3">Stored value Car</option>
                    <option value="4">Parking</option>
                    <option value="5">Free Car</option>
                    <option value="6">Parking pool Car</option>
                    <option value="7">Hourly Rental Car</option>
                  </CFormSelect>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                    Vehicle Type:
                  </CInputGroupText>
                  <CFormSelect
                    id="inputGroupSelect03"
                    aria-label="Example select with button addon"
                  >
                    <option value="1">Motorcycle</option>
                    <option value="2">Small Car</option>
                    <option value="3">Medium Car</option>
                    <option value="4">Large Car</option>
                    <option value="5">Spare Model 1</option>
                    <option value="6">Spare Model 2</option>
                  </CFormSelect>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Total package Amount:
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="Enter total package Amount"></CFormInput>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Months of card Extension:
                  </CInputGroupText>
                  <CFormInput type="text"></CFormInput>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect02">
                    Card type:
                  </CInputGroupText>
                  <CFormSelect id="inputGroupSelect04" aria-label="Card type">
                    <option value="1">Stored value electric card</option>
                    <option value="2">Extension card</option>
                  </CFormSelect>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Package Effective Time:
                  </CInputGroupText>
                  <input
                    type="date"
                    style={{
                      outline: 'none',
                      border: '1px solid gray',
                      borderRadius: '0 8px 8px 0',
                      padding: '0 1rem',
                      color: 'gray',
                    }}
                  ></input>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Package expiration time:
                  </CInputGroupText>
                  <input
                    type="date"
                    style={{
                      outline: 'none',
                      border: '1px solid gray',
                      borderRadius: '0 8px 8px 0',
                      padding: '0 1rem',
                      color: 'gray',
                    }}
                  ></input>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Description
                  </CInputGroupText>
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
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
              width: '60%',
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
              <option>Vehicle Auth Type</option>
              <option value="1">VIP</option>
              <option value="2">Passport Car</option>
              <option value="3">Stored value Car</option>
              <option value="4">Parking</option>
              <option value="5">Free Car</option>
              <option value="6">Parking pool Car</option>
              <option value="7">Hourly Rental Car</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Vehicle Type</option>
              <option value="1">Motorcycle</option>
              <option value="2">Small Car</option>
              <option value="3">Medium Car</option>
              <option value="4">Large Car</option>
              <option value="5">Spare Model 1</option>
              <option value="6">Spare Model 2</option>
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

export default PackageRules
