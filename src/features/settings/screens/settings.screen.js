/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
import React, { useContext } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { SafeArea, Body } from "../../../components/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  margin-top: 50px;
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <Body>
      <SafeArea>
        <AvatarContainer>
          <Avatar.Icon size={100} icon="human" backgroundColor="#2182BD" />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <List.Section>
          <SettingsItem
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favourites")}
          />
          <SettingsItem
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </SafeArea>
    </Body>
  );
};
