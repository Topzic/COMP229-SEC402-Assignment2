/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/05/2022
    File:           index.route.server.js
*/

import { Router } from 'express';
import { displayContactPage, displayHomePage, displayProjectsPage, displayServicesPage, displayAboutPage } from '../controllers/index.controller.server.js';

// Instantiating the router
const router = Router();

// add middleware to connect application
router.get('/',displayHomePage);
router.get('/home',displayHomePage);
router.get('/about', displayAboutPage)
router.get('/projects', displayProjectsPage)
router.get('/services', displayServicesPage)
router.get('/contact', displayContactPage)

export default router;