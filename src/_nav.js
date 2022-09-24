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
        name: 'Electronic Invoices',
        to: '/rate/electronicInvoice',
      },
      {
        component: CNavItem,
        name: 'Package Rules(No)',
        to: '/rate/packageRules',
      },
      {
        component: CNavItem,
        name: 'Group stored Value',
        to: '/rate/groupStoredValue',
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
    icon: <CIcon icon={cilMap} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Group-Space-List',
        to: '/parkingSpace/groupSpaceList',
      },
      {
        component: CNavItem,
        name: 'Group-Space-Vehicle',
        to: '/parkingSpace/groupSpaceVehicle',
      },
      {
        component: CNavItem,
        name: 'C-Space Qty Setting',
        to: '/parkingSpace/cSpaceQtySetting',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Record',
    to: '/record',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Entrance Record',
        to: '/record/entranceRecord',
      },
      {
        component: CNavItem,
        name: 'Exit Record',
        to: '/record/existRecord',
      },
      {
        component: CNavItem,
        name: 'Transaction Record',
        to: '/record/transactionRecord',
      },
      {
        component: CNavItem,
        name: 'On-Site Vehicle(No)',
        to: '/record/onSiteVehicle',
      },
      {
        component: CNavItem,
        name: 'Mobile Payment Order',
        to: '/record/mobilePaymentOrder',
      },
      {
        component: CNavItem,
        name: 'Extension Record',
        to: '/record/extensionRecord',
      },
      {
        component: CNavItem,
        name: 'Vehicle Modify Record',
        to: '/record/vehicleModifyRecord',
      },
      {
        component: CNavItem,
        name: 'Flash payment Record',
        to: '/record/flashPaymentRecord',
      },
      {
        component: CNavItem,
        name: 'Barrier Open(M) Record',
        to: '/record/barrierOpen(M)Record',
      },
      {
        component: CNavItem,
        name: 'Force-Exit Record',
        to: '/record/forceExitRecord',
      },
      {
        component: CNavItem,
        name: 'C-Space Extension Rec.',
        to: '/record/cSpaceExtensionRecord',
      },
      {
        component: CNavItem,
        name: 'Transaction Record No.',
        to: '/record/transactionRecordNo',
      },
      {
        component: CNavItem,
        name: 'Cashier Revenue Record',
        to: '/record/cashierRevenueRecord',
      },
      {
        component: CNavItem,
        name: 'Barrier Open(R) Record',
        to: '/record/barrierOpen(R)Record',
      },
      {
        component: CNavItem,
        name: 'PrePay Record',
        to: '/record/prePayRecord',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'AutoPay Station',
    to: '/autoPayStation',
    icon: <CIcon icon={cilCash} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Settlement Record',
        to: '/autoPayStation/settlementRecord',
      },
      {
        component: CNavItem,
        name: 'Cassette & Cashbox',
        to: '/autoPayStation/cassetteAndCashbox',
      },
      {
        component: CNavItem,
        name: 'Reserve Cashbox Record',
        to: '/autoPayStation/reserveCashboxRecord',
      },
      {
        component: CNavItem,
        name: 'Transaction Record',
        to: '/autoPayStation/transactionRecord',
      },
      {
        component: CNavItem,
        name: 'Action Logging',
        to: '/autoPayStation/actionLogging',
      },
      {
        component: CNavItem,
        name: 'Cash Add Record',
        to: '/autoPayStation/cashAndRecord',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Analytics',
    to: '/Analytics',
    icon: <CIcon icon={cibGoogleAnalytics} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Daily Report',
        to: '/analytics/dailyReport',
      },
      {
        component: CNavItem,
        name: 'Monthly Record',
        to: '/analytics/monthlyReport',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Roles & Permission',
    to: '/rolesAndPermission',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Role Setting',
        to: '/rolesAndPermission/roleSetting',
      },
      {
        component: CNavItem,
        name: 'User Management',
        to: '/rolesAndPermission/userManagement',
      },
      {
        component: CNavItem,
        name: 'Employee Management',
        to: 'rolesAndPermission/employeeManagement',
      },
    ],
  },
]

export default _nav
