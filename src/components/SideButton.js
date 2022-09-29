import React from 'react'
import { CButtonGroup, CButton, CTooltip } from '@coreui/react'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import CreateIcon from '@mui/icons-material/Create'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VehicleList from 'src/views/vehicle/vehicleList/VehicleList'

const SideButton = () => {
  return (
    <div>
      <CButtonGroup
        role="group"
        aria-label="Basic mixed styles example buttonelem"
        className="sidebutton"
      >
        <CTooltip content="New vehicle" placement="top">
          <CButton color="success">{<DriveEtaIcon />}</CButton>
        </CTooltip>
        <CTooltip content="Vehicle List" placement="top">
          <CButton color="primary">{<CreateIcon />}</CButton>
        </CTooltip>
        <CTooltip content="Vehicle on field" placement="top">
          <CButton color="warning">{<DashboardIcon />}</CButton>
        </CTooltip>
        <CTooltip content="Transaction record" placement="top">
          <CButton color="danger">{<FormatListBulletedIcon />}</CButton>
        </CTooltip>
      </CButtonGroup>
    </div>
  )
}

export default SideButton
