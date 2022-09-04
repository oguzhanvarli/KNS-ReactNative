import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const MechanicsCard = ({item, onSelect}) => {
  return (
    <TouchableOpacity onPress={() => onSelect()}>
      <View style={styles.container}>
        <Text style={styles.mechanics}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MechanicsCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        flexDirection: "row",
        borderColor: "grey",
        borderWidth: 2,
        marginBottom: 10,
        height: 60,
        alignItems: "center",
        borderRadius: 5,
        shadowColor: "black",
        shadowRadius: 1,
        elevation: 4,
      },
      mechanics: {
        flex: 1,
        fontSize: 18,
        fontWeight: "500",
        marginLeft: 15,
      },
});
