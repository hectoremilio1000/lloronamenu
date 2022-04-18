/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import Inicio from "../screens/Inicio";
import MenuEspanol from "../screens/MenuEspanol";
import {
  HomeParamList,
  MenuInglesStackParamList,
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import ProductDetailsScreen2 from "../screens/ProductDetailsScreen2";
import MenuIngles from "../screens/MenuIngles";
import ProductMenuScreen from "../screens/ProductMenuScreen";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Inicio"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Inicio"
        component={Inicio}
        options={({ navigation }: RootTabScreenProps<"Inicio">) => ({
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="MenuIngles"
        component={TabOneIngles}
        options={{
          title: "English Menu",
          tabBarIcon: ({ color }) => (
            <Entypo name="menu" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="menuEspanol"
        component={TabOneEspanol}
        options={{
          title: "Menú Español",
          tabBarIcon: ({ color }) => (
            <Entypo name="menu" size={24} color={color} />
          ),
        }}
      />
      {/* <BottomTab.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          title: "Cervezas Artesanales",
          tabBarIcon: ({ color }) => (
            <Ionicons name="beer" size={24} color={color} />
          ),
        }}
      /> */}
    </BottomTab.Navigator>
  );
}

const HomeStack = createNativeStackNavigator<HomeParamList>();

function TabOneEspanol() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="MenuEspanol"
        component={MenuEspanol}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="DetalleProducto"
        component={ProductDetailsScreen}
      />
      <HomeStack.Screen name="DetalleMenu" component={ProductMenuScreen} />
    </HomeStack.Navigator>
  );
}

const MenuInglesStack = createNativeStackNavigator<MenuInglesStackParamList>();

function TabOneIngles() {
  return (
    <MenuInglesStack.Navigator>
      <MenuInglesStack.Screen
        name="MenuInglesNuevo"
        component={MenuIngles}
        options={{ headerShown: false }}
      />
      <MenuInglesStack.Screen
        name="ProductDetailsScreen"
        component={ProductDetailsScreen2}
      />
      <MenuInglesStack.Screen name="DetailMenu" component={ProductMenuScreen} />
    </MenuInglesStack.Navigator>
  );
}
