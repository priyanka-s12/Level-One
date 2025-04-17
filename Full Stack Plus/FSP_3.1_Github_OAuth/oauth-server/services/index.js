//helper function that will secure our access token

function setSecureCookie(res, token) {
  res.cookie('access_token', token, {
    httpOnly: true,
    maxAge: 60 * 1000,
  });
  return res;
}

//token will expire after 1 min

module.exports = { setSecureCookie };
