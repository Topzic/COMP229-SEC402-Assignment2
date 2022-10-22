/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/21/2022
    File:           auth.route.server.js
*/

// Imports
import { Router } from "express";
import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage} 
    from "../controllers/auth.controller.server.js";

const router = Router();

// Display Login Router
router.get('/login', DisplayLoginPage);

// Process Login Page
router.post('/login', ProcessLoginPage);

// Display Register Router
router.get('/register', DisplayRegisterPage);

// Process Registration Page
router.post('/register', ProcessRegisterPage);

// Process lougout 
router.get('/logout', ProcessLogoutPage);

export default router;