import React from 'react';
import {TextInput as RNTextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Input({icon, text, onChangeText}) {
  return (
    <View>
      <View style={[styles.inputContainer]}>
        <View style={styles.iconContainer}>
          <Icon name={icon} size={16} />
        </View>
        <View style={styles.inputSecondContainer}>
          <RNTextInput
            onChange={onChangeText}
            underlineColorAndroid="transparent"
            placeholderTextColor="rgba(34, 62, 75, 0.7)"
            placeholder={text}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 8,
  },
  iconContainer: {
    padding: 8,
  },
  inputSecondContainer: {
    flex: 1,
  },
  errorMessage: {
    color: 'red',
  },
});
