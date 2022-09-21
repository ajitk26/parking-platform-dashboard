import React from 'react'
import { CTable } from '@coreui/react'
const ParkingList = () => {
  const columns = [
    {
      key: 'id',
      label: 'No.',
      _props: { scope: 'col' },
    },
    {
      key: 'parkingName',
      label: 'Parking Name',
      _props: { scope: 'col' },
    },
    {
      key: 'systemType',
      label: 'System Type',
      _props: { scope: 'col' },
    },
    {
      key: 'account',
      label: 'Account',
      _props: { scope: 'col' },
    },
    {
      key: 'lastonline',
      label: 'Last Time Online',
      _props: { scope: 'col' },
    },
    {
      key: 'network',
      label: 'Network',
      _props: { scope: 'col' },
    },
    {
      key: 'operation',
      label: 'Operation',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      parkingName: 'Mark',
      systemType: 'Otto',
      account: '@mdo',
      lastonline: '10:00 AM',
      network: 'gtpl',
      operation: 'ok',
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="parking-list">
        <h1>ParkingList</h1>
        <CTable columns={columns} items={items} />
      </div>
    </>
  )
}

export default ParkingList
