# Yoga Classes Backend

## Introduction:

This document outlines the backend API for a yoga class admission system, built with (insert your backend language and framework).

### Data Model:

The system utilizes a relational database with two main tables:

### users:
`id`: (integer, primary key)

`name`: (string, required)

`age`: (integer, required)

`phone`: (string, required)

`email`: (string, required, unique)

`start_date`: (date, required)

`batch`: (integer, foreign key references batches table)

`batches`:
`id`: (integer, primary key)
`time_slot`: (string, required)

## ER Diagram:

```
+-----------+     +-------------+
| users     |-----| batches     |       
+-----------+     +-------------+       
| id (PK)   |-----| id (PK)     |       
| name      |-----| time_slot   |
| age       |-----|             |       
| phone     |-----|             |       
| email     |-----|             |       
| start_date|-----|             |       
| batch|----|     |             |
+-----------+     +-------------+
```

Note: This diagram excludes the payment table as payment APIs are not required in this version.

## APIs:

### Get Available Batches:

Method: `GET` \
Endpoint: `/api/batches` \
Response:
Status code: `200 OK` 
(Returns a JSON list of available batches with their time slots) 

### Register User:

Method: `POST` 
Endpoint: `/api/users` 

Request Body: \
`name` (string, required) \
`age` (integer, required) \
`phone` (string, required) \
`email` (string, required, unique) \
`batch` (integer, required, reference to batches table) \
`date` (date, required) 

Response: \ 
Status code: \
`201 Created`: Registration successful, returns JSON object with user details (ID, name, etc.) \
`400 Bad Request`: Invalid input data, returns error message \
`409 Conflict`: Email already exists, returns error message