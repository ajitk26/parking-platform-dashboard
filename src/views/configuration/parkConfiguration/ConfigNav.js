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
    to: '/configuration/parkConfiguration/gateway',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Cashier',
    to: '/configuration/parkConfiguration/cashier',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Handheld',
    to: '/configuration/parkConfiguration/handheld',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'AutoPay Station',
    to: '/configuration/parkConfiguration/autoPayStation',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Channel',
    to: '/configuration/parkConfiguration/channel',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Controller',
    to: '/configuration/parkConfiguration/controller',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Discounter',
    to: '/configuration/parkConfiguration/discounter',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
  },
]
export default configNav
