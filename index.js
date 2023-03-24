const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  const heading = "<h1 style='color:#4c4cff; text-align:center;'>Hello All DevOpFreak, Welcome To This Project! 😊</h1>";
  const subheading = "<h2 style='color:#ffa500; text-align:center;'>Subscribe to our newsletter:</h2>";
  const form = "<form style='text-align:center;'><input type='email' placeholder='Enter your email'><button type='submit'>Subscribe</button></form>";
  const version = "<p style='color:#808080; text-align:center;'>AppVersion1</p>";

  res.send(heading + subheading + form + version);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
