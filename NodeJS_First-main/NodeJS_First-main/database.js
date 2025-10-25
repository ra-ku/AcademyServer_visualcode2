const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // 옵션 (최신 버전에서는 대부분 자동)
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB 연결 성공: ${conn.connection.host}`);
    console.log(`📂 데이터베이스: ${conn.connection.name}`);
  } catch (error) {
    console.error('❌ MongoDB 연결 실패:', error.message);
    process.exit(1);
  }
}

// 연결 이벤트 리스너
mongoose.connection.on('connected', function () {
  console.log('🔗 Mongoose 연결됨');
});

mongoose.connection.on('error', function (err) {
  console.error('❌ Mongoose 에러:', err);
});

mongoose.connection.on('disconnected', function () {
  console.log('❌ Mongoose 연결 끊김');
});

// Graceful shutdown
process.on('SIGINT', async function () {
  await mongoose.connection.close();
  console.log('👋 Mongoose 연결 종료');
  process.exit(0);
});

module.exports = connectDB;
