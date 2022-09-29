import React from 'react'
import { CContainer, CRow, CCol } from '@coreui/react'
import { Typography, Divider } from '@mui/material'

const RecentlyUsed = () => {
  return (
    <div>
      <div className="recentlyUsed">
        <Typography variant="h9" color="inherit">
          RECENTLY USED
        </Typography>
        <Divider />
      </div>
      <CContainer>
        <CRow xs={{ gutter: 2 }}>
          <CCol xs={{ span: 4 }}>
            <div className="p-3 border bg-light">Dashboard</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <div className="p-3 border bg-light">Vehicle List</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <div className="p-3 border bg-light">Transaction Record</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <div className="p-3 border bg-light">Toll List</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <div className="p-3 border bg-light">Exit Record</div>
          </CCol>
          <CCol xs={{ span: 4 }}>
            <div className="p-3 border bg-light">Rate List</div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default RecentlyUsed
