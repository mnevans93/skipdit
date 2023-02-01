// We need to tweak this to have different use cases based on what type of HTML request is being made and on what route

const checkUserStatus = (req, res, next) => {
  if (!req.user) return res.status(401).json('Unauthorized')
  next()
}

module.exports = checkUserStatus
