/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/05/2022
    File:           index.controller.service.js
*/

// exports function to display the correct page
export function displayHomePage(req, res, next){
    res.render('index', { title: "Home", page: 'home' });
};

export function displayAboutPage(req, res, next) {
    res.render('index', { title: "About", page: 'about' })
}

export function displayProjectsPage(req, res, next) {
    res.render('index', { title: "Projects", page: 'projects' })
}

export function displayServicesPage(req, res, next) {
    res.render('index', { title: "Services", page: 'services' })
}

export function displayContactPage(req, res, next) {
    res.render('index', { title: "Contact", page: 'contact' })
}