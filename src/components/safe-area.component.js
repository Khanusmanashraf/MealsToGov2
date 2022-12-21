/* eslint-disable prettier/prettier */
import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const isAndroid = Platform.OS === "android";

export const SafeArea = styled(SafeAreaView)`
  flex: 0.9;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) =>
    isAndroid ? props.theme.colors.bg.primary : "white"};
`;

export const SafeAreaFull = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) =>
    isAndroid ? props.theme.colors.bg.primary : "white"};
`;

export const Body = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
