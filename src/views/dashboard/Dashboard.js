import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import DashboardChart from '../dashboard/DashboardChart'
import Todo from '../dashboard/Todo'
import RecentlyUsed from './RecentlyUsed'
import BottomPanel from './bottomPanel/BottomPanel'
import SidePanel from './SidePanel'

const Dashboard = () => {
  return (
    <>
      <CContainer className="sidePanel">
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
          <BottomPanel />
        </CContainer>
        <SidePanel />
      </CContainer>
    </>
  )
}

export default Dashboard
