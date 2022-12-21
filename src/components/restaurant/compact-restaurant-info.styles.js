/* eslint-disable prettier/prettier */
import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import MapView from "react-native-maps";

import { Text } from "../typography/text.component";

export const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

export const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const CompactRestaurantInfo = ({ restaurant }) => {
  return (
    <Item>
      <CompactImage source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
