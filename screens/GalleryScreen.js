// screens/GalleryScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('GalleryApp.db');

function GalleryScreen() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM images',
        [],
        (_, { rows }) => {
          const data = [];
          for (let i = 0; i < rows.length; i++) {
            data.push(rows.item(i));
          }
          setImages(data);
        },
        (tx, error) => {
          console.error(error);
        }
      );
    });
  }, []);

  return (
    <View>
      <Text>Gallery Screen</Text>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.uri }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default GalleryScreen;
