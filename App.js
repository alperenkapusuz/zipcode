import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { iller } from "./src/iller";
import SelectDropdown from "react-native-select-dropdown";

const App = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [pk, setPk] = useState(0);
  const dataHandler = async (plaka) => {
    await axios
      .get(`https://api.ubilisim.com/postakodu/il/${plaka}`)
      .then((response) => setSelectedCity(response.data))
      .catch((err) => console.error(err));
  };

  function groupBy(arr, prop) {
    const map = new Map(Array.from(arr, (obj) => [obj[prop], []]));
    arr.forEach((obj) => map.get(obj[prop]).push(obj));
    console.log(Array.from(map.values()));
    return Array.from(map.values());
  }

  return (
    <View>
      <SelectDropdown
        data={iller}
        onSelect={(selectedItem, index) => {
          dataHandler(selectedItem[0]);
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          return item;
        }}
      />
      {selectedCity != null && (
        <View>
          <SelectDropdown
            data={Array.from(
              new Set(
                selectedCity.postakodu
                  .map((x) => x.ilce)
                  .forEach((x) => console.log(x))
              )
            ).map((x) => {
              {
                ilce: x;
              }
            })}
            onSelect={(selectedItem, index) => {
              //setSelectedDistrict(selectedItem);
              console.log(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              console.log("ITEM " + item);
              return item.ilce;
            }}
          />
        </View>
      )}
      {/* {selectedDistrict != null && (
        <View>
          <SelectDropdown
            data={selectedDistrict}
            onSelect={(selectedItem, index) => {
              setSelectedDistrict(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              setPk(item.pk);
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return `${item.ilce} - ${item.semt_bucak_belde} ${item.mahalle}`;
            }}
          />
        </View>
      )} */}
      {pk != 0 && <Text>{pk}</Text>}
    </View>
  );
};

export default App;
