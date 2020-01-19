import React, { useState, Fragment } from "react"
import Stepper from "@material-ui/core/Stepper"
import Step from "@material-ui/core/Step"
import StepLabel from "@material-ui/core/StepLabel"
import PersonalDetail from "./PersonalDetail"
import Address from "./Address"
import Vehicle from "./Vehicle"
import Confirm from "./Confirm"
import Checkout from "./Checkout"
import Success from "./Success"

const emailRegex = RegExp(/^[^@]+@[^@]+\.[^@]+$/)
const phoneRegex = RegExp(/^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4,6})$/)
// Step titles
const labels = ["Personal Details", "Address", "Vehicle Details", "Summary", "Checkout"]

const StepForm = () => {
  const [steps, setSteps] = useState(0)
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    date: "",
    address: "",
    phone: "",
    cardName: "",
    cardNum: "",
    cvv: "",
    expiredDate: "",
    carYear: "",
    carMake: "",
    carModel: "",
    mockResult: "",
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  })
  // Copy fields as they all have the same name
  const [filedError, setFieldError] = useState({
    ...fields
  })

  const [isError, setIsError] = useState(false)

  // Proceed to next step
  const handleNext = () => setSteps(steps + 1)
  // Go back to prev step
  const handleBack = () => setSteps(steps - 1)

  // Handle fields change
  const handleChange = input => ({ target: { value } }) => {
    // Set values to the fields
    setFields({
      ...fields,
      [input]: value
    })
    
    // input validation
    const formErrors = { ...filedError };
    const lengthValidate = value.length > 0 && value.length < 3;
    const carYearValidate = Number(value) < 1970 || Number(value) > 2021;
    const carNumValidate = value.length < 15;
    const cardCvvlengthValidate = value.length !== 3;
    
    // Handle errors
    switch (input) {
      case "firstName":
        formErrors.firstName = lengthValidate ? "Minimum 3 characaters required" : ""
        break
      case "date":
        // 18 years = 568024668000 ms
        formErrors.date = (new Date().getTime() - new Date(value).getTime() < (568024668000)) ? "You must be more than 18 years old" : ""
        break
      case "lastName":
        formErrors.lastName = lengthValidate
          ? "Minimum 3 characaters required"
          : ""
        break
      case "email":
        formErrors.email = emailRegex.test(value) ? "" : "Invalid email address"
        break
      case "phone":
        formErrors.phone = phoneRegex.test(value)
          ? ""
          : "Please enter a valid phone number. i.e: xxx-xxx-xxxx"
        break
      case "address":
        formErrors.address = lengthValidate ? "Minimum 3 characaters required" : ""
        break
      case "cardName":
        formErrors.cardName = lengthValidate ? "Minimum 3 characaters required" : ""
        break
      case "cardNum":
        formErrors.cardNum = carNumValidate ? "Only 15 or 16 digits of number accepted" : ""
        break
      case "cvv":
        formErrors.cvv = cardCvvlengthValidate ? "Only 3 digits of number accepted" : ""
        break
      case "expiredDate":
        formErrors.expiredDate = lengthValidate ? "Minimum 3 characaters required" : ""
        break
      case "carYear":
        formErrors.carYear = carYearValidate ? "Invalid year" : ""
        break
      case "carModel":
        formErrors.carModel = lengthValidate ? "Minimum 2 characaters required" : ""
        break
      case "carMake":
        formErrors.carMake = lengthValidate ? "Minimum 3 characaters required" : ""
        break
      default:
        break
    }
    // Set Error state
    for (const property in formErrors) {
      if (formErrors.hasOwnProperty(property)) {
        if (formErrors[property].length !== 0) {
          setIsError(true);
          break;
        } else {
          setIsError(false);
        }
      }
    }
    // set errors hook
    setFieldError({
      ...formErrors
    })
  }

  const handleSteps = step => {
    switch (step) {
      case 0:
        return (
          <PersonalDetail
            handleNext={handleNext}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      case 1:
        return (
          <Address
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      case 2:
        return (
          <Vehicle
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      case 3:
        return (
          <Confirm
            handleNext={handleNext}
            handleBack={handleBack}
            values={fields}
          />
        )
      case 4:
        return (
          <Checkout
            handleNext={handleNext}
            handleBack={handleBack}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            values={fields}
            isError={isError}
            filedError={filedError}
          />
        )
      default:
        break
    }
  }
  // Handle the last step for submitting the form
  // Now it will just return a random value between 500-1000 for a mock
  // Ideally it should build a payload of all the form's values and call an API server to get quotation
  const handleSubmit = () => {
    console.log("Data submitted: " + JSON.stringify(fields));
    setFields({
      ...fields,
      mockResult: Math.random() * 1000,
    })
    handleNext();
  }

  // Handle components
  return (
    <Fragment>
      {steps === labels.length ? (
        <Success values={fields} />
      ) : (
          <Fragment>
            <Stepper
              activeStep={steps}
              style={{ paddingTop: 30, paddingBottom: 50 }}
              alternativeLabel
            >
              {labels.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {handleSteps(steps)}
          </Fragment>
        )}
    </Fragment>
  )
}

export default StepForm
