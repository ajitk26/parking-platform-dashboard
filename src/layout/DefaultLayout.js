import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 w-100">
        <AppHeader />

        <AppSidebar />
        <div className="body flex-grow-1 w-100">
          <AppContent />
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
