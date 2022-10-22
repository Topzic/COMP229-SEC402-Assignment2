/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/21/2022
    File:           business.controller.service.js
*/

import businessModel from '../models/business.js';
import { UserDisplayName } from '../utils/index.js';

// Loads all the records from the database
export function DisplayBusinessList(req, res, next){
    businessModel.find(function(err, businessCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Business Contacts', page: 'business-contacts/list', contacts: businessCollection, username: UserDisplayName(req)});
    })
}

// Displays add business contact page
export function DisplayBusinessAddPage(req, res, next){
    res.render('index', { title: 'Add Business Contact', page: 'business-contacts/edit', contact: {} , username: UserDisplayName(req)});
}

// Updates the database with the business contact
export function ProcessBusinessAddPage(req, res, next){
    
    let newBusinessContact = businessModel({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });

    businessModel.create(newBusinessContact, (err, Business) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    } )
}

// Displays busines contact edit so you can modify the information
export function DisplayBusinessEditPage(req, res, next){
    let id = req.params.id;

    businessModel.findById(id, (err, business) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Business Contact', page: 'business-contacts/edit', contact: business, username: UserDisplayName(req) });
    });    
}

// Updates the database with the modified information
export function ProcessBusinessEditPage(req, res, next){

    let id = req.params.id;
    
    let newBusinessContact = businessModel({
        _id: req.body.id,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
    });

    businessModel.updateOne({_id: id }, newBusinessContact, (err, contact) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/business-list')
    } )
}

// removes the record from the database
export function ProcessBusinessDelete(req, res, next){
    let id = req.params.id;

    businessModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/business-list');
    })
}

