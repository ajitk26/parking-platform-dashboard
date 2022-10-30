import React from 'react'
import { Divider, Button } from '@mui/material'
import { CRow, CCol, CFormInput, CFormLabel, CForm } from '@coreui/react'

const BasicSetting = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>

      <h5>Basic Setting</h5>
      <Divider />
      <div className="basicElement">
        <div>
          <h3>Parking No.</h3>
          <h4 style={{ marginLeft: 50 }}>7</h4>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div>
          <h3>System Type</h3>
          <p style={{ marginLeft: 30 }}>
            <b>PLPE(PLPE)</b>
          </p>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />

        <div>
          <h4>Parking Code</h4>
          <p style={{ marginLeft: 25 }}>
            <b>0EB44C8411AF</b>
          </p>
        </div>
      </div>
      <div style={{ marginTop: 30 }} className="basicForm">
        <div>
          <CForm>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Parking Name:
              </CFormLabel>
              <CCol md={8}>
                <CFormInput defaultValue="Mall" required />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Address :
              </CFormLabel>
              <CCol md={8}>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Lng :
              </CFormLabel>
              <CCol md={8}>
                <CFormInput defaultValue="0" />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                SST No. :
              </CFormLabel>
              <CCol md={8}>
                <CFormInput />
              </CCol>
            </CRow>
          </CForm>
        </div>
        <div>
          <CForm>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Leader :
              </CFormLabel>
              <CCol md={8}>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Tel. :
              </CFormLabel>
              <CCol md={8}>
                <CFormInput />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Lat :
              </CFormLabel>
              <CCol md={8}>
                <CFormInput defaultValue="0.0" />
              </CCol>
            </CRow>
            <CRow className="mb-3">
              <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                Company Name:
              </CFormLabel>
              <CCol md={8}>
                <CFormInput />
              </CCol>
            </CRow>
          </CForm>
        </div>
      </div>
      <div style={{ marginTop: 30 }}>
        <CRow className="mb-2">
          <CFormLabel className="col-sm-2  col-form-label" style={{ fontWeight: 500 }}>
            Rate Description:
          </CFormLabel>
          <CCol md={8}>
            <CFormInput
              type="text"
              size="lg"
              aria-label="lg input example"
              style={{ marginRight: 20 }}
            />
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default BasicSetting
