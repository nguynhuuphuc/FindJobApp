import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {style} from '../Style';

export default function ApplyForJob() {
  const favoriteIcon = require('../../../assets/icons/favorite/favorite_border.png');
  return (
    <View style={[style.containerApplyForJob, style.p16]}>
      <TouchableOpacity style={[style.btnHeart]}>
        <Image
          style={[style.icon20, style.colorIconHeart]}
          source={favoriteIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={[style.btnApplyForJob, style.ml16]}>
        <Text style={[style.textSelected]}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  );
}
