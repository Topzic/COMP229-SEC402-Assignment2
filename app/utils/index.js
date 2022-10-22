/*
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/21/2022
    File:           index.js
*/


// Getter for the username
export function UserDisplayName(req){
    if(req.user){
        return req.user.username;
    }
    return '';
}

// Authentication check for secured pages
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login')
    }
    next();
}