import React, { useState } from 'react'
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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from '@coreui/react'

const AdvancedSetting = () => {
  const [visible, setVisible] = useState(false)

  const configModal = () => {
    setVisible(() => {
      return (
        <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
          <CModalHeader>
            <CModalTitle>Modal title</CModalTitle>
          </CModalHeader>
          <CModalBody>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      )
    })
  }
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
            <CFormLabel className="col-sm-4 col-form-label">Delay Sec. At Entrance :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When the time is set to 0, the device will not delay closing ">
                <CFormInput type="text" defaultValue="0s" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Dispensing When Full Space:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="No Dispensing">
                <CFormSelect aria-label="Default select example">
                  <option>No Dispensing</option>
                  <option>Dispensing</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Multi-Database Schema:</CFormLabel>
            <CCol sm={6}>
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
            <CFormLabel className="col-sm-4 col-form-label">Archive Mode:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <CFormSelect aria-label="Default select example">
                  <option>After Entry</option>
                  <option>Instant</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">No Free-Riding :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Allow Entry by Manual :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="After shutdown, the system will not automatically add admission information ">
                <Switch defaultChecked />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Grace Time :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Free stay time allowed after centray payment ">
                <CFormInput type="text" defaultValue="15 Minute" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Booking by Driver :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Ticket Online Mode :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Keep Channel Data in Cache :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Auto-Binding Card :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Financial Statistics :</CFormLabel>
            <CCol sm={6}>
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
            <CFormLabel className="col-sm-4 col-form-label">Full Space Release method:</CFormLabel>
            <CCol sm={6}>
              <CFormInput
                onChange={() => setVisible(configModal)}
                type="text"
                defaultValue="Click to view or set"
                readOnly
                plainText
              />
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">G-S Feature in Sub-Zone:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Communication Flow Limit (MB):
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormInput type="text" defaultValue="28M" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Highest Fee Calc Feature :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>Not Enabled</option>
                  <option>Natural Day</option>
                  <option>24 Hours</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Booking Rate :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormInput type="text" defaultValue="0RM" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Hour Vehicle Charging:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch defaultChecked />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Message Notification :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>Disable</option>
                  <option>SMS</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Delay Sec. of at Exit :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormInput type="text" defaultValue="0s" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Un-Auth. Vehicle Access Method :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>No-Entry</option>
                  <option>Charge</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Save Offline Record :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              IN1 Feature When Full Space :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>Invalid</option>
                  <option>Barrier Control</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Repeat Send Channel Data :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>Disable</option>
                  <option>Enable</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Anti-Passback:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch defaultChecked />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Grace Time Effect When Free:
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Reserved Parking Space :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormInput type="text" defaultValue="0" />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Car Lock Feature :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormSelect aria-label="Default select example">
                  <option>Disable</option>
                  <option>Enable</option>
                  <option>Verify Driver</option>
                </CFormSelect>
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Replenish Park Fee:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Allow Un-Regist Tempo Card:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Non-Tempo Request to Cloud :
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Trans & Fee Statistics:</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">
              Financial Details Statistics:
            </CFormLabel>
            <CCol sm={6}>
              <CTooltip content="Filing mode of the system for on-site vehicles after vehicle mobilization">
                <Switch />
              </CTooltip>
            </CCol>
          </CRow>
          <CRow className="mb-3">
            <CFormLabel className="col-sm-4 col-form-label">Prompt Voice on Day :</CFormLabel>
            <CCol sm={6}>
              <CTooltip content="When turn on, the system will prohibits passing vehicles.">
                <CFormInput type="text" defaultValue="10day" />
              </CTooltip>
            </CCol>
          </CRow>
        </div>
      </div>
    </div>
  )
}

export default AdvancedSetting
