/* eslint-disable prettier/prettier */
import React from "react";
import { View, ActivityIndicator } from "react-native";
import styled from "styled-components";

const Loader = styled(View)`
  justify-content: "center";
  margin-top: 300px;
`;

export const LoadingScreen = () => {
  return (
    <Loader>
      <ActivityIndicator size="large" color="black" />
    </Loader>
  );
};
