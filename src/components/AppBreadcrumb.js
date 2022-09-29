import React from 'react'
import { useLocation } from 'react-router-dom'
import { CBreadcrumb, CBreadcrumbItem } from '@coreui/react'
import SideButton from '../components/SideButton'

import routes from '../routes'

const AppBreadcrumb = () => {
  const currentLocation = useLocation().pathname

  const getRouteName = (pathname, routes) => {
    const currentRoute = routes.find((route) => route.path === pathname)
    return currentRoute ? currentRoute.name : false
  }

  const getBreadcrumbs = (location) => {
    const breadcrumbs = []
    location.split('/').reduce((prev, curr, index, array) => {
      const currentPathname = `${prev}/${curr}`
      const routeName = getRouteName(currentPathname, routes)
      routeName &&
        breadcrumbs.push({
          pathname: currentPathname,
          name: routeName,
          active: index + 1 === array.length ? true : false,
        })
      return currentPathname
    })
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs(currentLocation)

  return (
    <>
      <SideButton />
      {/* <CButtonGroup
        role="group"
        aria-label="Basic mixed styles example buttonelem"
        className="sidebutton"
      >
        <CTooltip content="New vehicle" placement="top">
          <CButton color="success">{<DriveEtaIcon />}</CButton>
        </CTooltip>
        <CTooltip content="Vehicle List" placement="top">
          <CButton color="primary">{<CreateIcon />}</CButton>
        </CTooltip>
        <CTooltip content="Vehicle on field" placement="top">
          <CButton color="warning">{<DashboardIcon />}</CButton>
        </CTooltip>
        <CTooltip content="Transaction record" placement="top">
          <CButton color="danger">{<FormatListBulletedIcon />}</CButton>
        </CTooltip>
      </CButtonGroup> */}
      <CBreadcrumb className="m-0 ms-2 ">
        <CBreadcrumbItem href="/">Home</CBreadcrumbItem>
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <CBreadcrumbItem
              {...(breadcrumb.active ? { active: true } : { href: breadcrumb.pathname })}
              key={index}
            >
              {breadcrumb.name}
            </CBreadcrumbItem>
          )
        })}
      </CBreadcrumb>
    </>
  )
}

export default React.memo(AppBreadcrumb)
