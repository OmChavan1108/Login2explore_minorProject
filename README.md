# Student Enrollment Form (JsonPowerDB Project)

## Description
This project is a Student Enrollment Form developed using HTML, Bootstrap, JavaScript, and JsonPowerDB (JPDB). It allows users to add, update, and manage student records efficiently.

The application ensures that Roll Number acts as a primary key and prevents duplicate entries.

---

## Features
- Add new student records
- Update existing student records
- Auto-fetch data based on Roll Number
- Prevent duplicate Roll Numbers
- Input validation (no empty fields allowed)
- Reset form functionality
- Dynamic enabling and disabling of buttons

---

## Database Details
- Database Name: SCHOOL-DB  
- Table Name: STUDENT-TABLE  

### Input Fields
- Roll No (Primary Key)
- Full Name
- Class
- Birth Date
- Address
- Enrollment Date

---

## Technologies Used
- HTML5
- CSS3 (Bootstrap)
- JavaScript (jQuery)
- JsonPowerDB (JPDB)

---

## Benefits of using JsonPowerDB
- High performance and low latency
- Easy to use REST API
- JSON-based NoSQL database
- Schema-free data storage
- Fast development and deployment

---

## Working Flow

1. On page load, an empty form is displayed.
2. User enters Roll Number:
   - If Roll Number does not exist, Save button is enabled.
   - If Roll Number exists, data is auto-fetched and Update button is enabled.
3. User fills or modifies data.
4. Click:
   - Save to insert new record
   - Update to modify existing record
5. Reset button clears the form.

---

## Release History

Version 1.0
- Created basic form
- Implemented data insertion

Version 2.0
- Added primary key validation
- Implemented update functionality
- Enabled auto-fetch of data
- Improved validation and UI behavior

---

## Scope of Project
- Can be used for student record management
- Can be extended to school management systems
- Can be integrated with login and authentication systems

---

## Example Usage

1. Enter Roll No: 101
2. Fill student details
3. Click Save
4. Enter same Roll No again to fetch data
5. Modify and click Update

---

## Important Note
For security reasons, the connection token used in this project is not included in the repository. Please generate your own JsonPowerDB token and replace it in the code before running the project.

---

## Project Status
Completed and ready for submission

---

## Sources
- JsonPowerDB Documentation: https://login2explore.com/jpdb/docs.html
- Bootstrap Documentation: https://getbootstrap.com/

---

## Author
Om Chavan  
BE IT Student
