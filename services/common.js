const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}
exports. cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing
  token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZjNmOGIzOTAyMmFlOTQ1ZWM1ZmU2YSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjkzNzEwNTE1fQ.ILoyvUE1T0XErbczHMpAOofjkw-joF_Mto0-qz4XixQ"
  return token;
}
