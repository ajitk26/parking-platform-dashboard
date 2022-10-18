import React from 'react'
import SimpleBar from 'simplebar-react'
import navigation from '../parkConfiguration/ConfigNav'
import { AppSidebarNav } from 'src/components/AppSidebarNav'
import { CSidebar, CSidebarNav } from '@coreui/react'

const ConfigSidebar = () => {
  return (
    <div>
      <CSidebar>
        <CSidebarNav style={{ fontWeight: 600 }}>
          <SimpleBar>
            <AppSidebarNav className="sideNav" items={navigation} />
          </SimpleBar>
        </CSidebarNav>
      </CSidebar>
    </div>
  )
}

export default ConfigSidebar
