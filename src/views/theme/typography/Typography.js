import React from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsLink } from 'src/components'

const Typography = () => {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Upload a file</h1>
      <div className="mb-3">
      <input className="form-control" type="file"/>
</div>
    </div>
  )
}

export default Typography
