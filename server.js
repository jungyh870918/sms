require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 헬스 체크
app.get('/', (req, res) => {
  res.send('✅ Server is running');
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
