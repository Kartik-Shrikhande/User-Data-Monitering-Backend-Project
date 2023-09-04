## User Data Monitering
this repository contains backend for storing user entries and keep track of user data

## Introduction
In this Project we are keeping track of userdata based on provided email and phone numbers by identifying and linking user contacts created API which stores user data like email and phone number and marked data as 'primary' if user is new or if it figures out new email or phone number.and if its older older user email or phone then it marked data as 'secondary' for all the next entries of same user , that helps us keeping track of same user records.

## Tech Stacks
Nodejs,Express,Mongoose,MongoDB,Dotenv,Nodemon

## Table of Contents
```
#Usage
#API Endpoint
#Response
#Assumptions
#Author
#License
```

## Usage
To use this service:

Clone this repository.
Set up your Database (MongoDB ) and configure the connection details in the .env file.
Run npm install to install dependencies.
Run npm start to start the server.
Expose the /identify endpoint to handle HTTP POST requests as described in the problem statement.


## API Endpoint
The web service provides an endpoint /identify that receives HTTP POST requests with JSON data containing email and/or phone number. The service adds or updates contact details in the database and returns the consolidated contact information.

```
{
  "email": "example@example.com",
  "phoneNumber": "1234567890"
}
```

# Response

-creating new user data

```
{
    "data": {
        "primaryContactId": "64f5de56445294783a516f6c",
        "emails": [
            "example@example.com"
        ],
        "phoneNumbers": [
            "1234567890"
        ],
        "secondaryContactIds": []
    }
}

```
# Respose II
-creates secondary Id for user

```

{
    "contact": {
        "primaryContactId": "64f5de56445294783a516f6c",
        "emails": [
            "example@example.com",
            "example@example.com"
        ],
        "phoneNumbers": [
            "1234567890",
            "1234567890"
        ],
        "secondaryContactIds": [
            "64f5e03b445294783a516f6f"
        ]
    }
}


```
# Respose III
-same user with different Email

```
{
    "contact": {
        "primaryContactId": "64f5de56445294783a516f6c",
        "emails": [
            "example@example.com",
            "example@example.com",
            "sameuser@example.com"
        ],
        "phoneNumbers": [
            "1234567890",
            "1234567890",
            "1234567890"
        ],
        "secondaryContactIds": [
            "64f5e03b445294783a516f6f",
            "64f5e0a6445294783a516f73"
        ]
    }
}

```

# Response IV
-same user with different phone number

```
{
    "contact": {
        "primaryContactId": "64f5e0a6445294783a516f73",
        "emails": [
            "sameuser@example.com",
            "sameuser@example.com"
        ],
        "phoneNumbers": [
            "1234567890",
            "12345678990"
        ],
        "secondaryContactIds": [
            "64f5e0d3445294783a516f77"
        ]
    }
}

```
## Assumptions
A working database setup with the necessary requirements
The endpoint /identify is correctly configured in your web service.
The JSON body of the POST request contains either an email or a phone number, or both.
The service handles primary and secondary contact creation and linking as described in the problem statement.


## Author
Kartik Shrikhande

## License
This project is licensed under the MIT License. See the LICENSE file for details.

