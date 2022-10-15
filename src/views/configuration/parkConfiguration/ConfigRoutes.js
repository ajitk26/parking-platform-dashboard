import React from 'react'
const BasicSetting = React.lazy(() => import('./basicSetting/BasicSetting'))
const AdvancedSetting = React.lazy(() => import('./advancedSetting/AdvancedSetting'))

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
]
export default ConfigRoutes
