import React, { Fragment } from "react"
import Typography from "@material-ui/core/Typography"

const Success = ({
  values: { mockResult },
}
) => {
  return (
    <Fragment>
      <Typography variant="h2" align="center">
        Your quotation:
      </Typography>
      <Typography component="p" align="center" style={{ marginTop: 40 }}>
        Your vehicle insurance cost is {mockResult | 0} dollars annually.
      </Typography>
    </Fragment>
  )
}

export default Success
