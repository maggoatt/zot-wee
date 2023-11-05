import {bathrooms} from './all_locations.js';
const user_lat = localStorage.getItem("user_lat");
const user_long = localStorage.getItem("user_long");

function calculateDistance(lat1, lon1, lat2, lon2) {
    // Convert latitude and longitude from degrees to radians
    lat1 = deg2rad(lat1);
    lon1 = deg2rad(lon1);
    lat2 = deg2rad(lat2);
    lon2 = deg2rad(lon2);

    // Radius of the Earth in kilometers (mean value)
    const R = 6371;

    // Haversine formula
    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;
    const a = Math.sin(dlat / 2) * Math.sin(dlat / 2) +
              Math.cos(lat1) * Math.cos(lat2) *
              Math.sin(dlon / 2) * Math.sin(dlon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    // Calculate the distance
    const distance = R * c;

    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

var closest_bathroom = [];
var closest_bathroom_info;
var distance_in_kilo;

for (let i = 0; i < bathrooms.length; i++){
    const i_distance = calculateDistance(user_lat, user_long, bathrooms[i].latitude, bathrooms[i].longitude);
    if (closest_bathroom.length !== 0) {
        if (distance_in_kilo > i_distance) {
            closest_bathroom[0] = bathrooms[i].name;
            closest_bathroom_info = bathrooms[i];
            distance_in_kilo = i_distance;
        };
    } 
    else {
        closest_bathroom.push(bathrooms[i].name);
        closest_bathroom_info = bathrooms[i];
        distance_in_kilo = i_distance;
    }
}

console.log(closest_bathroom + ': ' + distance_in_kilo + " kilometers away");
export {closest_bathroom, closest_bathroom_info, distance_in_kilo, calculateDistance, user_lat, user_long};