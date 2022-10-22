# Google Maps API

I used Google Maps to create the Los Angeles Metro Map.
I checked their documentation to learn how to use the Maps JavaScript API to draw the lines on the map and to create the custom markers. To draw the lines I created an array of objects with the coordinates and the colors and for the makers I used the same pattern by creating an array with the coordinates and the description for each marker.
Instead of creating an Instance for each line I used a function that does the same job, and as an alternative of calling the function for every line I used the forEach method. Same for the markers but with a for loop.

# How to use the Map

Blue Line starts on 7th Street/Metro Center and it ends on Downtown Long Beach

Expo Line starts on 7th Street/Metro Center and it ends on Downtown Santa Monica

Purple Line starts on Union Station and it ends on Wilshire/Western

Red Line starts on Union Station and it ends on North Hollywood

Gold Line starts on Atlantic and it ends on APU/Citrus College

Green Line starts on Redondo Beach and it ends on Norwalk

When clicking on the markers, it shows the name for each station.
