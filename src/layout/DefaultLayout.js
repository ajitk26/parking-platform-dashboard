import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />

        <AppSidebar />
        <AppContent />
      </div>
    </div>
    // {/* // <div>
    // //   <AppSidebar />
    // //   <div className="wrapper d-flex flex-column min-vh-100 bg-lightz">
    // //     <AppHeader />
    // //     <div className="body flex-grow-1 px-3">
    // //       <AppContent />
    // //     </div>
    // //     <AppFooter />
    // //   </div>
    // // </div> */}
=======
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
>>>>>>> 44948a20e00bb16fe41d5904d4133440bd19c74c
  )
}

export default DefaultLayout
