import { Router } from "express";
/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/21/2022
    File:           business.route.server.js
*/

// Imports
import {  DisplayBusinessList, 
    DisplayBusinessAddPage, 
    ProcessBusinessAddPage, 
    ProcessBusinessEditPage, 
    DisplayBusinessEditPage, 
    ProcessBusinessDelete } from "../controllers/business.controller.server.js";

import { AuthGuard } from "../utils/index.js";

const router = Router();

// Adds all the directories to locate the ejs files
router.get('/business-list', DisplayBusinessList);
router.get('/business-add', AuthGuard, DisplayBusinessAddPage);
router.post('/business-add', AuthGuard,ProcessBusinessAddPage);
router.post('/business-edit/:id', AuthGuard,ProcessBusinessEditPage);
router.get('/business-edit/:id', AuthGuard,DisplayBusinessEditPage);
router.get('/business-delete/:id', AuthGuard,ProcessBusinessDelete);

export default router;