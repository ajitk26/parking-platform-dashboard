import React from 'react'
import { CFormSelect } from '@coreui/react'

const ParkConfiguration = () => {
  return (
    <div>
      <h2>Sub Configuration</h2>
      <div>
        <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
          <option>Mall</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </CFormSelect>
      </div>
    </div>
  )
}

export default ParkConfiguration
