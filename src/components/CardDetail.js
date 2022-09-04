import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import React, {useRef} from 'react';
import GestureFlipView from 'react-native-gesture-flip-card';

const CardDetail = props => {
  const detail = props.item;
  const viewRef = useRef();
  //card front side
  const renderFront = () => {
    return (
      <View style={styles.frontStyle}>
        <Image style={styles.image} source={{uri: detail.img}} />
        <View>
          <Text style={styles.title}>{detail.name}</Text>
          <Text style={styles.artist}>{detail.artist}</Text>
        </View>
        <Text style={styles.attack}>Attack:{detail.attack}</Text>
      </View>
    );
  };
  //card back side
  const renderBack = () => {
    return (
      <View style={styles.backStyle}>
        <View style={styles.secondContainer}>
          <Text style={styles.description}>Card Set:</Text>
          <Text style={styles.value}>{detail.cardSet}</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.description}>Player Class:</Text>
          <Text style={styles.value}>{detail.playerClass}</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.description}>Rarity: </Text>
          <Text style={styles.value}>{detail.rarity}</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.description}>Health: </Text>
          <Text style={styles.value}>{detail.health}</Text>
        </View>
        <View style={styles.secondContainer}>
          <Text style={styles.description}>Cost: </Text>
          <Text style={styles.value}>{detail.cost}</Text>
        </View>
        <View style={styles.mechanic}>
          <Text style={styles.description}>Mechanic:</Text>
          {detail.mechanics?.map((mechanic, key) => (
            <View key={key}>
              <Text style={styles.value}>{mechanic.name}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight underlayColor={'#5F9EA0'} onPress={() => viewRef.current.flipLeft()}>
        <GestureFlipView
          width={400}
          height={200}
          ref={ref => (viewRef.current = ref)}>
          {renderFront()}
          {renderBack()}
        </GestureFlipView>
      </TouchableHighlight>
    </View>
  );
};

export default CardDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    margin: 20,
  },
  secondContainer: {
    flexDirection: 'row',
    marginTop: 12,
    marginLeft: 20,
  },
  frontStyle: {
    width: 400,
    height: 200,
    backgroundColor: '#5F9EA0',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  backStyle: {
    width: 400,
    height: 200,
    backgroundColor: '#6495ED',
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
  },
  artist: {
    color: 'white',
    fontSize: 15,
  },
  attack: {
    color: 'red',
    fontSize: 23,
    position: 'absolute',
    right: 50,
    top: 20,
  },
  description: {
    color: '#ADFF2F',
    fontSize: 18,
    fontWeight: '500',
  },
  value: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 5,
    marginTop: -2,
  },
  mechanic: {
    position: 'absolute',
    right: 40,
    top: 40,
  },
});
