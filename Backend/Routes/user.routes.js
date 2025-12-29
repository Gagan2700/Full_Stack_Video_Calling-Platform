import express from 'express'
import {signup,login,logout} from "../Controllers/user.controller.js"

const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout)
// router.post("/add_to_acticity");
// router.post("/get_all_activity");

export default router;