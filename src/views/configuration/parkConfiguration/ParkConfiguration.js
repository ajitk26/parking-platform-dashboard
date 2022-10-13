import React from 'react'
import { CFormSelect } from '@coreui/react'
import './parkCofiguration.scss'

import ConfigContent from './ConfigContent'
import ConfigSidebar from './ConfigSidebar'

const ParkConfiguration = () => {
  return (
    <div>
      <h2>Sub Configuration</h2>
      <div>
        <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
          <option>Mall</option>
          <option>Garage</option>
        </CFormSelect>
      </div>
      <div className="configContainer flex-grow ">
        <ConfigSidebar />
        <ConfigContent />
      </div>
    </div>
  )
}

export default ParkConfiguration
