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
const ElectronicInvoice = React.lazy(() =>
  import('./views/rate/electronicInvoice/ElectronicInvoice'),
)
const GroupStoredValue = React.lazy(() => import('./views/rate/groupStoredValue/GroupStoredValue'))
const Holiday = React.lazy(() => import('./views/rate/holiday/Holiday'))
const PackageRules = React.lazy(() => import('./views/rate/packageRules/PackageRules'))
const RateList = React.lazy(() => import('./views/rate/rateList/RateList'))
const RuleManagement = React.lazy(() => import('./views/rate/ruleManagement/RuleManagement'))

//Parking Space

const CspaceQtySetting = React.lazy(() =>
  import('./views/parkingSpace/cSpaceQtySetting/CspaceQtySetting'),
)
const GroupSpaceList = React.lazy(() =>
  import('./views/parkingSpace/groupSpaceList/GroupSpaceList'),
)
const GroupSpaceVehicle = React.lazy(() =>
  import('./views/parkingSpace/groupSpaceVehicle/GroupSpaceVehicle'),
)

//Record
const EntranceRecord = React.lazy(() => import('./views/record/entranceRecord/EntranceRecord'))
const ExitRecord = React.lazy(() => import('./views/record/exitRecord/ExitRecord'))
const TransactionRecord = React.lazy(() =>
  import('./views/record/transactionRecord/TransactionRecord'),
)
const OnSiteVehicle = React.lazy(() => import('./views/record/onSiteVehicle/OnSiteVehicle'))
const MobilePaymentOrder = React.lazy(() =>
  import('./views/record/mobilePaymentOrder/MobilePaymentOrder'),
)

const ExtensionRecord = React.lazy(() => import('./views/record/extensionRecord/ExtensionRecord'))
const VehicleModifyRecord = React.lazy(() =>
  import('./views/record/vehicleModifyRecord/VehicleModifyRecord'),
)
const FlashPaymentRecord = React.lazy(() =>
  import('./views/record/flashPaymentRecord/FlashPaymentRecord'),
)
const BarrierOpenmRecord = React.lazy(() =>
  import('./views/record/barrierOpen(M)Record/BarrierOpenmRecord'),
)
const ForceExitRecord = React.lazy(() => import('./views/record/forceExitRecord/ForceExitRecord'))

const CspaceExtensionRecord = React.lazy(() =>
  import('./views/record/cSpaceExtensionRecord/CspaceExtensionRecord'),
)
const TransactionRecordNo = React.lazy(() =>
  import('./views/record/transactionRecordNo/TransactionRecordNo'),
)
const CashierRevenueRecord = React.lazy(() =>
  import('./views/record/cashierRevenueRecord/CashierRevenueRecord'),
)
const BarrierOptionrRecord = React.lazy(() =>
  import('./views/record/barrierOpen(R)Record/BarrierOpenrRecord'),
)
const PrepayRecord = React.lazy(() => import('./views/record/prepayRecord/PrepayRecord'))

