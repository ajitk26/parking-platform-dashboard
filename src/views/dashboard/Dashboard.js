import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import DashboardChart from '../dashboard/DashboardChart'
import Todo from '../dashboard/Todo'
import RecentlyUsed from './RecentlyUsed'
import BottomPanel from './bottomPanel/BottomPanel'

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
          <RecentlyUsed />
        </CContainer>
        <BottomPanel />
      </CContainer>
    </div>
  )
}

export default Dashboard
