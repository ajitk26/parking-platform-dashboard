import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCarAlt, cilPuzzle, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavGroup,
    name: 'Configuration',
    to: '/Configuration',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Parking List',
        to: '/configuration/parkingList',
      },
      {
        component: CNavItem,
        name: 'Zone List',
        to: '/configuration/zoneList',
      },
      {
        component: CNavItem,
        name: 'Equipments',
        to: '/configuration/equipments',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Vehicle',
    to: '/vehicle',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Vehicle List',
        to: '/vehicle/vehicleList',
      },
      {
        component: CNavItem,
        name: 'Vehicle On Field',
        to: '/vehicle/vehicleOnField',
      },
      {
        component: CNavItem,
        name: 'Batch Extension',
        to: '/vehicle/batchExtension',
      },
      {
        component: CNavItem,
        name: 'Batch Authorization',
        to: '/vehicle/batchAuthorization',
      },
      {
        component: CNavItem,
        name: 'Batch Delete',
        to: '/vehicle/batchDelete',
      },
      {
        component: CNavItem,
        name: 'Black List',
        to: '/vehicle/blackList',
      },
      {
        component: CNavItem,
        name: 'Vehicle Auth Type',
        to: '/vehicle/vehicleAuthType',
      },
      {
        component: CNavItem,
        name: 'Vehicle Type',
        to: '/vehicle/vehicleType',
      },
    ],
  },
]

export default _nav
