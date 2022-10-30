import React from 'react'
import { Button, Divider } from '@mui/material'
import { CFormInput, CCol, CFormSelect, CFormLabel, CRow } from '@coreui/react'
const Controller = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <h5>Control</h5>
      <Divider />
      <div style={{ marginTop: 18 }}>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Code :</CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>--Choose--</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Name :</CFormLabel>
          <CCol sm={4}>
            <CFormInput type="text" />
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Zone :</CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>Main Garage</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Channel :</CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>-Please click the channel-</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Property :</CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>Entry</option>
              <option>Exit</option>
              <option>All in one</option>
              <option>Cashier</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Charge Mode :</CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>Exit Pay</option>
              <option>Entry Pay</option>
              <option>Center Pay</option>
              <option>Export self-help</option>
              <option>Entry Buffet</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Tempo. Charge :</CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>Enable</option>
              <option>Disable</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">IP :</CFormLabel>
          <CCol sm={4}>
            <CFormInput type="text" defaultValue="192 . 168 . 8 . 99" />
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label">Gateway :</CFormLabel>
          <CCol sm={4}>
            <CFormInput type="text" defaultValue="192 . 168 . 8 . 1" />
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Controller
