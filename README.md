![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2022

- MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
- [Entry form template](ENTRYFORM.md)
- [Starter kit instructions](STARTERKIT_INSTRUCTIONS.md)
  

### ⟹ [Insert your documentation here](ENTRYFORM.md) <<

## Intro
The value of real-time systems came into focus in 2020 as companies responded to the disruptions due to COVID-19. Nowadays, people want to have information at hand efficiently, this creates confidence in technological users, the information must be in real time, the actual generation wants the information, right now. 

[Read more](https://www.rtinsights.com/real-time-technology-trends-that-will-drive-2021-innovation/)

## Features

### Tracking Feature

HTML 5 Websockets provides for a full duplex bidirectional channel for communications over the web through a Transport layer socket. As described in the websocket protocol RFC 6455.

Building applications like location based intelligence, Geo fencing, track and trace becomes all the more simplified with HTML5 Websockets allowing developers to share location updates in real time and create amazing work flows with the real time data.

With that in mind we used [Pusher.com](https://pusher.com/?utm_source=google_ads&utm_medium=homepage&utm_campaign=comp_brand_search&gclid=CjwKCAiAsYyRBhACEiwAkJFKooePiRSR-4pF8YL97zmlWVcxuTY5GS522Pb6ojcYwHZB2p6ZDOQNXBoCmTEQAvD_BwE) as a Websockets library because is it easy to use and implement with the short time for this hackathon. It is usefull to demo our propouse.

Our workflow is easy to understand. Websockets provides a channel to broadcast to the users the information about their package tracking with the following events:

* On Track: Send the deliver man location in real-time, the idea is that each delivery man have a mobile application that sends the geo location.
* On Order Completed: This event notify to the webiste's user that the order is completed and delivered at the door.

This workflow with more work will be more complex and fits the business needs but for the demo, I'm very proud of what we archived.

Future improvements:

* On Cancelled Order: You will be notified if your package could not be able delivery.
* On Flight Status Changed: You could track the status of your package if it is on way in flight, or if the package is in customs.

As you can see we can add more rules and events in your system to make it better.