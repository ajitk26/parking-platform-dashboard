import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import DashboardChart from '../dashboard/DashboardChart'
import Todo from '../dashboard/Todo'
const Dashboard = () => {
  return (
    <div>
      <CContainer>
        <CContainer>
          <CRow xs={{ gutterX: 5 }}>
            <CCol>
              <DashboardChart />
            </CCol>
            <CCol>
              <Todo />
            </CCol>
          </CRow>
        </CContainer>
      </CContainer>
    </div>
  )
}

export default Dashboard
