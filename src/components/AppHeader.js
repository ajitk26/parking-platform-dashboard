import React from 'react'
import { NavLink } from 'react-router-dom'
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
<<<<<<< HEAD
import { cilMenu } from '@coreui/icons'
=======
import { cifAd, cilMenu } from '@coreui/icons'
>>>>>>> 44948a20e00bb16fe41d5904d4133440bd19c74c

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
<<<<<<< HEAD
        {/* <CHeaderBrand className="mx-auto d-md-none" to="/">
        </CHeaderBrand> */}
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
=======
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={cifAd} height={70} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
>>>>>>> 44948a20e00bb16fe41d5904d4133440bd19c74c
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
