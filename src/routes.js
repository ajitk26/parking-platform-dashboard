import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))

// Configuration
const ParkingList = React.lazy(() => import('./views/configuration/parkingList/ParkingList'))
const ZoneList = React.lazy(() => import('./views/configuration/zoneList/ZoneList'))
const ParkConfiguration = React.lazy(() =>
  import('./views/configuration/parkConfiguration/ParkConfiguration'),
)
//Equipment
const Entrance = React.lazy(() => import('./views/configuration/equipments/entrance/Entrance'))
const Cashier = React.lazy(() => import('./views/configuration/equipments/cashier/Cashier'))

// Vehicle
const VehicleList = React.lazy(() => import('./views/vehicle/vehicleList/VehicleList'))
const BatchDelete = React.lazy(() => import('./views/vehicle/batchDelete/BatchDelete'))
const VehicleOnField = React.lazy(() => import('./views/vehicle/vehicleOnField/VehicleOnField'))
const VehicleAuthType = React.lazy(() => import('./views/vehicle/vehicleAuthType/VehicleAuthType'))
const VehicleType = React.lazy(() => import('./views/vehicle/vehicleType/VehicleType'))
const BlackList = React.lazy(() => import('./views/vehicle/blackList/BlackList'))
const BatchExtension = React.lazy(() => import('./views/vehicle/batchExtension/BatchExtension'))
const BatchAuthorization = React.lazy(() =>
  import('./views/vehicle/batchAuthorization/BatchAuthorization'),
)

//Rates

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  { path: '/configuration', name: 'Configuration', exact: true },
  { path: '/configuration/parkingList', name: 'Parking List', element: ParkingList },
  { path: '/configuration/zoneList', name: 'Zone List', element: ZoneList },
  { path: '/configuration/equipments', name: 'Equipment', exact: true },
  { path: '/configuration/equipments/entrance', name: 'Entrance', element: Entrance },
  { path: '/configuration/equipments/cashier', name: 'Cashier', element: Cashier },

  {
    path: '/configuration/parkConfiguration',
    name: 'Park Configuration',
    element: ParkConfiguration,
  },

  { path: '/vehicle', name: 'Vehicle', exact: true },
  { path: '/vehicle/vehicleList', name: 'Vehicle', element: VehicleList },
  { path: '/vehicle/vehicleOnField', name: 'Vehicle On Field', element: VehicleOnField },
  { path: '/vehicle/batchExtension', name: 'Batch Extension', element: BatchExtension },
  { path: '/vehicle/batchAuthorization', name: 'Batch Authorization', element: BatchAuthorization },
  { path: '/vehicle/batchDelete', name: 'Batch Delete', element: BatchDelete },
  { path: '/vehicle/vehicleAuthType', name: 'Vehicle Auth Type', element: VehicleAuthType },
  { path: '/vehicle/vehicleType', name: 'Vehicle Type', element: VehicleType },
  { path: '/vehicle/blackList', name: 'Black List', element: BlackList },
  { path: '/rate', name: 'Rate', exact: true },
]

export default routes
