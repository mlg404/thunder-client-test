module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const [, jwt] = authorization.split(" ");

  if (jwt % 2 === 0) {
    return next();
  }

  return res.status(401).json({ error: "Invalid Token" });
};
