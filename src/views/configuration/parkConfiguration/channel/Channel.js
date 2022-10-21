import React from 'react'
import { Button } from '@mui/material'
import { CCallout, CRow, CCol, CFormLabel, CFormInput, CFormSelect } from '@coreui/react'

const Channel = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <h5>Create Channel</h5>
      <CCallout color="danger">
        <b>Tips :</b> Both handheld and cashier belong to cashier equipment
      </CCallout>
      <CRow className="mb-3">
        <CFormLabel className="col-sm-2 col-form-label">Channel Name :</CFormLabel>
        <CCol sm={4}>
          <CFormInput type="text" />
        </CCol>
      </CRow>
      <CRow className="mb-3">
        <CFormLabel className="col-sm-2 col-form-label">Rel-Cashier:</CFormLabel>
        <CCol sm={4}>
          <CFormSelect aria-label="Default select example">
            <option>--Choose--</option>
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
          </CFormSelect>
        </CCol>
      </CRow>
    </div>
  )
}

export default Channel
