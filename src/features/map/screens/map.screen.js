/* eslint-disable prettier/prettier */
import React, { useContext, useState, useEffect } from "react";
import { Callout, Marker } from "react-native-maps";
import { Text } from "react-native-paper";
import { Platform } from "react-native";

import { Search } from "./components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import {
  CompactImage,
  Item,
  CompactWebview,
  Map,
} from "../../../components/restaurant/compact-restaurant-info.styles";

const isAndroid = Platform.OS === "android";

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  const Image = isAndroid ? CompactWebview : CompactImage;

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                {
                  <Item>
                    <Image source={{ uri: restaurant.photos[0] }} />
                    <Text center variant="caption" numberOfLines={3}>
                      {restaurant.name}
                    </Text>
                  </Item>
                }
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
