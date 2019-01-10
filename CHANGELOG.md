# ***connect-api-fix*** branch

## Added
### Profile Service
* Add the **updateClientInfo function**
### Shared Module
* Added all the required **validation directives**
### ***Environment.prod.ts*** and ***Environment.ts***
* Added environment variables for **back-end API** and **countries**
### Login Comoponent
* Added the confirmation component to show **error messages**
* Added the required validation
### Registration Component
* Added the confirmation component to show the corresponding message (**errors** (such as in case of duplicated username or email) or **success**)
* Added the required validation
### Reset-password-s1 Component
* Added the confirmation component to show the corresponding message (**error**  or **success**)
* Added the required validation
### Profile-details Component 
* Added the confirmation component to show the corresponding message (**error**  or **success**)
* Added the required validation
### app-component.scss
* added styles to make sure that the space between the header and the footer are enough (when loading the page **before adding this styles the header and the footer were touching**)

## Changed
### Auth Service
* Change the login function by calling the **getClientInfo function** from the **profile service**
### Profile Service
* Change the **getClientInfo function**
### Registration Component 
* Disable **username** input and bind it with the **Email** input
* Disable the **country code** input and bind it with **countries drop down**
* Log the user in and Redirect him to the dashboard if he registered successfully
### Profile-details Component 
* Change the phone number to be 2 fields **phone code** and **phone number** so that we can send it correctly to the back-end
* Disabling the following fields (*username, first name, last name, country, phone code, email*)

## Fixed
### Auth Service
* Handling errors by displaying it to the client
### Registration Component
* Getting and displaying the correct list of countries and show the correct country code
### Profile-details Component
* Getting and displaying the correct list of countries and show the correct country code
* Populate the form fields with the correct information from the database

## Removed
### Auth Service
* Remove the **getClientInfo function**