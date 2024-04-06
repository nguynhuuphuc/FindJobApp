import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {style} from '../Style';

export type PropsContent = {
  content: {
    Qualifications?: [];
    Responsibilities?: [];
    Benefits?: [];
  };
};

enum tabSelected {
  DESC = 'Qualifications',
  COMPANY = 'Responsibilities',
  REVIEWS = 'Benefits',
}

export default function Content({content}: PropsContent) {
  const [btnSelected, setBtnSelect] = useState(tabSelected.DESC);
  const [dataContent, setDataContent] = useState(content.Qualifications ?? []);
  const renderDataContent = (item: any, index: number) => {
    return <Text key={index}>{item}</Text>;
  };

  const onPress = (value: tabSelected) => {
    setBtnSelect(value);
    switch (value) {
      case tabSelected.DESC:
        setDataContent(content.Qualifications ?? []);
        break;
      case tabSelected.COMPANY:
        setDataContent(content.Responsibilities ?? []);

        break;
      case tabSelected.REVIEWS:
        setDataContent(content.Benefits ?? []);
        break;
    }
  };
  return (
    <ScrollView style={[style.mt16, style.containerScroll]}>
      <View style={[style.containerContent]}>
        <TouchableOpacity
          style={[
            style.btn,
            style.p16,
            btnSelected == tabSelected.DESC ? style.btnSelected : null,
          ]}
          onPress={() => onPress(tabSelected.DESC)}>
          <Text
            style={[
              btnSelected == tabSelected.DESC
                ? style.textSelected
                : style.textColorBlack,
            ]}>
            Description
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.btn,
            style.p16,
            btnSelected == tabSelected.COMPANY ? style.btnSelected : null,
          ]}
          onPress={() => onPress(tabSelected.COMPANY)}>
          <Text
            style={[
              btnSelected == tabSelected.COMPANY
                ? style.textSelected
                : style.textColorBlack,
            ]}>
            Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            style.btn,
            style.p16,
            btnSelected == tabSelected.REVIEWS ? style.btnSelected : null,
          ]}
          onPress={() => onPress(tabSelected.REVIEWS)}>
          <Text
            style={[
              btnSelected == tabSelected.REVIEWS
                ? style.textSelected
                : style.textColorBlack,
            ]}>
            Reviews
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          style.containerItemContent,
          style.mt16,
          style.ml16,
          style.mr16,
        ]}>
        <Text style={[style.itemTitle, style.mb16]}>{btnSelected}</Text>
        {dataContent.map((item, index) => renderDataContent(item, index))}
      </View>
      <View style={[style.bottomSpace]}></View>
    </ScrollView>
  );
}
