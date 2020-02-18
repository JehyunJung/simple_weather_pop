import React from 'react';
import { StyleSheet, Text, View,StatusBar,SubTitle } from 'react-native';
import PropTypes from "prop-types"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions={
    Rain: {
        gradients: ["#00C6FB", "#005BEA"],
        title: "Rainy",
        subtitle: "Just be sure to take your umbrella when go out",
        iconName: "weather-rainy"
      },
    Clear: {
        gradients: ["#FF7300","#FEF253"],
        title: "Sunny",
        subtitle: "I's a nice weather to do outdoor stuffs",
        iconName: "weather-sunny"
      },
    Thunderstorm: {
        gradients: ["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Be carefull of Thunders",
        iconName: "weather-lightning"
      },
    Clouds: {
        gradients: ["#D7D2CC", "#304352"],
        title: "Cloud",
        subtitle: "Lots of clouds outside",
        iconName: "weather-cloudy"
      },
    Snow: {
        gradients: ["#7DE2FC", "#B9B6E5"],
        title: "Snowing",
        subtitle: "Watch out for freezed roads",
        iconName: "weather-snowy"
      },
    Drizzle: {
        gradients: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Slightly Raining",
        iconName: "weather-hail"
      },
    Mist: {
        gradients: ["#D7D2CC", "#304352"],
        title: "Mist",
        subtitle: "It's foggy rightnow, be carefull",
        iconName: "weather-fog"
      }
};
export default function Weather({ temp,condition }) {
    return (
        <LinearGradient
          colors={weatherOptions[condition].gradients}
          style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.half_container}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{`${temp}℃`}</Text>
            </View>
            <View style={{...styles.half_container,...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    half_container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 42,
        color:"white"
    },
    textContainer:{
        paddingHorizontal:20,
        alignItems:"flex-start"
    },
    title:{
        color:"white",
        fontSize:44,
        fontWeight:"300",
        marginBottom:10
    },
    subtitle:{
        color:"white",
        fontSize:24,
        fontWeight:"600"
    }
})