# Appointment Slot booking backend

This is a backend for an appointment slot booking system.

  <div>
    <img src="https://img.shields.io/badge/-Node_JS-black?style=for-the-badge&logoColor=black&logo=node.js&color=green" alt="node.js" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="appwrite" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔖 [Quick Start](#quick-start)
4. 🌐 [List of Endpoints](#list-of-endpoints)
5. 📡 [Request and Response Formats](#request-and-response-formats)


## 🤖 <a name="introduction">Introduction</a>

This is a backend for an appointment slot booking system.

## ⚙️ <a name="tech-stack">Tech Stack</a>

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

## 🔖 <a name="quick-start">Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

**Cloning the Repository**

```bash
git clone https://github.com/abdulvahabaa/backend-slot-booking-api.git
cd backend-slot-booking-api
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
PORT=9002

DATABASE_URL=<DATABASE_URL>
```

or Rename the `.env.Sample` file to `.env` 

**Running the Project**

```bash
npm run dev
```

This will start the development server and open the application in your browser.

## 🌐 <a name="list-of-endpoints">List of Endpoints</a>

| Endpoint        | Method | Description        |
| --------------- | ------ | ------------------ |
| /api/appointments/available-slots?date=2022-01-01  | GET    | Get all available slots    |
| /api/appointments/book | POST    | Book an avalible Slot |



## 📡 <a name="request-and-response-formats" >Request and Response Formats</a>

The API expects JSON data in the request body and returns JSON data in the response body.

base url: http://localhost:9002

1. **GET /api/appointments/available-slots?date=<yyyy-mm-dd>**

This endpoint returns all available slots for a given date.

```json
{
  "availableSlots": [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM"
  ]
}
```

2. **POST /api/appointments/book**

This endpoint allows a user to book an available slot.

Request Body:

```json
{
  "name": "Abdul Vahab",
  "phone": "1234567890",
  "date": "2022-01-01",
  "time": "10:00 AM"
}
```

Response Body:

```json
{
    "message": "Appointment booked successfully",
    "appointment": {
        "id": "a69d8359-4430-4b56-884f-03713c6dde5c",
        "name": "John Doe",
        "phone": "1234567890",
        "date": "2025-02-25T00:00:00.000Z",
        "timeSlot": "10:30",
        "createdAt": "2025-02-20T11:39:25.561Z"
    }
}
```






