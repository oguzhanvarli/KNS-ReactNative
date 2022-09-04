import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';
import React, {useEffect, useState} from 'react';
import MechanicsCard from '../components/MechanicsCard';
import {ActivityIndicator} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCards,
  getAllCards,
  getStatus,
} from '../network/store/features/cardSlice';

const Home = ({navigation}) => {
  const cards = useSelector(getAllCards);
  const status = useSelector(getStatus);
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCards());
    }
  }, []);

  useEffect(() => {
    if (status === 'succeeded') {
      getCardsUnique();
    }
  }, [cards]);

  const getCardsUnique = async () => {
    //getting unique mechanics name
    let mechanics = []
    cards.forEach(card => {
        card.mechanics.forEach(mechanic => {
            mechanics.push(mechanic.name)
        })
    });
    let uniqueMechanics = [...new Set(mechanics)];
    setData(uniqueMechanics);
    setLoading(false);
  };

  const renderMechanics = ({item}) => (
    <MechanicsCard item={item} onSelect={() => onSelect(item)} />
  );
  const onSelect = (item) => {
    navigation.navigate('MechanicDetails',{item});
  };
  const goSearch = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator animating={loading} color="blue" size="large" />
        </View>
      ) : (
        <>
        <Text style={styles.title}>Mechanics List</Text>
        <FlatList
          ListHeaderComponent={
            <TouchableOpacity style={styles.buttonContainer}>
              <Button
                style={styles.button}
                title="Search"
                onPress={() => goSearch()}
              />
            </TouchableOpacity>
          }
          data={data}
          renderItem={renderMechanics}
        />
        </>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    textAlign: 'center',
    display:'flex',
    fontSize: 23,
    fontWeight: 'bold',
    marginVertical: 15
  },
  buttonContainer: {
    marginHorizontal: 150,
    marginVertical: 15,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
