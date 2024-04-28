import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ImageBackground, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import darkModeBackgroundImage from '../assets/images/bgdark.png';
import lightModeBackgroundImage from '../assets/images/bglight.png';

const MainScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [showCurrentWeather, setShowCurrentWeather] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleLocationDetection = () => {
    console.log('Location detection button pressed');
  };

  const toggleView = () => {
    setShowCurrentWeather(!showCurrentWeather);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ImageBackground
      source={isDarkMode ? darkModeBackgroundImage : lightModeBackgroundImage}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <View className="flex-1 justify-center items-center p-4">
        <View className="w-full flex-row items-center mb-4">
          <TextInput
            className={`flex-1 h-10 border border-gray-300 px-2 mr-2 ${isDarkMode ? 'text-white' : 'text-black'}`}
            placeholder="Enter city name"
            value={searchText}
            onChangeText={setSearchText}
            onSubmitEditing={() => console.log('Search submitted:', searchText)}
          />
          <Button title="Detect Location" onPress={handleLocationDetection} />
        </View>

        {showCurrentWeather ? (
          <View className="items-center mb-4">
            <Text className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>New York, USA</Text>
            <Text className={`text-4xl mb-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>25°C</Text>
            <Text className={`text-lg mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Sunny</Text>
            <Text className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Humidity: 40%</Text>
            <Text className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Wind Speed: 10 km/h</Text>
            <Text className={`text-base ${isDarkMode ? 'text-white' : 'text-black'}`}>Pressure: 1020 hPa</Text>
          </View>
        ) : (
          <View className="items-center mb-4">
            <Text className={`text-white ${isDarkMode ? 'text-white' : 'text-black'}`}>Forecast data will be displayed here</Text>
          </View>
        )}

        <View className="flex-row items-center justify-between w-full mb-4">
          <Button
            title={showCurrentWeather ? 'Show Forecast' : 'Show Current Weather'}
            onPress={toggleView}
          />
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: '#767577' }}
            thumbColor={isDarkMode ? '#f4f3f4' : '#f4f3f4'}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // Other styles...
});

export default MainScreen;