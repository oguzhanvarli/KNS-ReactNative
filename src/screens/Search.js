import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {baseService} from '../network/services/baseService';
import Input from '../components/Input';
import {ActivityIndicator} from 'react-native-paper';
import MechanicsCard from '../components/MechanicsCard';
import CardDetail from '../components/CardDetail';

const Search = () => {
  const [data, setData] = useState([]);
  const [noData, setNoData] = useState(false)
  const [loading, setLoading] = useState(false);

  const SearchCard = async (word) => {
    setNoData(false)
    try {
      //end point allow 2 or more letters.
      if (word.length > 1) {
        setLoading(true);
        let response = await baseService.get(`/cards/search/${word}`);
        setData(response);
      }
    } catch (error) {
      console.log('Searching Error', error);
      if(error.response.data.error == 404){
        setNoData(true)
      }
    } finally {
      setLoading(false);
    }
  };
  const renderCards = ({item}) => (
    <CardDetail item={item} />
  );
  
  return (
    <SafeAreaView>
      <Input
        icon={'search'}
        text={'Search...'}
        onChangeText={text => SearchCard(text.nativeEvent.text)}
      />
      {loading ? (
        <ActivityIndicator
          style={styles.indicator}
          animating={loading}
          color="blue"
          size="large"
        />
      ) : 
      (!noData ? <FlatList
        data={data}
        renderItem={renderCards}
      />: <Text>Card Not Found</Text>)
      }
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
