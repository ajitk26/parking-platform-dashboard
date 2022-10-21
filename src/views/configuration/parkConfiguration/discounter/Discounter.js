import React from 'react'
import { Button } from '@mui/material'
import { CRow, CFormLabel, CFormSelect, CCol, CFormInput } from '@coreui/react'

const Discounter = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <h5>Create Discounter</h5>
      <CRow className="mb-3">
        <CFormLabel className="col-sm-2 col-form-label">Device Type :</CFormLabel>
        <CCol sm={4}>
          <CFormSelect aria-label="Default select example">
            <option>Merchant Machine</option>
            <option>Self-Service Machine</option>
          </CFormSelect>
        </CCol>
      </CRow>
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
  )
}

export default Discounter
