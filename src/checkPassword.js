const bcrypt = require('bcrypt');

// Replace these with actual values
const plainPassword = 'newpassword'; // The new plain password to check
const hashedPassword = '$2b$10$newHashedPasswordHere'; // The new hashed password from the database

const checkPassword = async (plainPassword, hashedPassword) => {
  try {
    const match = await bcrypt.compare(plainPassword, hashedPassword);
    if (match) {
      console.log('Password matches');
    } else {
      console.log('Password does not match');
    }
  } catch (error) {
    console.error('Error comparing passwords:', error);
  }
};

checkPassword(plainPassword, hashedPassword);
