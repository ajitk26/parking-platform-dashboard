import React from 'react'
import {
  CFormSelect,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavGroup,
  CSidebarToggler,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import './parkCofiguration.scss'
import { cilArrowBottom } from '@coreui/icons'
import SimpleBar from 'simplebar-react'
import navigation from '../parkConfiguration/ConfigNav'
import { AppSidebarNav } from 'src/components/AppSidebarNav'

const loc = [{ title: 'Mall' }, { title: 'Garage' }]

const ParkConfiguration = () => {
  return (
    <div className="sidebarContainer">
      <h2>Sub Configuration</h2>
      <div>
        <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
          <option>Mall</option>
          <option>Garage</option>
        </CFormSelect>
      </div>
      <div>
        <CSidebar className="testCon">
          <CSidebarNav>
            <SimpleBar>
              <AppSidebarNav items={navigation} />
            </SimpleBar>
          </CSidebarNav>
        </CSidebar>
      </div>
      {/* <CNavItem
            href="#"
            style={{ color: 'black', fontSize: 18, fontWeight: 500 }}
            className="hoverOver"
          >
            Basic setting
          </CNavItem>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>
            Advanced setting
          </CNavItem>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 450 }}>
            Gateway
          </CNavItem>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 400 }}>
            Cashier
          </CNavItem>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 400 }}>
            Handheld
          </CNavItem>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 400 }}>
            AutoPay Station
          </CNavItem>
          <CNavGroup toggler="Channel" style={{ color: 'black', fontSize: 18, fontWeight: 400 }}>
            <CNavItem href="#" style={{ marginLeft: 14, paddingTop: 5 }}>
              <CIcon customClassName="nav-icon" icon={cilArrowBottom} style={{ width: 22 }} />
              SVPark
            </CNavItem>
          </CNavGroup>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 400 }}>
            Controller
          </CNavItem>
          <CNavItem href="#" style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>
            Discounter
          </CNavItem> */}
      {/* </CSidebarNav> */}
    </div>
  )
}

export default ParkConfiguration
