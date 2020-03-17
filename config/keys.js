// module.exports = {
//     mongoURI: "mongodb+srv://admin:zRd6dw3SZTmTOaGD@cluster0-3ibcp.mongodb.net/test?retryWrites=true&w=majority",
//     secretOrKey: 'secret'
// }

// keys.js
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}