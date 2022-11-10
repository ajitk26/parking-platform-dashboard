import React from 'react'
import { Divider, Button } from '@mui/material'
import { CRow, CFormLabel, CFormInput, CCol, CFormSelect } from '@coreui/react'
const Gateway = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <h5>Create Gateway</h5>
      <Divider />
      <div style={{ marginTop: 20 }}>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label" style={{ fontWeight: 500 }}>
            Name:
          </CFormLabel>
          <CCol md={4}>
            <CFormInput required />
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label" style={{ fontWeight: 500 }}>
            Gateway Device :
          </CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>--Choose--</option>
            </CFormSelect>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Gateway
