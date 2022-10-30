import React from 'react'
import { AppContent, AppSidebar, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <>
      <div className="wrapper d-flex flex-column min-vh-100 ">
        <AppHeader />

        <div className="body flex-grow-1 px-3  ">
          <div className="test">
            <AppSidebar />

            <AppContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
