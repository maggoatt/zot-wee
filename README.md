Inspiration
The spark behind ZotWee originated in Logan and Maggie's ICS 31 lecture, located in PCB. Logan needed to wee but was unable to find a bathroom near him- an issue we realized is all too common among students at UCI, especially among new freshmen who are not familiar with campus- thus, ZotWee was born.

What it does
ZotWee finds the user's current location, highlighted by the red Petr (who needs to wee!). From there, the web application highlights all of the gender-neutral bathrooms on campus with a blue Petr (who is weeing!). With the press of a button, ZotWee finds the closest bathroom and highlights the most efficient walking path from the user's current location. Additionally, each blue Petr contains pop-up information regarding exact bathroom room locations and ADA-compliancy when clicked.

How we built it
We aggregated all the data on gender-neutral and ADA-compliant restrooms on campus into a JavaScript array. From there, using Google API, Google Directions API, and JavaScript, we uploaded hand-drawn Petr markers onto the map with HTML tags to describe the room locations and ADA accessibility.

Challenges we ran into
Coming into the hackathon, our team was already at a major disadvantage: our original fourth team member forgot to RSVP for ZotHacks after already being accepted, which left us to be paired with a random person. Our new prospective teammate texted us the night before that she just tested positive for Covid-19- we were down to three people. In a technical sense, our biggest struggle revolved around calculating the walking path to the nearest bathroom. We originally implemented Leaflet API's satellite maps feature for Zot Wee, which we realized after ~7 hours would not work because pedestrian paths are not an option. After attempting unsuccessfully to import Graphhopper to assist with walking paths, we decided to switch to Google Maps API. From there, with 3 hours left to go, we had to translate our former Leaflet algorithms to match Google Maps API's syntax.

Accomplishments that we're proud of
We are proud of the quick switch we made between Leaflet API and Google Maps API. As a group of 3 with absolutely no web development or API-integration experience, we learned so much about the front-end experience and debugging our project, and we definitely bonded as a team.

What we learned
We learned how to integrate APIs into our web applications, find locations and draw connections using Google Maps API and Google Directions API, and persevere through insane challenges.

What's next for ZotWee
In the future, we hope to implement a Google user account, which would allow users to log in through their Google emails. With accounts, we'll be able to collect data from users, such as their ratings on each bathroom. We'd also like to add more information to the pop-up descriptions for each bathroom by gathering more data of each bathroom.