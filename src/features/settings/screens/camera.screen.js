/* eslint-disable prettier/prettier */
import React, { useRef, useState, useEffect } from "react";
import { Camera, CameraType } from "expo-camera";
import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";

import { Text } from "../../../components/typography/text.component";
import { SafeAreaFlip } from "../../../components/safe-area.component";
import { LoadingScreen } from "../../loading.screen";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const ButtonContainer = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;

const FlipButton = styled(TouchableOpacity)`
  align-items: flex-end;
`;

export const BackButton = styled(TouchableOpacity)`
  align-items: flex-start;
`;

export const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();
  const [type, setType] = useState(CameraType.back);

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      <View>{photo}</View>;
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <LoadingScreen />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera ref={(camera) => (cameraRef.current = camera)} type={type}>
        <SafeAreaFlip>
          <ButtonContainer>
            <BackButton onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 26, color: "white" }}>Back</Text>
            </BackButton>
            <FlipButton
              onPress={() => {
                setType(
                  type === CameraType.back ? CameraType.front : CameraType.back
                );
              }}
            >
              <Text style={{ fontSize: 26, color: "white" }}>Flip</Text>
            </FlipButton>
          </ButtonContainer>
        </SafeAreaFlip>
      </ProfileCamera>
    </TouchableOpacity>
  );
};
