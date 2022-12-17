import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { iller } from "./assets/data/iller";
import SelectDropdown from "react-native-select-dropdown";

const App = () => {
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedNeighbourhood, setSelectedNeighbourhood] = useState();
  const [pk, setPk] = useState(0);
  const dataHandler = async (plaka) => {
    await axios
      .get(`https://api.ubilisim.com/postakodu/il/${plaka}`)
      .then((response) => setSelectedCity(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (
      selectedCity == null &&
      selectedDistrict == null &&
      selectedNeighbourhood == null
    ) {
      return;
    }
    let temp = selectedCity.postakodu.filter(
      (x) => x.ilce == selectedDistrict && x.mahalle == selectedNeighbourhood
    )[0].pk;
    setPk(temp);
  }, [selectedNeighbourhood]);

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
              new Set(selectedCity.postakodu.map((x) => x.ilce))
            )}
            onSelect={(selectedItem, index) => {
              setSelectedDistrict(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
        </View>
      )}
      {selectedDistrict != null && (
        <View>
          <SelectDropdown
            data={Array.from(
              new Set(
                selectedCity.postakodu
                  .filter((x) => x.ilce == selectedDistrict)
                  .map((x) => x.mahalle)
              )
            )}
            onSelect={(selectedItem, index) => {
              setSelectedNeighbourhood(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return `${item}`;
            }}
          />
        </View>
      )}
      {pk != 0 && (
        <Text>
          {`${selectedCity.postakodu[0].il} ${selectedDistrict} ${selectedNeighbourhood} ${pk}`}
        </Text>
      )}
    </View>
  );
};

export default App;
