import React from 'react'
const BasicSetting = React.lazy(() => import('./basicSetting/BasicSetting'))
const AdvancedSetting = React.lazy(() => import('./advancedSetting/AdvancedSetting'))
const AutoPayStation = React.lazy(() => import('./autoPayStation/AutoPayStation'))
const Cashier = React.lazy(() => import('./cashier/Cashier'))
const Channel = React.lazy(() => import('./channel/Channel'))
const Controller = React.lazy(() => import('./controller/Controller'))
const Discounter = React.lazy(() => import('./discounter/Discounter'))
const Gateway = React.lazy(() => import('./gateway/Gateway'))
const Handheld = React.lazy(() => import('./handheld/HandHeld'))

const ConfigRoutes = [
  {
    path: '/basicSetting',
    name: 'BasicSetting',
    element: BasicSetting,
  },
  {
    path: '/advancedSetting',
    name: 'Advanced Setting',
    element: AdvancedSetting,
  },
  {
    path: '/autoPayStation',
    name: 'AutoPay Station',
    element: AutoPayStation,
  },
  {
    path: '/cashier',
    name: 'Cashier',
    element: Cashier,
  },
  {
    path: '/channel',
    name: 'Channel',
    element: Channel,
  },
  {
    path: '/controller',
    name: 'Controller',
    element: Controller,
  },
  {
    path: '/discounter',
    name: 'Discounter',
    element: Discounter,
  },
  {
    path: '/gateway',
    name: 'Gateway',
    element: Gateway,
  },
  {
    path: '/handheld',
    name: 'Handheld',
    element: Handheld,
  },
]
export default ConfigRoutes
