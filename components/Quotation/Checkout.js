import React, { Fragment } from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

const Checkout = ({
    handleBack,
    handleChange,
    handleSubmit,
    values: { cardName, cardNum, cvv, expiredDate },
    filedError,
    isError
}) => {
    // Check if all values are not empty
    const isEmpty =
        cardName.length > 0 &&
        cardNum.length > 0 &&
        cvv.length > 0 &&
        expiredDate.length > 0

    return (
        <Fragment>
            <Grid container spacing={2} noValidate>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Card Holder's Name"
                        name="cardName"
                        placeholder="Your Card Name"
                        defaultValue={cardName}
                        onChange={handleChange("cardName")}
                        margin="normal"
                        error={filedError.cardName !== ""}
                        helperText={
                            filedError.cardName !== "" ? `${filedError.cardName}` : ""
                        }
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Card Number"
                        type="number"
                        name="cardNum"
                        placeholder="Your Card Number"
                        defaultValue={cardNum}
                        onChange={handleChange("cardNum")}
                        margin="normal"
                        error={filedError.cardNum !== ""}
                        helperText={
                            filedError.cardNum !== "" ? `${filedError.cardNum}` : ""
                        }
                        required
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="CVV"
                        name="cvv"
                        type="number"
                        placeholder="Your Card CVV"
                        defaultValue={cvv}
                        onChange={handleChange("cvv")}
                        margin="normal"
                        error={filedError.cvv !== ""}
                        helperText={filedError.cvv !== "" ? `${filedError.cvv}` : ""}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label="Expired Date"
                        name="expiredDate"
                        placeholder="Your Card Expired Date"
                        defaultValue={cvv}
                        onChange={handleChange("expiredDate")}
                        margin="normal"
                        error={filedError.expiredDate !== ""}
                        helperText={filedError.expiredDate !== "" ? `${filedError.expiredDate}` : ""}
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
                    onClick={handleSubmit}
                >
                    Get quotation now
        </Button>
            </div>
        </Fragment>
    )
}
export default Checkout