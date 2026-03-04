# Internal Time Tracker

A simple internal time tracking tool built with Next.js that allows users to log project work and store entries automatically in **Google Sheets** using the Google Sheets API.

---

## Features

* Select project from predefined list
* Log work date and time
* Validation to ensure **no more than 1 day is logged per date**
* Stores entries automatically in **Google Sheets**
* Displays submitted entries in the UI

---

## Tech Stack

* Next.js
* React
* Google Sheets API
* Node.js

---

## How It Works

1. User selects a project, date, and time.
2. Form validates that total time logged for the day does not exceed **1 day**.
3. Data is sent to a backend API route.
4. The backend uses the **Google Sheets API** to append the entry to the sheet.

Architecture:

Frontend (Next.js)
↓
API Route (`/api/add-entry`)
↓
Google Sheets API
↓
Google Sheet stores entry

---

## Setup Instructions

1. Clone the repository

```
git clone https://github.com/yourusername/internal-time-tracker.git
```

2. Install dependencies

```
npm install
```

3. Add your Google service account credentials

Create a file in the root folder:

```
service-account.json
```

Paste your Google Cloud service account JSON credentials into it.

4. Share your Google Sheet with the service account email.

5. Run the project

```
npm run dev
```

6. Open in browser

```
http://localhost:3000
```

---

## Google Sheet Format

The sheet should contain the following columns:

```
EntryID | UserEmail | Project | Date | Time | Timestamp
```

Entries will be automatically appended to the **TimeEntries** sheet.

---

## Author

Anand M Nambiar
