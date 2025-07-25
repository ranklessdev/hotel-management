

```markdown
# Hotel Management Frontend Project (Hotel-Paradise)

This is a complete **Hotel Management Frontend Project** built using React, developed as part of an internship project.  
The form allows users to submit hotel booking details, which are stored in a MySQL database via a basic Express backend.

## 🔧 Technologies Used

- **Frontend**: React, HTML, CSS
- **Backend**: Express.js (basic setup)
- **Database**: MySQL (via MySQL Workbench)

## ✨ Features

- Responsive UI
- Backend API to store booking data in SQL
- Data persistence using MySQL table



## 🚀 How to Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/your-username/booking-form-project.git
cd booking-form-project
```

### 2. Set up MySQL
- Create a database named `hotelDB`
- Run the following SQL:
```sql
CREATE TABLE bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255),
  roomType VARCHAR(100),
  checkIn DATE,
  checkOut DATE,
  message TEXT
);
```

### 3. Configure `.env`
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourPassword
DB_NAME=hotelDB
PORT=5000
```

### 4. Start the backend
```bash
cd server
npm install
node server.js
```

### 5. Start the frontend
```bash
cd client
npm install
npm start
```

## 📚 Learning Outcome

This project helped me strengthen my frontend skills and explore backend integration using Express and MySQL.  
While my primary focus was on UI development, I took initiative to implement basic backend functionality to make the form fully functional.



