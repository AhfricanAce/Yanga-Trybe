import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const adminAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(token_decode.id);
    console.log(user);
    console.log(token_decode);
    if (!user && user.email !== process.env.ADMIN_EMAIL) {
      return res.json({
        success: false,
        message: "Not Authorized, Login Again",
      });
    }
    // if (token_decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
    //   return res.json({
    //     success: false,
    //     message: "Not Authorized, Login Again",
    //   });
    // }
    console.log("user is admin");
    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default adminAuth;
