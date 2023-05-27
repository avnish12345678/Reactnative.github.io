import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const HomeScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Get user's current location
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ latitude, longitude });
      },
      error => {
        console.log('Error getting location:', error);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (
    <View>
      {currentLocation && (
        <MapView
          style={{ width: '100%', height: 300 }}
          region={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      )}
      <Text>Latitude: {currentLocation?.latitude}</Text>
      <Text>Longitude: {currentLocation?.longitude}</Text>
    </View>
  );
};

export default HomeScreen;
