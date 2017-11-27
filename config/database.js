module.exports = {
  host: process.env.MONGODB_HOST || 'localhost',
  port: process.env.MONGODB_PORT || 27017,
  username: process.env.MONGODB_USERNAME || 'test',
  password: process.env.MONGODB_PASSWORD || '',
}