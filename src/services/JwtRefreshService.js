const refreshIfExpiredAndMakeRequest = (jwt, callback)  => {
  const isExpired = jwt => {
    // check if JWT is expired.
  }
  if (isExpired(jwt)) {
    // refresh the token
  }

  return callback();
}

export const JwtRefreshService = {
  refreshIfExpiredAndMakeRequest,
}

// usage:

refreshIfExpiredAndMakeRequest(someJwt, () => {
  ProjectApi.createProject({ title, description, slug });
})

