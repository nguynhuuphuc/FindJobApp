import {View, Text} from 'react-native';
import React from 'react';
import ToolBar from './components/ToolBar';
import Search from './components/Search';
import PopularJob from './components/PopularJob';
import NearBy from './components/NearBy';

export default function HomePage() {
  return (
    <View style={{flex: 1}}>
      <ToolBar />
      <Search />
      <PopularJob />
      <NearBy />
    </View>
  );
}
