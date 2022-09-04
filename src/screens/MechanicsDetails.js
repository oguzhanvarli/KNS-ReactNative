import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getAllCards } from '../network/store/features/cardSlice';
import { useSelector } from 'react-redux';
import CardDetail from '../components/CardDetail';

const MechanicsDetails = (prop) => {
  const mechanicName = prop.route.params.item;
  const cards = useSelector(getAllCards);
  const [data, setData] = useState([])
  useEffect(() => {
    if(cards){
      getCardsMechanic()
    }
  }, [])

  const getCardsMechanic = () => {
    //filering cards from mechanics name
    cards.forEach(card => {
      card.mechanics.filter(mechanic => {
        if(mechanic.name == mechanicName){
          setData(data => [...data, card])
        }
    })
    });
  }
  const renderCards = ({item}) => (
    <CardDetail item={item} onSelect={() => onSelect(item)} />
  );
  return (
    <View>
      <FlatList
          data={data}
          renderItem={renderCards}
        />
    </View>
  )
}

export default MechanicsDetails

const styles = StyleSheet.create({})