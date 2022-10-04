import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormRange,
  CFormCheck,
  CFormTextarea,
} from '@coreui/react'
import React from 'react'
import Popup from 'reactjs-popup'

const RuleManagement = () => {
  const prefrentialrules = [
    {
      rulename: 'test',
      prefrentialcategory: 'discount',
      prefrentialvalue: 'the actual charge for parking is 80%',
      modifier: 'expark admin',
      modifytime: '3-/09/2022 13:12:12',
      ruledescription: '-',
    },
  ]
  const monthlyticketextension = [
    {
      rulename: 'test',
      prefrentialcategory: 'discount',
      prefrentialvalue: 'the actual charge for parking is 80%',
      modifier: 'expark admin',
      modifytime: '3-/09/2022 13:12:12',
      ruledescription: '-',
    },
  ]
  const storedvaluevehicle = [
    {
      rulename: 'test',
      prefrentialcategory: 'discount',
      prefrentialvalue: 'the actual charge for parking is 80%',
      modifier: 'expark admin',
      modifytime: '3-/09/2022 13:12:12',
      ruledescription: '-',
    },
  ]
  const multivehicleextension = [
    {
      rulename: 'test',
      prefrentialcategory: 'discount',
      prefrentialvalue: 'the actual charge for parking is 80%',
      modifier: 'expark admin',
      modifytime: '3-/09/2022 13:12:12',
      ruledescription: '-',
    },
  ]

  return (
    <>
      <div className="conf-list">
        <h1>Rule Management</h1>
        <div>
          <CFormSelect style={{ width: '10vw' }}>
            <option value="1">Mall</option>
          </CFormSelect>
        </div>
        <div
          style={{
            width: '60vw',
            display: 'flex',
            flexDirection: 'column',
            flexWrp: 'warp',
          }}
        >
          {prefrentialrules.map((rule) => {
            return (
              <CCard key={rule.rulename} style={{ width: '50%', margin: '1rem 0' }}>
                <CCardHeader style={{ backgroundColor: 'blue', color: 'white' }}>
                  Prefential rules for advance Payments
                </CCardHeader>
                <CCardBody>
                  <p>Rule Name: {rule.rulename}</p>
                  <p>Rule Name: {rule.prefrentialcategory}</p>
                  <p>Rule Name: {rule.prefrentialvalue}</p>
                  <p>Rule Name: {rule.modifier}</p>
                  <p>Rule Name: {rule.modifytime}</p>
                  <p>Rule Name: {rule.ruledescription}</p>
                </CCardBody>
                <Popup
                  trigger={
                    <CButton color="info" id="1">
                      Create Rule
                    </CButton>
                  }
                  nested
                  modal
                >
                  {(close) => (
                    <div className="popup-forms">
                      <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule Name :
                        </CInputGroupText>
                        <CFormInput type="text" placeholder="Rule name"></CFormInput>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Discount Type :
                        </CInputGroupText>
                        <CFormSelect>
                          <option value="1">By Discount</option>
                        </CFormSelect>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Discount value :
                        </CInputGroupText>
                        <CFormRange
                          min="5%"
                          max="95%"
                          defaultValue="80%"
                          id="customRange2"
                          style={{
                            width: '70%',
                            height: '100%',
                            padding: '0.5rem 3rem',
                            border: '1px solid lightgray',
                            borderRadius: '0 5px 5px 0',
                          }}
                        />
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule Description :
                        </CInputGroupText>
                        <CFormTextarea type="text" placeholder="Rule description"></CFormTextarea>
                      </CInputGroup>
                      <div
                        style={{
                          width: '30%',
                          height: '2rem',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                        <CButton color="success" size="sm">
                          Submit
                        </CButton>
                        <CButton color="danger" size="sm" onClick={close}>
                          Close
                        </CButton>
                      </div>
                    </div>
                  )}
                </Popup>
              </CCard>
            )
          })}
          {monthlyticketextension.map((rule) => {
            return (
              <CCard key={rule.rulename} style={{ width: '50%', margin: '1rem 0' }}>
                <CCardHeader style={{ backgroundColor: 'green', color: 'white' }}>
                  Monthly ticket Extension Rules
                </CCardHeader>
                <CCardBody>
                  <p>Rule Name: {rule.rulename}</p>
                  <p>Rule Name: {rule.prefrentialcategory}</p>
                  <p>Rule Name: {rule.prefrentialvalue}</p>
                  <p>Rule Name: {rule.modifier}</p>
                  <p>Rule Name: {rule.modifytime}</p>
                  <p>Rule Name: {rule.ruledescription}</p>
                </CCardBody>
                <Popup
                  trigger={
                    <CButton color="info" id="1">
                      Create Rule
                    </CButton>
                  }
                  nested
                  modal
                >
                  {(close) => (
                    <div className="popup-forms">
                      <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Vehicle Type :
                        </CInputGroupText>
                        <CFormSelect
                          id="inputGroupSelect03"
                          aria-label="Example select with button addon"
                        >
                          <option value="1">Motorcycle</option>
                          <option value="2">Small Car</option>
                          <option value="3">Medium Car</option>
                          <option value="4">Large Car</option>
                          <option value="5">Spare Model 1</option>
                          <option value="6">Spare Model 2</option>
                        </CFormSelect>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Extension Rate :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Enable self service extension :
                        </CInputGroupText>
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault2"
                          label="Enable"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault1"
                          label="Not allowed"
                        />
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Notify Owner :
                        </CInputGroupText>
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault3"
                          label="Enable"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault4"
                          label="No notification"
                        />
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Do you want to start paying parking fee :
                        </CInputGroupText>
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault5"
                          label="Enable"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault5"
                          id="flexRadioDefault6"
                          label="No"
                        />
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Maximum delaye Months :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Extension Months to be confirmed by administrator :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Phone No. of Management personnel :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule description :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <div
                        style={{
                          width: '30%',
                          height: '2rem',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                        <CButton color="success" size="sm">
                          Submit
                        </CButton>
                        <CButton color="danger" size="sm" onClick={close}>
                          Close
                        </CButton>
                      </div>
                    </div>
                  )}
                </Popup>
              </CCard>
            )
          })}
          {storedvaluevehicle.map((rule) => {
            return (
              <CCard key={rule.rulename} style={{ width: '50%', margin: '1rem 0' }}>
                <CCardHeader style={{ backgroundColor: 'black', color: 'white' }}>
                  Charging rules for stored value vehicles
                </CCardHeader>
                <CCardBody>
                  <p>Rule Name: {rule.rulename}</p>
                  <p>Rule Name: {rule.prefrentialcategory}</p>
                  <p>Rule Name: {rule.prefrentialvalue}</p>
                  <p>Rule Name: {rule.modifier}</p>
                  <p>Rule Name: {rule.modifytime}</p>
                  <p>Rule Name: {rule.ruledescription}</p>
                </CCardBody>
                <Popup
                  trigger={
                    <CButton color="info" id="1">
                      Create Rule
                    </CButton>
                  }
                  nested
                  modal
                >
                  {(close) => (
                    <div className="popup-forms">
                      <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule Name :
                        </CInputGroupText>
                        <CFormInput type="text" placeholder="Rule name"></CFormInput>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Recharge Discount :
                        </CInputGroupText>
                        <CFormRange
                          min="5%"
                          max="95%"
                          defaultValue="80%"
                          id="customRange2"
                          style={{
                            width: '70%',
                            height: '100%',
                            padding: '0.5rem 3rem',
                            border: '1px solid lightgray',
                            borderRadius: '0 5px 5px 0',
                          }}
                        />
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Enable self Recharge :
                        </CInputGroupText>
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault2"
                          label="Enable"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault1"
                          label="Not allowed"
                        />
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Notify Owner :
                        </CInputGroupText>
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault3"
                          label="Enable"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault2"
                          id="flexRadioDefault4"
                          label="No notification"
                        />
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Maximum Recharge amount :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Recharge amount to be confirmed by administrator :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Phone No. of Management personnel :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule description :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <div
                        style={{
                          width: '30%',
                          height: '2rem',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                        <CButton color="success" size="sm">
                          Submit
                        </CButton>
                        <CButton color="danger" size="sm" onClick={close}>
                          Close
                        </CButton>
                      </div>
                    </div>
                  )}
                </Popup>
              </CCard>
            )
          })}
          {multivehicleextension.map((rule) => {
            return (
              <CCard key={rule.rulename} style={{ width: '50%', margin: '1rem 0' }}>
                <CCardHeader style={{ backgroundColor: 'red', color: 'white' }}>
                  Multi vehicle self service extension rules
                </CCardHeader>
                <CCardBody>
                  <p>Rule Name: {rule.rulename}</p>
                  <p>Rule Name: {rule.prefrentialcategory}</p>
                  <p>Rule Name: {rule.prefrentialvalue}</p>
                  <p>Rule Name: {rule.modifier}</p>
                  <p>Rule Name: {rule.modifytime}</p>
                  <p>Rule Name: {rule.ruledescription}</p>
                </CCardBody>
                <Popup
                  trigger={
                    <CButton color="info" id="1">
                      Create Rule
                    </CButton>
                  }
                  nested
                  modal
                >
                  {(close) => (
                    <div className="popup-forms">
                      <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule Name :
                        </CInputGroupText>
                        <CFormSelect
                          id="inputGroupSelect03"
                          aria-label="Example select with button addon"
                        >
                          <option value="1">Motorcycle</option>
                          <option value="2">Small Car</option>
                          <option value="3">Medium Car</option>
                          <option value="4">Large Car</option>
                          <option value="5">Spare Model 1</option>
                          <option value="6">Spare Model 2</option>
                        </CFormSelect>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Extension Rate :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Enable self service extension :
                        </CInputGroupText>
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault2"
                          label="Enable"
                          defaultChecked
                        />
                        <CFormCheck
                          type="radio"
                          name="flexRadioDefault1"
                          id="flexRadioDefault1"
                          label="Not allowed"
                        />
                      </CInputGroup>

                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Maximum delaye Months :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Extension Months to be confirmed by administrator :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Phone No. of Management personnel :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <CInputGroup className="form-content">
                        <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                          Rule description :
                        </CInputGroupText>
                        <CFormInput></CFormInput>
                      </CInputGroup>
                      <div
                        style={{
                          width: '30%',
                          height: '2rem',
                          margin: 'auto',
                          display: 'flex',
                          justifyContent: 'space-around',
                        }}
                      >
                        <CButton color="success" size="sm">
                          Submit
                        </CButton>
                        <CButton color="danger" size="sm" onClick={close}>
                          Close
                        </CButton>
                      </div>
                    </div>
                  )}
                </Popup>
              </CCard>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default RuleManagement
