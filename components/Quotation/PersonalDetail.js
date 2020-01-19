import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"

// Destructure props
const PersonalDetail = ({
  handleNext,
  handleChange,
  values: { firstName, lastName, email, gender, date, phone, },
  filedError,
  isError
}) => {
  // Check if all values are not empty
  const isEmpty =
    firstName.length > 0 &&
    lastName.length > 0 &&
    gender.length > 0 &&
    email.length > 0 &&
    date.length > 0 &&
    phone.length > 0 

  return (
    <Fragment>
      <Grid container spacing={2} noValidate>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            placeholder="Your first name"
            defaultValue={firstName}
            onChange={handleChange("firstName")}
            margin="normal"
            error={filedError.firstName !== ""}
            helperText={
              filedError.firstName !== "" ? `${filedError.firstName}` : ""
            }
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            placeholder="Your last name"
            defaultValue={lastName}
            onChange={handleChange("lastName")}
            margin="normal"
            error={filedError.lastName !== ""}
            helperText={
              filedError.lastName !== "" ? `${filedError.lastName}` : ""
            }
            required
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            placeholder="Your email address"
            type="email"
            defaultValue={email}
            onChange={handleChange("email")}
            margin="normal"
            error={filedError.email !== ""}
            helperText={filedError.email !== "" ? `${filedError.email}` : ""}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth required margin="normal">
            <InputLabel htmlFor="gender">Gender</InputLabel>
            <Select value={gender} onChange={handleChange("gender")}>
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            InputLabelProps={{
              shrink: true
            }}
            label="Date of birth"
            name="birthday"
            type="date"
            defaultValue={date}
            onChange={handleChange("date")}
            error={filedError.date !== ""}
            helperText={filedError.date !== "" ? `${filedError.date}` : ""}
            margin="normal"
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone number"
            name="phone"
            placeholder="i.e: xxx-xxx-xxxx"
            defaultValue={phone}
            onChange={handleChange("phone")}
            margin="normal"
            error={filedError.phone !== ""}
            helperText={filedError.phone !== "" ? `${filedError.phone}` : ""}
          />
        </Grid>
      </Grid>
      <div
        style={{ display: "flex", marginTop: 50, justifyContent: "flex-end" }}
      >
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

export default PersonalDetail
