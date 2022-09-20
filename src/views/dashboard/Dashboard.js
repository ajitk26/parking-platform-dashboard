import React from 'react'
import './dashboard.css'

const Dashboard = () => {
  return (
    <>
      <div className="root">
        <div className="pane-1">
          <div className="p1-section-1">
            <div className="p1-section-1-1">
              <div className="p1-section-1-1-1">
                <p>Summary Analytics</p>
                <p>Traffic flow Analytics</p>
              </div>
              <div className="p1-section-1-1-2"></div>
            </div>
            <div className="p1-section-1-2">
              <div className="p1-section-1-2-1">
                <div className="p1-section-1-2-1-1">
                  <p>To do list</p>
                </div>
              </div>
              <div className="p1-section-1-2-2">
                <div className="p1-section-1-2-2-1">
                  <p>Vehicle on Feild</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p1-section-2"></div>
          <div className="p1-section-3">
            <div className="p1-section-1-1-1">
              <p>Summary</p>
              <p>Payment</p>
              <p>Vehicle Type</p>
              <p>Vehicle Auth</p>
            </div>
          </div>
        </div>
        <div className="pane-2">
          <div className="p2-section-1">
            <div className="p1-section-1-1-1">
              <p>Bulletin</p>
              <p>Solution</p>
              <p>Order</p>
            </div>
          </div>
          <div className="p2-section-2"></div>
          <div className="p2-section-3"></div>
          <div className="p2-section-4"></div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
