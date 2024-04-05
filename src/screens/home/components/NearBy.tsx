import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../Style';
import {FlatList} from 'react-native-gesture-handler';
import {Params, fetchPopularJob} from '../../../api/RapidApi';
import {useNavigation} from '@react-navigation/native';
import {PropsStackDetail} from '../../navigation/Type';
import {NAME_NAVIGATION} from '../../common/Const';

export default function NearBy() {
  const navigation = useNavigation<PropsStackDetail>();
  const [dataApi, setDataApi] = useState();
  const companyIcon = require('../../../assets/icons/company/company.png');
  const params: Params = {
    query: 'react',
    page: '1',
    num_pages: '1',
  };
  useEffect(() => {
    fetchPopularJob(params).then(data => setDataApi(data));
  }, []);

  const onPress = (item: any) => {
    navigation.push(NAME_NAVIGATION.DETAIL, item);
  };

  const renderItem = (item: any) => {
    return (
      <TouchableOpacity
        style={[style.containerItem, style.mt16]}
        onPress={() => onPress(item)}>
        <View style={[style.btn, style.bgLightGray]}>
          <Image
            style={[style.icon]}
            source={
              item.employer_logo !== null || item.employer_logo != undefined
                ? {uri: item.employer_logo}
                : companyIcon
            }
          />
        </View>
        <View style={[style.ml8]}>
          <Text style={[style.titleItemNearBy]}>{item.job_title}</Text>
          <Text>{item.job_employment_type}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[style.mt16, style.ml8, style.mr8]}>
      <View style={[style.containerNearBy, style.mt16]}>
        <Text style={style.titleNearBy}>Nearby Jobs</Text>
        <Text>Show all</Text>
      </View>
      <FlatList
        style={style.height200}
        data={dataApi}
        renderItem={({item}) => renderItem(item)}
        contentContainerStyle={{gap: 20}}
      />
    </View>
  );
}
