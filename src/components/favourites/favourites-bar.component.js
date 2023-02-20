/* eslint-disable prettier/prettier */
import React from "react";

import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

import { FadeInView } from "../animations/fade.animation";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.styles";
import { Text } from "../typography/text.component";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return (
      <FadeInView>
        <NoFavouritesArea>
          <Text>No Favourites yet</Text>
        </NoFavouritesArea>
      </FadeInView>
    );
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <FadeInView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {favourites.map((restaurant) => {
            const key = restaurant.name;
            return (
              <Spacer key={key} position="left" size="medium">
                <TouchableOpacity
                  onPress={() =>
                    onNavigate("RestaurantDetail", {
                      restaurant,
                    })
                  }
                >
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            );
          })}
        </ScrollView>
      </FadeInView>
    </FavouritesWrapper>
  );
};
