import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilPlus, cilSettings } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
import { color } from '@mui/system'

const configNav = [
  {
    component: CNavItem,
    name: 'Basic Setting',
    to: '/configuration/parkConfiguration/basicSetting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Advanced Setting',
    to: '/configuration/parkConfiguration/advancedSetting',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Gateway',
    to: 'rolesAndPermission/employeeManagement',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cashier',
    to: 'rolesAndPermission/employeeManagement',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Handheld',
    to: 'rolesAndPermission/employeeManagement',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'AutoPay Station',
    to: 'rolesAndPermission/employeeManagement',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Channel',
    to: '/autoPayStation',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Controller',
    to: '/autoPayStation',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Discounter',
    to: 'rolesAndPermission/employeeManagement',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
]
export default configNav
