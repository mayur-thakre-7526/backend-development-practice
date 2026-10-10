const jwt = require("jsonwebtoken");

async function authArtist(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETE);

    if (decoded.role != "artist") {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = decoded;

    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

async function authUser(req, res, next) {
  const token = await req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRETE);

    if (decoded.role !== "user") {
      return res
        .status(403)
        .json({ message: "You don't have permission to access." });
    }

    req.user = decoded;

    next();

  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = { authArtist, authUser };
