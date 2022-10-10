import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cibGoogleAnalytics,
  cilCarAlt,
  cilCash,
  cilClipboard,
  cilDollar,
  cilMap,
  cilPuzzle,
  cilSpeedometer,
  cilUserPlus,
} from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const configNav = [
  {
    component: CNavItem,
    name: 'Basic Setting',
    to: '/basicSetting',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Advanced Setting',
    to: '/advancedSetting',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]
export default configNav
