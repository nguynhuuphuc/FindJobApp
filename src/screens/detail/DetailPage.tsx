import {View, Text} from 'react-native';
import React from 'react';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import ApplyForJob from './components/ApplyForJob';
import {useRoute} from '@react-navigation/native';
import {PropsRouteDetail} from '../navigation/Type';

export default function DetailPage() {
  const params = useRoute<PropsRouteDetail>().params;
  let address =
    params.job_city + ', ' + params.job_state + ', ' + params.job_country;
  return (
    <View style={{flex: 1}}>
      <Toolbar
        url={params.employer_logo}
        country={address}
        jobTitle={params.job_title}
        location={params.job_publisher}
      />
      <Content content={params.job_highlights} />
      <ApplyForJob />
    </View>
  );
}
