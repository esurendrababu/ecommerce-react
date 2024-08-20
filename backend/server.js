const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = 5001;

app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'ecommerce'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    throw err;
  }
  console.log('MySQL connected');
});

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Signup Route
app.post('/signup', async (req, res) => {
  const { username, email,Mobile, password } = req.body;
  const verificationToken = crypto.randomBytes(20).toString('hex');

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = { username, email,Mobile, password: hashedPassword, verificationToken };

  const sql = 'INSERT INTO users SET ?';

  db.query(sql, user, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Server error');
    }

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Email Verification',
      text: `Please verify your email by clicking the link: http://localhost:5000/verify/${verificationToken}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        return res.status(500).send('Failed to send verification email');
      }

      res.status(200).send('Verification email sent');
    });
  });
});

// Email Verification Route
app.get('/verify/:token', (req, res) => {
  const { token } = req.params;

  const sql = 'SELECT * FROM users WHERE verificationToken = ?';

  db.query(sql, [token], (err, result) => {
    if (err) {
      console.error('Error verifying email:', err);
      return res.status(500).send('Server error');
    }

    if (result.length === 0) {
      return res.status(400).send('Invalid token');
    }

    const updateSql = 'UPDATE users SET isVerified = TRUE, verificationToken = NULL WHERE verificationToken = ?';

    db.query(updateSql, [token], (err, result) => {
      if (err) {
        console.error('Error updating verification status:', err);
        return res.status(500).send('Server error');
      }

      res.redirect('http://localhost:3000/login');
    });
  });
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Received login request:', email); // Debugging line

  const sql = 'SELECT * FROM users WHERE email = ?';
  
  db.query(sql, [email], async (err, results) => {
    if (err) {
      console.error('Error fetching user:', err);
      return res.status(500).send('Server error');
    }

    console.log('Query results:', results); // Debugging line

    if (results.length === 0) {
      console.log('No user found with this email');
      return res.status(400).send('Invalid email or password');
    }

    const user = results[0];
    
    try {
      const match = await bcrypt.compare(password, user.password);
      console.log('Password match result:', match); // Debugging line

      if (!match) {
        console.log('Passwords do not match');
        return res.status(400).send('Invalid email or password');
      }

      if (!user.isVerified) {
        console.log('User not verified');
        return res.status(400).send('Please verify your email before logging in');
      }

      // Login successful
      res.status(200).json({ message: 'Login successful', userId: user.id });
    } catch (error) {
      console.error('Error comparing passwords:', error);
      res.status(500).send('Server error');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const hashExistingPasswords = async () => {
  const sql = 'SELECT id, password FROM users WHERE password NOT LIKE "$2b$%"';

  db.query(sql, async (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return;
    }

    for (const user of results) {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      const updateSql = 'UPDATE users SET password = ? WHERE id = ?';

      db.query(updateSql, [hashedPassword, user.id], (updateErr, updateResult) => {
        if (updateErr) {
          console.error('Error updating password for user:', user.id, updateErr);
        } else {
          console.log(`Updated password for user: ${user.id}`);
        }
      });
    }
  });
};

// Run the script to hash existing passwords (execute this script once)
hashExistingPasswords();



app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const verificationToken = crypto.randomBytes(20).toString('hex');

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { username, email, password: hashedPassword, verificationToken };

    const sql = 'INSERT INTO users SET ?';
    db.query(sql, user, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        return res.status(500).send('Server error');
      }

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification',
        text: `Please verify your email by clicking the link: http://localhost:5000/verify/${verificationToken}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).send('Failed to send verification email');
        }

        res.status(200).send('Verification email sent');
      });
    });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).send('Server error');
  }
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
