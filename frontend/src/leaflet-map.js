var map = L.map('map').setView([33.6460, -117.8427], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var testIcon = L.icon({
    iconUrl: 'https://media.discordapp.net/attachments/819662445635043398/1170458777586245672/pissing_petr.png?ex=65591dae&is=6546a8ae&hm=08032889395e93c7e099a6bfc44e2bd22bcfa647b15ac44b7dd6732379a0d50d&=&width=1252&height=1410',

    iconSize:     [90, 95], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([33.64854669998156, -117.84122589999998], {icon: testIcon}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        iconSize:     [90, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    }
});
