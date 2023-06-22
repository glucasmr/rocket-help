import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Input,
  InputLeftElement,
  Icon,
  Pressable,
  Button,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import { Ionicons, Fontisto } from "@expo/vector-icons";

export const theme = extendTheme({
  colors: {
    loginScreen: {
      bg: "#202024",
      inputBg: "#121214",
      inputColor: "#7C7C8A",
      btn: "#E51C44",
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Center _dark={{ bg: "loginScreen.bg" }} px={4} flex={1}>
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="md">Acesse sua conta</Heading>
          <Input
            w="100%"
            variant="filled"
            _dark={{
              bg: "loginScreen.inputBg",
              placeholderTextColor: "loginScreen.inputColor",
            }}
            InputLeftElement={
              <Icon
                as={<Fontisto name="email" />}
                size={5}
                ml="2"
                color="loginScreen.inputColor"
              />
            }
            placeholder="E-mail"
          />
          <Input
            w="100%"
            variant="filled"
            _dark={{
              bg: "loginScreen.inputBg",
              placeholderTextColor: "loginScreen.inputColor",
            }}
            InputLeftElement={
              <Icon
                as={<Ionicons name="key-outline" size={24} color="black" />}
                size={5}
                ml="2"
                color="loginScreen.inputColor"
              />
            }
            placeholder="Senha"
          />
        </VStack>
        <Button
          size="lg"
          w="100%"
          _dark={{ bg: "loginScreen.btn" }}
          style={{ marginTop: 25 }}
        >
          Entrar
        </Button>
      </Center>
    </NativeBaseProvider>
  );
}