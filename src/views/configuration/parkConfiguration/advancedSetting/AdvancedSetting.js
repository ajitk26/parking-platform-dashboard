import React from 'react'
import { Button, Divider, Switch } from '@mui/material'
import {
  CRow,
  CFormLabel,
  CCol,
  CFormInput,
  CFormSelect,
  CTooltip,
  CFormSwitch,
  CContainer,
} from '@coreui/react'
const AdvancedSetting = () => {
  return (
    <div>
      <div style={{ marginBottom: 13 }}>
        <Button variant="contained">Submit</Button>
      </div>
      <div className="configFactoryReset">
        <h5>Advanced Setting</h5>
        <Button variant="contained">Factory Reset</Button>
      </div>
      <Divider />
      <div className="formContainer">
        <div>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Language :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Language setting of toll terminal">
                <CFormSelect aria-label="Default select example">
                  <option>English</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">G-S Full-Passing :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Automatic release will be charged, no access will be prohibited">
                <CFormSelect aria-label="Default select example">
                  <option>Confirm</option>
                  <option>Automatic</option>
                  <option>No-Entry</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Expired Vehicle Passsing:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Toll Free required toll, no access will not be allowed">
                <CFormSelect aria-label="Default select example">
                  <option>No entry</option>
                  <option>Charge</option>
                  <option>Confirm</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Count Non-Tempo qty. as Tempo:
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Disable this option and do not count parking space">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Check Sum With Unconfirmed :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="The system will not accumulate unconfirmed charges after shutdown">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Charges Rate If Error Happened :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When closing the supplementary admission information, the amount of fees charged for the entry information vehicle exit is not found">
                <CFormInput type="text" defaultValue="0RM" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Charges Rate Per Entry :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Amount to be prepaid for entry">
                <CFormInput type="text" defaultValue="0RM" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Auto-Open Barrier If No Need Pay :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="After shutdown, the system will not automatically release the charge of 0 ruppees">
                <Switch defaultChecked />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Delay Sec. At Entrance :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When the time is set to 0, the device will not delay closing ">
                <CFormInput type="text" defaultValue="0s" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Dispensing When Full Space:</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="No Dispensing">
                <CFormSelect aria-label="Default select example">
                  <option>No Dispensing</option>
                  <option>Dispensing</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Multi-Database Schema:</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="Non technical personnel, please modify carefully">
                <CFormSelect aria-label="Default select example">
                  <option>Default</option>
                  <option>Single Database</option>
                  <option>Double Database</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Archive Mode:</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <CFormSelect aria-label="Default select example">
                  <option>After Entry</option>
                  <option>Instant</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">No Free-Riding :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Allow Entry by Manual :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="After shutdown, the system will not automatically add admission information ">
                <Switch defaultChecked />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Grace Time :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="Free stay time allowed after centray payment ">
                <CFormInput type="text" defaultValue="15 Minute" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Booking by Driver :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Ticket Online Mode :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">
              Keep Channel Data in Cache :
            </CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-2 col-form-label">Auto-Binding Card :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Financial Statistics :</CFormLabel>
            <CCol sm={3}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Traffic Statistics :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Paper Ticket Registration:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormInput type="text" defaultValue="NaN Minute" />
              </CTooltip>
            </CCol>
          </CRow>
        </div>
        <div>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Parking Space Analysis Feature:
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>By Vehicle Type</option>
                  <option>By Vehicle Detector</option>
                  <option>By Vehicle Auth Type</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Anti-Passback:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSetting
