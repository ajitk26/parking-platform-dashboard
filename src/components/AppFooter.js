import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="http://mobbypark.com " target="_blank" rel="noopener noreferrer">
          <b>Awto.Ai</b>
        </a>
        <span className="ms-1">&copy; 2022</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
