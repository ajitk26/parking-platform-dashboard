import React from 'react'
import { Divider, Button, Switch } from '@mui/material'
import { CFormLabel, CCol, CRow, CFormSelect, CFormInput } from '@coreui/react'

const HandHeld = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <h5>Create Handheld</h5>
      <Divider />
      <div style={{ marginTop: 20 }} className="configNav">
        <div>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
              Code :
            </CFormLabel>
            <CCol sm={8}>
              <CFormSelect aria-label="Default select example">
                <option>--Choose--</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
              Handheld Name:
            </CFormLabel>
            <CCol md={8}>
              <CFormInput required />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
              Zone :
            </CFormLabel>
            <CCol md={8}>
              <CFormSelect aria-label="Default select example">
                <option>Main Garage</option>
              </CFormSelect>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
              Property :
            </CFormLabel>
            <CCol md={8}>
              <CFormSelect aria-label="Default select example">
                <option>Cashier</option>
                <option>Entry</option>
                <option>Exit</option>
              </CFormSelect>
            </CCol>
          </CRow>
        </div>
        <div>
          <CRow className="mb-3">
            <CCol sm={6}>
              <Switch defaultChecked />
            </CCol>
            <CFormLabel className="col-sm-4 col-form-label">Update</CFormLabel>
          </CRow>
        </div>
      </div>
    </div>
  )
}

export default HandHeld
