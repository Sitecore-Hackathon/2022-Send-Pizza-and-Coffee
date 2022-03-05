import { useEffect, useCallback, useState } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import './Tracking.css';
import apiService from "../services/ApiService";
import { Store } from 'react-notifications-component';
import { transformServerDateToDate } from "../hooks/transformServerDateToDate";
import Pusher from 'pusher-js';
import Axios from "axios";
const _ = require('lodash');

export const Tracking = (
        {   trackingUrl,
            homePinUrl, 
            deliveryPinUrl, 
            restaurantPinUrl, 
            formHeadline, 
            formCopy,
            formTrackingNumber,
            formTrackingNumberPlaceholder,
            formSubmitButton,
            resultStatus,
            resultArrivedTime,
            resultDeliveryBy,
            resultPlate,
            googleMapsKey,
            pusherKey,
            pusherCluster,
            simulationUrl
        }
    ) => {
    const [showMap, setShowMap] = useState(false);
    const [map, setMap] = useState();
    const [element, setElement] = useState(null);
    const [zoom, setZoom] = useState(15); // initial zoom
    const [restaurantMarket, setRestaurantMarket] = useState(null);
    const [homeMarket, setHomeMarket] = useState(null);
    const [deliveryMarket, setDeliveryMarket] = useState(null);
    const [trackingInfo, setTrackingInfo] = useState(null);
    const [pusherChannel, setPusherChannel] = useState(null);
    const [pusherData, setPusherData] = useState(null);
    const [pusherData2, setPusherData2] = useState(null);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleMessageSent = useCallback((data) => {
        setIsCompleted(true);
        var track = _.clone(trackingInfo);
        track.status = "Completed";
        setTrackingInfo(track);
      }, [trackingInfo]);
    
    const [center, setCenter] = useState({
        lat: -0.176204,
        lng: -78.480334,
      });

    useEffect(() => {
        initPusher();
    }, []);

    useEffect(() => {
        if (element && !map) {
            var googleMap = new window.google.maps.Map(element, {});
            setMap(googleMap);
            var deliveryPin = initMap(googleMap);
        }
      }, [element]);

    const initPusher = () => {
        console.log("Pusher");
        // Enable pusher logging - don't include this in production
        Pusher.logToConsole = true;

        var pusher = new Pusher(pusherKey, {
            cluster: pusherCluster
        });

        var channel = pusher.subscribe('send-pizza');
        setPusherChannel(channel);
    }

    // TRIGGERED ON CHANGE IN "data"
    useEffect(() => {
        console.log("Updated data : ", pusherData);
        if ( pusherChannel && pusherChannel.bind ) {
            pusherChannel.unbind("onTrack");
            pusherChannel.bind("onTrack", (pusherData) => {
                // USE UPDATED "data" here
                console.log(deliveryMarket);
                if(deliveryMarket)
                {
                    console.log("onTrack2: ", pusherData);
                    deliveryMarket.setPosition({
                        lat: pusherData.latitude,
                        lng: pusherData.longitude 
                    })
                    
                }
                setPusherData(pusherData)
            });

            
            pusherChannel.bind('orderCompleted', handleMessageSent);

            return ()  => {
                pusherChannel.unbind("orderCompleted");
            }
        }
    }, [pusherChannel, pusherData, pusherData2 , trackingInfo, handleMessageSent]);

    useEffect(() => {
        if(map && trackingInfo && homeMarket && restaurantMarket)
        {
            updateMarkers();
        }
    }, [homeMarket,restaurantMarket, trackingInfo])

    const initMap = (googleMap) => {
        googleMap.setZoom(zoom);
        googleMap.setCenter(center);
        var deliveryManMarker = new google.maps.Marker();
        deliveryManMarker.setIcon({ url: deliveryPinUrl,   scaledSize: new google.maps.Size(50, 50)});
        deliveryManMarker.setMap(googleMap);
        setDeliveryMarket(deliveryManMarker);

        var restaurantMarket = new google.maps.Marker();
        restaurantMarket.setIcon({url: restaurantPinUrl, scaledSize: new google.maps.Size(50,50)});
        restaurantMarket.setMap(googleMap);
        setRestaurantMarket(restaurantMarket);

        var homeMarker = new google.maps.Marker();
        homeMarker.setIcon({url: homePinUrl, scaledSize: new google.maps.Size(50,50)});
        homeMarker.setMap(googleMap);
        setHomeMarket(homeMarker);

        return deliveryManMarker;
    }

    const updateMarkers = () => {
        homeMarket.setPosition({
            lat: trackingInfo.destination.location.latitude,
            lng:  trackingInfo.destination.location.longitude
        })

        restaurantMarket.setPosition({
            lat: trackingInfo.source.location.latitude,
            lng: trackingInfo.source.location.longitude
        })

        if(deliveryMarket)
        {
            deliveryMarket.setPosition({
                lat: trackingInfo.currentPosition.latitude,
                lng: trackingInfo.currentPosition.longitude
            })

            map.setCenter({
                lat: trackingInfo.currentPosition.latitude,
                lng: trackingInfo.currentPosition.longitude
            })
        }
    }

    const handleSubmit = (event)  => {
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target);
        const trackingNumber = formData.get('trackingNumber');
        var data = {
            trackingNumber: trackingNumber
        }
        apiService.postRequest({url: trackingUrl,data: data})
            .then((data) => {
                const { status, data: item} = data;
                console.log(item);
                if(status == 200)
                {
                    setTrackingInfo(item);
                    setShowMap(true);
                }
            }).catch((error) => {
                console.log(error);
                Store.addNotification({
                    title: "Ops! somethig gets wrong!",
                    message: "Service unavaible please, try it later.",
                    type: "danger",
                    container: "bottom-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true
                    }
                  });
            
            })
    }

    const simulate = ()  => {
        apiService.get(simulationUrl).then((data) => {
            console.log(data);
        }).catch(err => {
            console.error(err);
        })
    }

    return (
        <>
          <section className="tracking-section">
              <div className="container-fluid">
            <a id="track-my-pizza"></a>
        {
            showMap &&  trackingInfo &&  <Wrapper apiKey={googleMapsKey}>
              
                <div className="row">
                    <div className="col-lg-4 mx-auto d-flex justify-content-center flex-column">
                      <div className="card d-flex justify-content-center p-4 shadow-lg">
                         <div className="text-center">
                         <h3 className="text-gradient text-primary">Tracking #: {trackingInfo.trackingNumber}</h3> 
                            <p className="mb-0">
                                <b>{resultStatus}: </b>  
                                { isCompleted &&  <span className="badge bg-gradient-success">{trackingInfo.status}</span> }
                                { !isCompleted &&  <span className="badge bg-gradient-info">{trackingInfo.status}</span> }
                            </p>
                            <p className="mb-0">
                                <b>{resultArrivedTime}: </b> {transformServerDateToDate(trackingInfo.estimationTime)}
                            </p>
                            <p className="mb-0">
                                <b>{resultDeliveryBy}:</b> {trackingInfo.deliveryMan.fullName} ({trackingInfo.deliveryMan.rating} stars)
                            </p>
                            <p className="mb-0">
                                <b>{resultPlate}:</b> {trackingInfo.deliveryMan.plate}
                            </p>
                            <div className="col-md-6 ps-md-2 py-3">
                                    <button type="button" className="btn bg-gradient-primary mt-3 mb-0" onClick={simulate}>Simulate</button>
                            </div>
                         </div>
                      </div>
                    </div>
                    <div className="col-lg-8 mx-auto d-flex justify-content-center flex-column">
                    <div className="card d-flex justify-content-center p-4 shadow-lg">
                    <div ref={setElement} className="google-maps" />
                    </div>
                    </div>
                 </div>     
            </Wrapper>
       }
        {
            !showMap && 
           
                <div className="container py-4">
                    <div className="row">
                    <div className="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                        <div className="card d-flex justify-content-center p-4 shadow-lg">
                        <div className="text-center">
                            <h3 className="text-gradient text-primary">{formHeadline}</h3>
                            <p className="mb-0">
                             {formCopy }
                            </p>
                        </div>
                        <div className="card card-plain">
                            <form role="form" onSubmit={handleSubmit}>
                            <div className="card-body pb-2">
                                <div className="row">
                                <div className="col-md-6">
                                    <label>{formTrackingNumber}</label>
                                    <div className="input-group mb-4">
                                    <input name="trackingNumber" className="form-control" placeholder={formTrackingNumberPlaceholder} aria-label="Tracking Number" type="text" />
                                    </div>
                                </div>
                                <div className="col-md-6 ps-md-2 py-3">
                                    <button type="submit" className="btn bg-gradient-primary mt-3 mb-0">{formSubmitButton}</button>
                                </div>
                                </div>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        }
            </div>
        </section>
       
        </>
    );
}