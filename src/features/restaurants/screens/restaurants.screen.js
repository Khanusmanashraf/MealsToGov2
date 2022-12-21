import React, { useContext, useState } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/safe-area.component";
import { Body } from "../../../components/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { Search } from "../components/search.component";
import { FavouritesBar } from "../../../components/favourites/favourites-bar.component";

const ScreenLoader = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <Body>
      <SafeArea>
        {isLoading && (
          <ScreenLoader>
            <ActivityIndicator
              size={50}
              marginLeft={-25}
              animating={true}
              color={Colors.blue300}
            />
          </ScreenLoader>
        )}
        <Spacer position="top" size="small">
          <Search
            isFavouritesToggled={isToggled}
            onFavouritesToggle={() => setIsToggled(!isToggled)}
          />
          {isToggled && (
            <FavouritesBar
              favourites={favourites}
              onNavigate={navigation.navigate}
            />
          )}
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoCard restaurant={item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{ padding: 16 }}
          />
        </Spacer>
      </SafeArea>
    </Body>
  );
};
