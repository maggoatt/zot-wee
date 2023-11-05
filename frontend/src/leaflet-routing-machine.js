import {map} from './map.js';
import {closest_bathroom, closest_bathroom_info} from './nearest_location.js';

const user_lat = localStorage.getItem("user_lat")
const user_long = localStorage.getItem("user_long")

let control = L.Routing.control({
    waypoints: [
        L.latLng(user_lat, user_long),
        L.latLng(closest_bathroom_info.latitude, closest_bathroom_info.longitude),
    ],
   /*router: L.Routing.osrmv1({
    serviceUrl: 'hhtps://router.project.osrm.org/route/v1',
    profile: 'foot-walking', 
   })*/
    }).addTo(map);

// L.Routing.control({ createMarker: function() { return null; } });
