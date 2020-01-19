import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

// Destructure props
const Address = ({
  handleNext,
  handleBack,
  handleChange,
  values: { address },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty = address.length > 0
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            name="address"
            placeholder="Enter your full address (e.g. 100 Queens Street, Auckland, New Zeland)"
            defaultValue={address}
            onChange={handleChange("address")}
            margin="normal"
            error={filedError.address !== ""}
            helperText={filedError.address !== "" ? `${filedError.address}` : ""}
            required
          />
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
        <Button
          variant="contained"
          color="default"
          onClick={handleBack}
          style={{ marginRight: 20 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          disabled={!isEmpty || isError}
          color="primary"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Fragment>
  )
}

export default Address
