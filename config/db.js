const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB Connection Success 👍');
  } catch (error) {
    console.log('MongoDB Connection Failed :thumbsdown:');
    process.exit(1);
  }
};

module.exports = connectDB;