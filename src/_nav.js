import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilCarAlt, cilDollar, cilPuzzle, cilSpeaker, cilSpeedometer } from '@coreui/icons'
import { CNavGroup, CNavItem } from '@coreui/react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquareParking } from '@fortawesome/free-solid-svg-icons'

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
    to: '/configuration',
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
        component: CNavGroup,
        name: 'Equipment',
        to: '/configuration/equipments',
        items: [
          {
            component: CNavItem,
            name: 'Entrance & Exit',
            to: '/configuration/equipments/entrance',
          },
          {
            component: CNavItem,
            name: 'Cashier',
            to: '/configuration/equipments/cashier',
          },
        ],
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
  {
    component: CNavGroup,
    name: 'Rate',
    to: '/rate',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Rate List',
        to: '/rate/rateList',
      },
      {
        component: CNavItem,
        name: 'Electronic Invoices(No)',
        to: '/rate/electronicInvoice',
      },

      {
        component: CNavItem,
        name: 'Holiday',
        to: '/rate/holiday',
      },
      {
        component: CNavItem,
        name: 'Rule Management',
        to: '/rate/ruleManagement',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Parking Space',
    to: '/parkingSpace',
    icon: <CIcon icon={cilCarAlt} customClassName="nav-icon" />,
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
    ],
  },
  {
    component: CNavGroup,
    name: 'Record',
    to: '/record',
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
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
      },
      {
        component: CNavItem,
        name: 'Park Configuration',
        to: '/configuration/parkConfiguration',
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
    name: 'AutoPay Station',
    to: '/autoPayStation',
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
    name: 'Analytics',
    to: '/Analytics',
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
    name: 'Roles & Permission',
    to: '/rolesAndPermission',
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
]

export default _nav
