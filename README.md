# Insurance Demo Web App

## Overview
This website is implemented by NextJS, React, Material UI, Material UI starter Kit styling. It consists the following pages:
* Index
* Get Quotation: 5 steps for filling up a form - Personal details, Address, Vehicle Details, Summary, Checkout
* Login: Dummy page without any backend implementation
* Register: Dummy page without any backend implementation
* About 

## Userful Commands:
```
# Build and start local server
npm run dev
# Build website
npm run build 
# Reinstall dependancies
npm run install:clean
```
## Features
* Fully responsive for both mobile and desktop browser
* Pipeline integrated with code repository. Commit merging to master branch will automatically deploy the website to https://wilsonz.now.sh (Powered by Zeit Now)
* Basic validation for all form fields

## Things to do/Comments
* Backend for user registeration/login. Intend to use API Gateway/Lambda/DynamoDB. The process will be register button send form's input and defined API Key as request payload to API Gateway endpoint, then the endpoint trigger Lambda Function for validating API key. If it's valid, trigger registration process and save user details in DynamoDB. Login will trigger API Gateway -> Lambda function: logic for verification -> Read from DynamoDB. Also, Redis can be implemented to cache the data from DynamoDB to improve the READ performance. If single-sign on is required, use Cognito for register/login user instead

* Getting quotation currently is just returning a random cost, idealy it should send API request to some quotation server to get the actual quotation.

* NZ Address validation is not implemented yet. Intented design is using a third party library such as Address Finder NZ to implement a auto-complete form which can look up for NZ address in real time.

* Credit Card validation is really basic right now. Intended design is integrating `card-validator` (available in NPM) to validate the user input in the form.

* Automation: Intended solution is as below:
- Use CDK to implement infrastructure as code for AWS resource deployment in AWS.
- Set up unit test cases using Jest for UI, Sion/AWSMock/Mocha for backend. Use Nyc to generate unit tests report
- Write scripts for automation deployment (install dependancey -> build code -> run tests -> when all passed -> deploy to AWS and Zeit Now). Use code deployment tool, such as AWS codepipeline/Jenkins/CircleCI/Github Actions for automatic deployment when commits merged to master.

* Refactor to typescript for better developer experience