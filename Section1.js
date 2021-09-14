import React, { useState } from "react";
import {
   StyleSheet,
  Text,
  View,
} from "react-native";

export default function Section1({title}){
    return (
        <View>
            <Text>{title}</Text>

            <View style={[styles.firstContainer]}>
            <View style={[styles.firstShape]}>
              <Text style={{ color: "black" }}>1</Text>
            </View>
            <View style={[styles.firstShape]}>
              <Text style={{ color: "black" }}>2</Text>
            </View>
            <View style={[styles.firstShape]}>
              <Text style={{ color: "black" }}>3</Text>
            </View>
          </View>
        </View>
      
    )
  }



const styles = StyleSheet.create({
    firstContainer: {
      paddingTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
    },

    firstShape: {
      backgroundColor: "gray",
      width: 40,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  