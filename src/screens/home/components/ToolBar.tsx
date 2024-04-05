import {View, Text, Image} from 'react-native';
import React from 'react';
import {style} from '../Style';

export default function ToolBar() {
  const iconMenu = require('../../../assets/icons/menu2.png');
  const avatarImage = require('../../../assets/images/avatar.jpg');
  return (
    <View style={style.containerToolBar}>
      <View style={style.toolbar}>
        <Image style={style.icon} source={iconMenu} />
        <View>
          <Image style={[style.icon, style.avatar]} source={avatarImage} />
        </View>
      </View>

      <Text style={style.title}>Hello Adrian</Text>
      <Text style={style.subTitle}>Find your perfect job</Text>
    </View>
  );
}
