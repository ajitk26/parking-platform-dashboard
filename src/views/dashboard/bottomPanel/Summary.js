import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Box, Divider } from '@mui/material'
import { List, ListItem, ListItemText } from '@mui/material'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import { CContainer, CRow, CCol } from '@coreui/react'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={1.3}>
        <Item>group</Item>
      </Grid>
    </React.Fragment>
  )
}

export default function Summary() {
  return (
    <>
      <div className="summaryTitlePanel">
        <div>Summary</div>
        <div className="supportedTitle">Supported</div>

        <div className="recentTitle">Recent consumption</div>
      </div>

      <div className="bottomPanel">
        <CContainer className="summaryContainer">
          <CRow sm={{ cols: 3, gutter: 3 }} lg={{ cols: 3, gutter: 4 }}>
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
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>3</div>
                <div>Non-Tempo</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>0</div>
                <div>Group-Space</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>0</div>
                <div>G-S Vehicle</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>0</div>
                <div>Merchant</div>
              </div>
            </CCol>
            <CCol>
              <div className="boxItem"></div>
              <div className="p-5 border bg-light h-100">
                <div style={{ color: 'blue', fontSize: 30, marginLeft: 18 }}>0</div>
                <div>Mobile User</div>
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

        <List conatainer component="nav">
          <ListItem button divider>
            <ListItemText primary="Cash" />
            <ListItemText primary="Enabled" sx={{ color: 'blue', paddingLeft: 17 }} />
          </ListItem>
        </List>
        <List component="nav" label="Recent consumption">
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
    </>
  )
}
