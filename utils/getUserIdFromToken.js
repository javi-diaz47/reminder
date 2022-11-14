import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";

const getUserIdFromToken = async ({ req, res }) => {
  const token = getCookie("token", { req, res });
  const id = jwt.decode(token)?.sub;

  return id || "";
};

export { getUserIdFromToken };
