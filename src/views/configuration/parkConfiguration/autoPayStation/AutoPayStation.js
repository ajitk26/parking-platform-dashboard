import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Button } from '@mui/material'
import { CForm, CCol, CRow, CFormInput, CFormLabel, CFormSelect } from '@coreui/react'
function AutoPayStation(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

AutoPayStation.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <div className="bottomPanelContainer">
        <Box sx={{ width: '100%', marginTop: '12px' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Create APS" {...a11yProps(0)} />
              <Tab label="Create APS200" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <AutoPayStation value={value} index={0}>
            <h6 style={{ fontWeight: 600 }}>Basic Info</h6>
            <div className="configAutoPay">
              <div>
                <CRow className="mb-4">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    APS Name:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
                <CRow className="mb-4">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    WS Address:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput defaultValue="http://ws.254.233.106:81/sapi" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    Maintainer Tel.:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    User Tel.:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
              </div>
              <div>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    Amount Symbol:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    Maintainer Email:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
                <CRow className="mb-4">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    User Email:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-4 col-form-label" style={{ fontWeight: 500 }}>
                    Email:
                  </CFormLabel>
                  <CCol md={8}>
                    <CFormInput required />
                  </CCol>
                </CRow>
              </div>
            </div>
          </AutoPayStation>
          <AutoPayStation value={value} index={1}>
            <h6 style={{ fontWeight: 600 }}>APS200 Basic Info</h6>
            <div className="configAutoPay" style={{ marginTop: 20 }}>
              <div>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-5 col-form-label">Device number :</CFormLabel>
                  <CCol sm={6}>
                    <CFormSelect aria-label="Default select example">
                      <option></option>
                    </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-5 col-form-label" style={{ fontWeight: 500 }}>
                    Page return time :
                  </CFormLabel>
                  <CCol md={6}>
                    <CFormInput defaultValue="120" />
                  </CCol>
                </CRow>
              </div>
              <div>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-5 col-form-label">Device number :</CFormLabel>
                  <CCol sm={6}>
                    <CFormInput type="text" />
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-5 col-form-label" style={{ fontWeight: 500 }}>
                    Page return time :
                  </CFormLabel>
                  <CCol sm={6}>
                    <CFormSelect aria-label="Default select example">
                      <option>Yes</option>
                      <option>No</option>
                    </CFormSelect>
                  </CCol>
                </CRow>
              </div>
            </div>
          </AutoPayStation>
        </Box>
      </div>
    </>
  )
}
