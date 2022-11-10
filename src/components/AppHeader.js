import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import logo from '../assets/brand/logo1compressed.png'
import logo1 from '../assets/brand/logocompressed.png'
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4" style={{ backgroundColor: 'rgb(252, 252, 252)' }}>
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand>
          <img src={logo1} style={{ height: 42 }} />
          <img src={logo} style={{ height: 42 }} />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CDropdown>
              <CDropdownToggle color="white">Services</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Parking Serivces</CDropdownItem>
                <CDropdownItem href="#">Discount Services</CDropdownItem>
                <CDropdownItem href="#">Equipments Services</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">Parking Services</CNavLink>
          </CNavItem>
        </CHeaderNav>

        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
