# ***MAU-10-client-registration---first-step-add-client-type*** branch
## Added
### Register component
* Added client type drop down list

### Auth service
* Added the client type functionality

### Profile component
* Added the functionality of the corporate & joint account 
* Added the functionality of the client type

### Show correct confirmation (**error** or **success**) message to the user :
* Profile details component
* Bank details component

### Spinner
* Shareholder component
* Director component
* Profile details component
* Bank details component

## Changed
### Register component
* Changed **user.phones** to **user.phone** (so that we can send data correctly to the backend)

### Auth service
* Changed all **localstorage.removeItem** to **localstorage.clear** in the logout function

### Profile component
* Changed the **sidebarMenuItems** array to display the correct links based on the current account type


### Auth routing module
* Change **double quotes** to **single quotes** in imports

## Fixed
### Header component
* Fixed code errors which is used to display the **login** or **open account** buttons

### Profile joint details component
* Fixed all syntactical error

## Removed
### From all the app
* Removed all console.log

### Profile corporate component
### Profile joint component

### Profile module
* Removed the profile corporate component
* Removed the profile joint component

### Profile routing module
* Removed all unnecessary routes and use a single array of routes

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