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
      key: 'opration',
      label: 'Operation',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      id: 1,
      class: 'Mark',
      heading_1: 'Otto',
      heading_2: '@mdo',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 2,
      class: 'Jacob',
      heading_1: 'Thornton',
      heading_2: '@fat',
      _cellProps: { id: { scope: 'row' } },
    },
    {
      id: 3,
      class: 'Larry the Bird',
      heading_2: '@twitter',
      _cellProps: { id: { scope: 'row' }, class: { colSpan: 2 } },
    },
  ]
  return (
    <>
      <div className="root">
        <h1>ParkingList</h1>
        <CTable columns={columns} items={items} />
      </div>
    </>
  )
}

export default ParkingList
