import express from "express"
const router=express.Router();
import { signup,login,logout} from "../controller/user.controller.js";
// import secureRoute from "../middleware/secureRoute.js";
router.post("/signup",signup)
router.post("/login",login);
router.post("/logout",logout);
// router.get("/allusers",secureRoute,allUsers);
export default router;