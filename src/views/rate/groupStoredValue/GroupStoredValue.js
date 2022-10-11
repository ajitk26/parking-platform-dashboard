import React from 'react'
import {
  CTable,
  CPagination,
  CPaginationItem,
  CFormSelect,
  CButton,
  CButtonGroup,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CCard,
  CHeaderText,
  CCardText,
  CCardBody,
} from '@coreui/react'
import Popup from 'reactjs-popup'
const GroupStoredValue = () => {
  const [table, setTable] = React.useState(false)
  const [tabletoggleName, setTabletoggleName] = React.useState(false)

  const operation = () => {
    return (
      <CButtonGroup role="group" aria-label="Basic mixed styles example" size="sm">
        <CButton color="info">Recharge</CButton>
        <CButton color="warning">Transaction Record</CButton>
        <CButton color="danger">Vehicle Management</CButton>
        <CButton color="success">Edit</CButton>
      </CButtonGroup>
    )
  }

  // const tableToggle = React.useEffect(() => {
  //   if (table) {
  //     return (
  //       <div style={{ overflow: 'auto' }}>
  //         <CTable
  //           columns={columns}
  //           items={items}
  //           style={{
  //             width: '80vw',
  //             minWidth: '600px',
  //           }}
  //           hover
  //         />
  //       </div>
  //     )
  //   } else {
  //     return (
  //       <CCard style={{ width: '3rem', backgroundColor: 'white' }}>
  //         <CHeaderText>{items[0].storagename}</CHeaderText>
  //         <CCardText>{items[0].surplusamount}</CCardText>
  //         <h1>Surplus Amount</h1>
  //         <CCardBody>Overdraft Amount: {items[0].overdraftamount}</CCardBody>
  //         <div style={{ width: '99%', borderTop: '1px solid gray' }}>
  //           <CButtonGroup>
  //             <CButton color="success">Recharge</CButton>
  //             <CButton color="info">Vehicle Management</CButton>
  //             <CButton color="warning">Transaction Record</CButton>
  //           </CButtonGroup>
  //         </div>
  //       </CCard>
  //     )
  //   }
  // }, [table])

  const columns = [
    {
      key: 'storagename',
      label: 'Name of Storage Pool',
      _props: { scope: 'col' },
    },
    {
      key: 'surplusamount',
      label: 'Surplus amount',
      _props: { scope: 'col' },
    },
    {
      key: 'overdraftamount',
      label: 'Overdraft amount',
      _props: { scope: 'col' },
    },
    {
      key: 'creationtime',
      label: 'Creation Time',
      _props: { scope: 'col' },
    },
    {
      key: 'founder',
      label: 'Founder',
      _props: { scope: 'col' },
    },
    {
      key: 'operation',
      label: 'Operation',
      _props: { scope: 'col' },
    },
  ]
  const items = [
    {
      storagename: 'c',
      surplusamount: '0 rs',
      overdraftamount: '434 rs',
      creationtime: '23/09/2022 13:12:12',
      founder: 'expark',
      operation: operation(),
      _cellProps: { id: { scope: 'row' } },
    },
  ]
  return (
    <>
      <div className="conf-list">
        <h1>Group Stored Value Management</h1>
        <div
          style={{
            display: 'flex',
            margin: '1rem 0',
            width: '30%',
            justifyContent: 'space-between',
          }}
        >
          <CButton
            color="info"
            shape="rounded-0"
            size="sm"
            style={{ height: '2rem' }}
            onClick={() => {
              setTable(!table)
              setTabletoggleName(!tabletoggleName)
            }}
          >
            {tabletoggleName === true ? 'Switch to Card' : 'Switch to Table'}
          </CButton>
          <CButton color="info" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
            Value Pool Import
          </CButton>
          <Popup
            trigger={
              <CButton color="success" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
                New Storage Pool
              </CButton>
            }
            modal
            nested
          >
            {(close) => (
              <div className="popup-forms">
                <h2 style={{ paddingTop: '1rem' }}>Mall</h2>
                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Storage Pool Name :
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="Enter storage pool name"></CFormInput>
                </CInputGroup>

                <CInputGroup className="form-content">
                  <CInputGroupText component="label" htmlFor="inputGroupSelect01">
                    Overdraft Amount :
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="Enter overdraft Amount"></CFormInput>
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
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            height: 'max-content',
            minHeight: '12vh',
            borderTop: '1px solid grey',
            borderBottom: '1px solid grey',
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '60%',
              minHeight: '5vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Mall</option>
              <option value="1">Mall</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Vehicle Auth Type</option>
              <option value="1">VIP</option>
              <option value="2">Passport Car</option>
              <option value="3">Stored value Car</option>
              <option value="4">Parking</option>
              <option value="5">Free Car</option>
              <option value="6">Parking pool Car</option>
              <option value="7">Hourly Rental Car</option>
            </CFormSelect>
            <CFormSelect aria-label="Default select example" style={{ width: '25%' }}>
              <option>Vehicle Type</option>
              <option value="1">Motorcycle</option>
              <option value="2">Small Car</option>
              <option value="3">Medium Car</option>
              <option value="4">Large Car</option>
              <option value="5">Spare Model 1</option>
              <option value="6">Spare Model 2</option>
            </CFormSelect>
            <CButton color="info" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
              Search
            </CButton>
            <CButton color="secondary" shape="rounded-0" size="sm" style={{ height: '2rem' }}>
              Reset
            </CButton>
          </div>
        </div>
        {table === true ? (
          <div style={{ overflow: 'auto' }}>
            <CTable
              columns={columns}
              items={items}
              style={{
                width: '80vw',
                minWidth: '600px',
              }}
              hover
            />
          </div>
        ) : (
          items.map((item) => {
            return (
              <CCard
                style={{
                  margin: '1rem auto',
                  width: '25vw',
                  minWidth: '25vw',
                  backgroundColor: 'white',
                  display: 'flex',
                  textAlign: 'center',
                  alignContent: 'center',
                  justifyContent: 'space-around',
                }}
                key={item.storagename}
              >
                <CHeaderText>{item.storagename}</CHeaderText>
                <CCardText>
                  <h1>{item.surplusamount}</h1>
                </CCardText>
                <p>Surplus Amount</p>
                <CCardBody>Overdraft Amount: {item.overdraftamount}</CCardBody>
                <div
                  style={{
                    height: '2.5rem',
                    width: '99%',
                    borderTop: '1px solid gray',
                    display: 'flex',
                    justifyContent: 'space-around',
                  }}
                >
                  <CButton color="success" size="sm">
                    Recharge
                  </CButton>
                  <CButton color="info" size="sm">
                    Vehicle Management
                  </CButton>
                  <CButton color="warning" size="sm">
                    Transaction Record
                  </CButton>
                </div>
              </CCard>
            )
          })
        )}
        <CPagination size="sm" align="end" aria-label="Page navigation example">
          <CPaginationItem style={{ color: 'black' }} disabled>
            Previous
          </CPaginationItem>
          <CPaginationItem style={{ color: 'black' }} active="true">
            1
          </CPaginationItem>
          <CPaginationItem style={{ color: 'black' }}>2</CPaginationItem>
          <CPaginationItem style={{ color: 'black' }}>3</CPaginationItem>
          <CPaginationItem style={{ color: 'black' }}>Next</CPaginationItem>
        </CPagination>
      </div>
    </>
  )
}

export default GroupStoredValue
