import {View, Text, TextInput, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {style} from '../Style';

export default function Search() {
  const iconSearch = require('../../../assets/icons/search.png');
  var contentSearch = [
    {
      title: 'Full-Time',
      isChecked: true,
    },
    {
      title: 'Part-Time',
      isChecked: false,
    },
    {
      title: 'Contactor',
      isChecked: false,
    },
  ];
  const [filterContent, setFilterContent] = useState(contentSearch);

  const onPressFilter = (indexSelected: number) => {
    const newContentSearch = contentSearch.map((item, index) => {
      if (index == indexSelected) {
        item.isChecked = true;
      } else {
        item.isChecked = false;
      }
      return item;
    });
    setFilterContent(newContentSearch);
  };

  const renderFilter = () =>
    filterContent.map((item, index) => (
      <TouchableOpacity
        onPress={() => onPressFilter(index)}
        key={index}
        style={[style.btnFilter, item.isChecked ? null : style.visible]}>
        <Text style={[item.isChecked ? style.textEnable : null]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    ));
  return (
    <View>
      {/* Search */}
      <View style={style.containerSearch}>
        <TextInput
          style={style.inputSearch}
          placeholder="Where are you looking for?"
          placeholderTextColor={'silver'}
        />
        <TouchableOpacity style={style.btn}>
          <Image style={[style.icon, style.searchIcon]} source={iconSearch} />
        </TouchableOpacity>
      </View>

      {/* Filter */}
      <View style={style.containerFilter}>{renderFilter()}</View>
    </View>
  );
}
