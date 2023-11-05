// import {map} from './map.js';
import {calculateDistance, user_lat, user_long} from './nearest_location.js';
const uci_map = map;

var petrIcon = L.icon({
    iconUrl: 'https://media.discordapp.net/attachments/819662445635043398/1170490438797496481/peeingandweeing.png?ex=65593b2b&is=6546c62b&hm=d591bb2f882ac7d1ae650eb11cbe00729ba5e7e97db3d2878ced2d7640b9f76c&=&width=1252&height=1410',

    iconSize:     [70, 75], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});


var bathrooms = [
    {
        name: "Aldrich Hall",
        latitude: 33.64854669998156,
        longitude: -117.84122589999998,
        rooms: [
            { name: "B15", available: false },
            { name: "172", available: false }
        ]
    },
    {
        name: "Anteater Recreation Center",
        latitude: 33.64359764777621,
        longitude: -117.82791864452422,
        rooms: [
            { name: "104", available: true },
            { name: "105", available: true },
            { name: "272", available: true },
            { name: "275", available: true }
        ]
    },
    {
        name: "Arboretum",
        latitude: 33.66430,
        longitude: -117.85339,
        rooms: [{ name: "3", available: false }]
    },
    {
        name: "Art, Culture, and Technology",
        latitude: 33.65099393675353,
        longitude: -117.8449827846549,
        rooms: [
            { name: "1204", available: true }
        ]
    },
    {
        name: "Art Studio",
        latitude: 33.650243641775035,
        longitude: -117.84494303069015,
        rooms: [
            { name: "260A", available: true }
        ]
    },
    {
        name: "Arts Annex",
        latitude: 33.647315512499304,
        longitude: -117.8468036153451,
        rooms: [
            { name: "2000", available: true }
        ]
    },
    {
        name: "Science Library",
        latitude: 33.646145957369725,
        longitude: -117.8463845751314,
        rooms: [
            { name: "121", available: true },
            { name: "573", available: true },
            { name: "589", available: true },
            { name: "673 / 6245", available: true },
            { name: "689 / 6201", available: true }
        ]
    },
    {
        name: "Berk Hall",
        latitude: 33.6464010731517,
        longitude: -117.84945452909629,
        rooms: [
            { name: "265", available: true },
            { name: "263", available: true }
        ]
    },
    {
        name: "Cross Cultural Center",
        latitude: 33.64796140694652,
        longitude: -117.84183937327744,
        rooms: [
            { name: "203", available: true }
        ]
    },
    {
        name: "Croul Hall",
        latitude: 33.64386465195876,
        longitude: -117.84468073095017,
        rooms: [
            { name: "B301", available: true }
        ]
    },
    {
        name: "Engineering Tower",
        latitude: 33.6449489030145,
        longitude: -117.84109704629527,
        rooms: [
            { name: "125", available: false }
        ]
    },
    {
        name: "Engineering & Computing Trailer",
        latitude: 33.644288728580754,
        longitude: -117.84020116091664,
        rooms: [
            { name: "125", available: true },
            { name: "126", available: true }
        ]
    },
    {
        name: "Gateway Study Center",
        latitude: 33.64756405097313,
        longitude: -117.84165041560507,
        rooms: [
            { name: "2001", available: true },
            { name: "2002", available: true }
        ]
    },
    {
        name: "Gavin Herbert Eye Institute",
        latitude: 33.641875719575665,
        longitude: -117.85219551560516,
        rooms: [
            { name: "G005", available: true },
            { name: "1116", available: true },
            { name: "1137", available: true },
            { name: "1316", available: true }
        ]
    },
    {
        name: "Hewitt Hall",
        latitude: 33.64349284800469,
        longitude: -117.8518024021139,
        rooms: [
            { name: "1123", available: true },
            { name: "1133", available: true }
        ]
    },
    {
        name: "Humanities Hall",
        latitude: 33.647454982511945,
        longitude: -117.84400124444137,
        rooms: [
            { name: "120", available: true }
        ]
    },
    {
        name: "ICS I",
        latitude: 33.64760219565564,
        longitude: -117.84195676325541,
        rooms: [
            { name: "430", available: true }
        ]
    },
    {
        name: "ICS II",
        latitude: 33.644151665089346,
        longitude: -117.84160521506875,
        rooms: [
            { name: "222", available: true },
            { name: "224", available: true },
            { name: "228", available: true },
            { name: "230", available: true }
        ]
    },
    {
        name: "ISEB",
        latitude: 33.64321584576507,
        longitude: -117.84376036144256,
        rooms: [
            { name: "1110", available: true },
            { name: "2110", available: true },
            { name: "3110", available: true },
            { name: "4110", available: true },
            { name: "5110", available: true },
            { name: "6110", available: true }
        ]
    },
    {
        name: "Krieger Hall",
        latitude: 33.647942608266554,
        longitude: -117.84354618862262,
        rooms: [
            { name: "114", available: true },
            { name: "119", available: true }
        ]
    },
    {
        name: "Law Library",
        latitude: 33.647341782289494,
        longitude: -117.83584253646275,
        rooms: [
            { name: "2200", available: true },
            { name: "2300", available: true }
        ]
    },
    {
        name: "Medical Education Bldg.",
        latitude: 33.644796250218846,
        longitude: -117.85218980211381,
        rooms: [
            { name: "3015", available: true },
            { name: "3017", available: true }
        ]
    },
    {
        name: "Medical Sciences C",
        latitude: 33.64579592694056,
        longitude: -117.8505027597864,
        rooms: [
            { name: "C127", available: true },
            { name: "C129", available: true }
        ]
    },
    {
        name: "Medical Surge II",
        latitude: 33.64714200286829,
        longitude: -117.85042987698527,
        rooms: [
            { name: "312B", available: true },
            { name: "312A", available: true },
            { name: "104", available: true },
            { name: "105", available: true }
        ]
    },
    {
        name: "Music & Media Building",
        latitude: 33.64950783420398,
        longitude: -117.84447327667768,
        rooms: [
            { name: "114", available: true }
        ]
    },
    {
        name: "Rockwell Engr. Center",
        latitude: 33.64405762471028,
        longitude: -117.84059998862271,
        rooms: [
            { name: "312", available: true },
            { name: "313", available: true }
        ]
    },
    {
        name: "Rowland Hall",
        latitude: 33.64476107186335,
        longitude: -117.84422225978636,
        rooms: [
            { name: "B92", available: true },
            { name: "B94", available: true }
        ]
    },
    {
        name: "Schneiderman Lecture Hall",
        latitude: 33.645798537622944,
        longitude: -117.8447573039678,
        rooms: [
            { name: "105", available: true }
        ]
    },
    {
        name: "Social & Behavioral Sciences Gateway",
        latitude: 33.64758536453718,
        longitude: -117.83907640211390,
        rooms: [
            { name: "G109", available: true }
        ]
    },
    {
        name: "Social Science Lab (Multi-Stall)",
        latitude: 33.64609083493805,
        longitude: -117.8399964307565,
        rooms: [
            { name: "249", available: true },
            { name: "250", available: true }
        ]
    },
    {
        name: "Social Science Plaza B",
        latitude: 33.6472138340985,
        longitude: -117.83912613095008,
        rooms: [
            { name: "1230", available: true }
        ]
    },
    {
        name: "Steinhaus Hall",
        latitude: 33.64641757311412,
        longitude: -117.84489568862256,
        rooms: [
            { name: "115", available: true },
            { name: "118", available: true },
            { name: "262", available: true },
            { name: "264", available: true },
            { name: "364", available: true },
            { name: "368", available: true },
            { name: "468", available: true },
            { name: "470", available: true }
        ]
    },
    {
        name: "Student Center",
        latitude: 33.64909423653421,
        longitude: -117.84223294730018,
        rooms: [
            { name: "G213", available: true },
            { name: "G215", available: true },
            { name: "G319", available: true },
            { name: "Starbucks", available: true }
        ]
    },
    {
        name: "Student Services",
        latitude: 33.64802899261571,
        longitude: -117.84232542032353,
        rooms: [
            { name: "105", available: true },
            { name: "106", available: true },
            { name: "240", available: true },
            { name: "250", available: true }
        ]
    },
    {
        name: "Studio Four",
        latitude: 33.650287097091734,
        longitude: -117.84573165093234,
        rooms: [
            { name: "108", available: false },
            { name: "110", available: false }
        ]
    },
    {
        name: "Humanities Gateway",
        latitude: 33.648251992362475,
        longitude: -117.84443361129894,
        rooms: [{ name: "Floor 1", available: true }]
    },
    {
        name: "Langson Library",
        latitude: 33.647368202328465,
        longitude: -117.84111867327755,
        rooms: [{ name: "All Floors", available: true }]
    },
    {
        name: "Social Science Tower",
        latitude: 33.646779818239835,
        longitude: -117.8401352886227,
        rooms: [{ name: "Floor 1", available: true }]
    },
    {
        name: "Donald Bren Hall",
        latitude: 33.64343371634265,
        longitude: -117.84205141745889,
        rooms: [{ name: "All Floors", available: true }]
    },
    {
        name: "Interdisciplinary Science and Engineering Building",
        latitude: 33.64319646016414,
        longitude: -117.84374780994303,
        rooms: [{ name: "All Floors", available: true }]
    },
    {
        name: "Reines Hall",
        latitude: 33.64427937024997,
        longitude: -117.84348467199575,
        rooms: [{ name: "All Floors", available: true }]
    },
    {
        name: "McGaugh Hall",
        latitude: 33.645230005285,
        longitude: -117.84475567796133,
        rooms: [{ name: "All Floors", available: true }]
    },
    {
        name: "Biological Sciences III",
        latitude: 33.64534573405722,
        longitude: -117.84578340543229,
        rooms: [{ name: "Floor 1", available: true }]
    },
    {
        name: "The Paul Merage School of Business",
        latitude: 33.64707143378149,
        longitude: -117.837820282872,
        rooms: [{ name: "Floor 1", available: true }]
    },
    {
        name: "Pippin Commons",
        latitude: 33.64504821560184,
        longitude: -117.83682715356913,
        rooms: [{ name: "Floor 1", available: true }]
    },
    {
        name: "Anteater Instruction and Research Building",
        latitude: 33.643012823108286,
        longitude: -117.83774859178519,
        rooms: [{ name: "Floor 1", available: true }]
    },
    {
        name: "Engineering Gateway",
        latitude: 33.64317699962084,
        longitude: -117.83960162596028,
        rooms: [{ name: "All Floors", available: true }]
    },
    {
        name: "The Anteatery",
        latitude: 33.6511269878,
        longitude: -117.84575379603787,
        rooms: [{ name: "Floor 1", available: true }]
    }
    // Add the rest of the entries in the same format
];

for (let i = 0; i < bathrooms.length; i++) {
    //console.log(bathrooms[i].latitude,bathrooms[i].longitude)
    // console.log(bathrooms[i].rooms)
    let popUpText;
    let adaCompliant;
    popUpText = bathrooms[i].name + "<br/>";
    for (let j = 0; j < bathrooms[i].rooms.length; j++){
        if (bathrooms[i].rooms[j].available){
                adaCompliant = "ADA Compliant"
            }
        else{
                adaCompliant = "Not ADA Compliant"
        }
        if (!isNaN(bathrooms[i].rooms[j].name.charAt(0))){
            popUpText += "Room " + bathrooms[i].rooms[j].name + ": " + adaCompliant
            popUpText += "<br/>"
            popUpText += calculateDistance(user_lat, user_long, bathrooms[i].latitude, bathrooms[i].longitude)
            popUpText += "<br/>"
        }
        else{
            popUpText += bathrooms[i].rooms[j].name + ": " + adaCompliant
            popUpText += "<br/>"
        }
    }
    L.marker([bathrooms[i].latitude,bathrooms[i].longitude], {icon: petrIcon}).addTo(uci_map).bindPopup(popUpText);
  }
