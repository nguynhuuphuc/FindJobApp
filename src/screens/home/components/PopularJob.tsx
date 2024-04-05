import {View, Text, Image, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from '../Style';
import {Params, fetchPopularJob} from '../../../api/RapidApi';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {PropsStackDetail} from '../../navigation/Type';
import {NAME_NAVIGATION} from '../../common/Const';

export default function PopularJob() {
  const navigation = useNavigation<PropsStackDetail>();
  const [dataApi, setDataApi] = useState();

  const companyIcon = require('../../../assets/icons/company/company.png');

  const params: Params = {
    query: 'java',
    page: '1',
    num_pages: '12',
  };

  useEffect(() => {
    fetchPopularJob(params).then(data => setDataApi(data));
  }, []);

  const onPressItem = (item: any) => {
    navigation.push(NAME_NAVIGATION.DETAIL, item);
  };

  const renderItem = (item: any) => {
    let address =
      item.job_city + ', ' + item.job_state + ', ' + item.job_country;
    return (
      <TouchableOpacity
        style={[style.mt16, style.ml24]}
        onPress={() => onPressItem(item)}>
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
        <Text style={[style.titleItemPopular, style.mt8]}>
          {item.employer_name}
        </Text>
        <Text numberOfLines={1} style={[style.mainJobTitle, style.mt16]}>
          {item.job_title}
        </Text>
        <Text style={style.colorGray}>{address}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[style.mt16, style.ml8, style.mr8]}>
      <View style={style.containerPopular}>
        <Text style={style.titlePopular}>Popular Jobs</Text>
        <Text>Show all</Text>
      </View>
      <FlatList
        horizontal={true}
        data={dataApi}
        renderItem={({item}) => renderItem(item)}
      />
    </View>
  );
}