//AutoPay Station
const ActionLogging = React.lazy(() => import('./views/autoPayStation/actionLogging/ActionLogging'))
const CashAddRecord = React.lazy(() => import('./views/autoPayStation/cashAddRecord/CashAddRecord'))
const CassetteAndCashbox = React.lazy(() =>
  import('./views/autoPayStation/cassetteAndCashbox/CassetteAndCashbox'),
)
const ReserveCashboxRecord = React.lazy(() =>
  import('./views/autoPayStation/reserveCashboxRecord/ReserveCashboxRecord'),
)
const SettlementRecord = React.lazy(() =>
  import('./views/autoPayStation/settlementRecord/SettlementRecord'),
)
const TransactionpayRecord = React.lazy(() =>
  import('./views/autoPayStation/transactionRecord/TransactionpayRecord'),
)

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },

  //Configuration
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
  //Vehicle

  { path: '/vehicle', name: 'Vehicle', exact: true },
  { path: '/vehicle/vehicleList', name: 'Vehicle List', element: VehicleList },
  { path: '/vehicle/vehicleOnField', name: 'Vehicle On Field', element: VehicleOnField },
  { path: '/vehicle/batchExtension', name: 'Batch Extension', element: BatchExtension },
  { path: '/vehicle/batchAuthorization', name: 'Batch Authorization', element: BatchAuthorization },
  { path: '/vehicle/batchDelete', name: 'Batch Delete', element: BatchDelete },
  { path: '/vehicle/vehicleAuthType', name: 'Vehicle Auth Type', element: VehicleAuthType },
  { path: '/vehicle/vehicleType', name: 'Vehicle Type', element: VehicleType },
  { path: '/vehicle/blackList', name: 'Black List', element: BlackList },

  //Rate
  { path: '/rate', name: 'Rate', exact: true },
  { path: '/rate/rateList', name: 'Rate List', element: RateList },
  { path: '/rate/electronicInvoice', name: 'Electronic Invoice No.', element: ElectronicInvoice },
  { path: '/rate/packageRules', name: 'Package Rules No.', element: PackageRules },
  {
    path: '/rate/groupStoredValue',
    name: 'Group Stored Value Management',
    element: GroupStoredValue,
  },
  { path: '/rate/holiday', name: 'Holiday', element: Holiday },
  { path: '/rate/ruleManagement', name: 'Rule Management No.', element: RuleManagement },

  //Parking Space
  { path: '/parkingSpace', name: 'Parking Space', exact: true },
  { path: '/parkingSpace/groupSpaceList', name: 'Group-space list', element: GroupSpaceList },
  {
    path: '/parkingSpace/groupSpaceVehicle',
    name: 'Group-space vehicle',
    element: GroupSpaceVehicle,
  },
  {
    path: '/parkingSpace/cSpaceQtySetting',
    name: 'C-space qty setting',
    element: CspaceQtySetting,
  },
  //Record
  { path: '/record', name: 'Record', exact: true },
  { path: '/record/entranceRecord', name: 'Entrance Record', element: EntranceRecord },
  { path: '/record/exitRecord', name: 'Exit Record', element: ExitRecord },
  { path: '/record/transactionRecord', name: 'Transaction Record', element: TransactionRecord },
  { path: '/record/onSiteVehicle', name: 'On-site vehicle', element: OnSiteVehicle },
  { path: '/record/mobilePaymentOrder', name: 'Mobile payment order', element: MobilePaymentOrder },
  { path: '/record/extensionRecord', name: 'Extension Record', element: ExtensionRecord },
  {
    path: '/record/vehicleModifyRecord',
    name: 'Vehicle modify record',
    element: VehicleModifyRecord,
  },
  { path: '/record/flashPaymentRecord', name: 'Flash payment Record', element: FlashPaymentRecord },
  {
    path: '/record/barrierOpen(M)Record',
    name: 'Barrier open(M) record ',
    element: BarrierOpenmRecord,
  },
  { path: '/record/forceExitRecord', name: 'Force-exit record', element: ForceExitRecord },
  {
    path: '/record/cSpaceExtensionRecord',
    name: 'C-space extension record',
    element: CspaceExtensionRecord,
  },
  {
    path: '/record/transactionRecordNo',
    name: 'Transaction record no.',
    element: TransactionRecordNo,
  },
  {
    path: '/record/cashierRevenueRecord',
    name: 'Cashier revenue record',
    element: CashierRevenueRecord,
  },
  {
    path: '/record/barrierOpen(R)Record',
    name: 'Barrier-open(R)-record',
    element: BarrierOptionrRecord,
  },
  { path: '/record/prepayRecord', name: 'Prepay-Record', element: PrepayRecord },

  //AutoPay Station

  { path: '/autoPayStation', name: 'Autopay-station', exact: true },
  { path: '/autoPayStation/actionLogging', name: 'Action-logging', element: ActionLogging },
  { path: '/autoPayStation/cashAddRecord', name: 'Cash-add-record', element: CashAddRecord },
  {
    path: '/autoPayStation/cassetteAndCashbox',
    name: 'Cassette & cashbox',
    element: CassetteAndCashbox,
  },
  {
    path: '/autoPayStation/reserveCashboxRecord',
    name: 'Reserver-cashbox-record',
    element: ReserveCashboxRecord,
  },
  {
    path: '/autoPayStation/settlementRecord',
    name: 'Settlement-record',
    element: SettlementRecord,
  },
  {
    path: '/autoPayStation/transactionRecord',
    name: 'Transaction-record',
    element: TransactionpayRecord,
  },
]

export default routes
