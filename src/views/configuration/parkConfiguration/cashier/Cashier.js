import React from 'react'
import { Divider, Button } from '@mui/material'
import { CRow, CFormInput, CFormLabel, CCol, CFormSelect } from '@coreui/react'

const Cashier = () => {
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
            Code :
          </CFormLabel>
          <CCol sm={4}>
            <CFormSelect aria-label="Default select example">
              <option>--Choose--</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mb-3">
          <CFormLabel className="col-sm-2 col-form-label" style={{ fontWeight: 500 }}>
            Cashier Name:
          </CFormLabel>
          <CCol md={4}>
            <CFormInput required />
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default Cashier
