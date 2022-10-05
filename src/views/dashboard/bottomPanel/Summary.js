import * as React from 'react'
import { List, ListItem, ListItemText } from '@mui/material'
import { CContainer, CRow, CCol } from '@coreui/react'

export default function Summary() {
  return (
    <>
      <div className="bottomPanel">
        <CContainer className="summaryContainer">
          <CRow sm={{ cols: 3, gutter: 2 }} lg={{ cols: 3, gutter: 2 }}>
            <CCol>
              <div className="boxItem">
                <div className="p-5  h-100 border bg-light gridItem">
                  <div style={{ color: 'blue', fontSize: 30, marginLeft: 10 }}>1</div>
                  <div>Zone</div>
                </div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>2</div>
                <div>Controller</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>0</div>
                <div>Watcher</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="py-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 68 }}>3</div>
                <div style={{ marginLeft: 40 }}>Non-Tempo</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="py-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 68 }}>0</div>
                <div style={{ marginLeft: 40 }}>Group-Space</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="py-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 68 }}>0</div>
                <div style={{ marginLeft: 40 }}>G-S Vehicle</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="py-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 68 }}>0</div>
                <div style={{ marginLeft: 40 }}>Merchant</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="py-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 68 }}>0</div>
                <div style={{ marginLeft: 40 }}>Mobile User</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>1</div>
                <div>Black List</div>
              </div>
            </CCol>
          </CRow>
        </CContainer>
        <div>
          <List conatainer component="nav">
            <div>Supported</div>
            <ListItem button divider>
              <ListItemText primary="Cash" />
              <ListItemText primary="Enabled" sx={{ color: 'blue', paddingLeft: 17 }} />
            </ListItem>
          </List>
        </div>
        <div>
          <List component="nav" label="Recent consumption">
            <div>Recent consumption</div>
            <ListItem button divider>
              <ListItemText primary="RM0.00 " />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="RM0.00" />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>

            <ListItem button divider>
              <ListItemText primary="RM0.00" />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="RM0.00" />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="RM0.00" />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="RM0.00" />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>
            <ListItem button divider>
              <ListItemText primary="RM0.00" />
              <ListItemText primary="01/04/2" sx={{ paddingLeft: 17 }} />
            </ListItem>
          </List>
        </div>
      </div>
    </>
  )
}
