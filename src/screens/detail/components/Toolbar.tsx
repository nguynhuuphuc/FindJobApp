import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {style} from '../Style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {PropsStackDetail} from '../../navigation/Type';

export type PropsParam = {
  url: string;
  jobTitle: string;
  location: string;
  country: string;
};

export default function Toolbar({
  url,
  jobTitle,
  location,
  country,
}: PropsParam) {
  const navigation = useNavigation<PropsStackDetail>();
  const arrowBackIcon = require('../../../assets/icons/arrow_back/arrow_back.png');
  const shareIcon = require('../../../assets/icons/share/share.png');
  const companyIcon = require('../../../assets/icons/company/company.png');
  const locationOnIcon = require('../../../assets/icons/location_on/outline_location_on.png');

  const onBackPress = () => {
    navigation.pop();
  };
  return (
    <SafeAreaView style={[style.ml16, style.mr16, style.mt16, style.mb16]}>
      <View style={[style.toolBarContainer]}>
        <TouchableOpacity style={[style.btn]} onPress={() => onBackPress()}>
          <Image style={[style.icon]} source={arrowBackIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={[style.btn]}>
          <Image style={[style.icon]} source={shareIcon} />
        </TouchableOpacity>
      </View>

      <View style={[style.containerHeader, style.mt16]}>
        <Image
          style={[style.logoCompany]}
          source={url != null ? {uri: url} : companyIcon}
        />
        <Text style={[style.titleJob, style.secondaryColor, style.mt16]}>
          {jobTitle}
        </Text>
        <View style={[style.mt16, style.containerLocationCompany]}>
          <Text style={[style.fontBold, style.secondaryColor]}>
            {location}/
          </Text>
          <Image style={[style.icon20]} source={locationOnIcon} />
          <Text style={[style.secondaryColor]}>{country}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
