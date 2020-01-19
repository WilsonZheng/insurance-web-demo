import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

// Destructure props
const Vehicle = ({
    handleNext,
    handleBack,
    handleChange,
    values: { carYear, carMake, carModel },
    filedError,
    isError
}) => {
    // Check if all values are not empty
    const isEmpty = carYear.length > 0 && carMake.length > 0 && carModel.length > 0;
    return (
        <Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        TextField fullWidth label="Year of your vehicle"
                        type="number"
                        name="carYear"
                        placeholder="Enter the year of your vehicle (e.g. 2018)"
                        defaultValue={carYear}
                        onChange={handleChange("carYear")}
                        margin="normal"
                        error={filedError.carYear !== ""}
                        helperText={filedError.carYear !== "" ? `${filedError.carYear}` : ""}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        TextField fullWidth label="Make of your vehicle"
                        name="carMake"
                        placeholder="Enter the make of your vehicle (e.g. Honda)"
                        defaultValue={carMake}
                        onChange={handleChange("carMake")}
                        margin="normal"
                        error={filedError.carMake !== ""}
                        helperText={filedError.carMake !== "" ? `${filedError.carMake}` : ""}
                        required
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        TextField fullWidth label="Model of your vehicle"
                        name="carModel"
                        placeholder="Enter the model of your vehicle"
                        defaultValue={carModel}
                        onChange={handleChange("carModel")}
                        margin="normal"
                        error={filedError.carModel !== ""}
                        helperText={filedError.carModel !== "" ? `${filedError.carModel}` : ""}
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

export default Vehicle


//35316520d71b49b6a0afb435b3068da9
//c51d0dbf7753484a857bb2d989b6a192