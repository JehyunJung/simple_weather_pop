import React from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import Loading from "./Components/Loading"
import Weather from "./Components/Weather"
import * as Location from "expo-location"

import axios from "axios"
import { getAppLoadingLifecycleEmitter } from 'expo/build/launch/AppLoading';

const API_KEY="d738169def74a87afefc5866ac16f06d"

export default class App extends React.Component {
  state={
    isLoading:true,
  }
  getWeather=async(latitude,longitude)=>{
    const {data:{main:{temp},weather}}= await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    console.log(temp,weather[0].main)
    this.setState({isLoading:false,temp:temp,condition:weather[0].main})
  }
  getLocation = async () => {
    try {
      const response = await Location.requestPermissionsAsync()
      const {coords:{latitude, longitude}} = await Location.getCurrentPositionAsync()
      this.getWeather(latitude,longitude)
      //this.setState({isLoading:false})
    } catch (error) {
      Alert.alert(error)
    }

  }
  componentDidMount() {
    this.getLocation()
  }

  render() {
    const { isLoading,temp,condition }=this.state
    return isLoading ? <Loading />: <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}

