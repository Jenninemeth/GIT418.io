/*    GIT 418
 *    Chapter 10 Case Project

 *    Location
 *    Author: Jennifer Putnam
 *    Date: November 8th,2018

 *    Filename: location.js
 */

"use strict";

// when button is pressed, the user's location is called
// if unauthorized, the fail function runs
// timeout after 10 seconds
function myLocation() {
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation, fail,
    {timeout: 10000}); 
    } else {
        fail();
    }
}
// logs and shows positions 
function showLocation(position) {
    var longitude = position.coords.longitude;
    var latitude = position.coords.latitude;
    document.getElementById("locationMsg").innerHTML = "Longitude: " + 
        longitude.toFixed(2) + "<br><br>Latitude: " + latitude.toFixed(2);
}
// shows failed message
function fail() {
    var content = document.getElementById("locationMsg");
    content.innerHTML = "<p>Geolocation information not available or authorized.</p>";
}