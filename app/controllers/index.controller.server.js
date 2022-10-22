/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/05/2022
    File:           index.controller.service.js
*/

import { UserDisplayName } from "../utils/index.js";

export function displayHomePage(req, res, next) {
    res.render('index', { title: 'Home', page: 'home', username: UserDisplayName(req)} );
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: 'About', page: 'about', username: UserDisplayName(req)} );
};

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: 'Projects', page: 'projects', username: UserDisplayName(req)} );
};

export function displayServicesPage(req, res, next) {
    res.render('index', { title: 'Services', page: 'services', username: UserDisplayName(req)} );
};

export function displayContactPage(req, res, next) {
    res.render('index', { title: 'Contact', page: 'contact', username: UserDisplayName(req)} );
};


