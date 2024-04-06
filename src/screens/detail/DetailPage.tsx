import {View, Text} from 'react-native';
import React from 'react';
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import ApplyForJob from './components/ApplyForJob';
import {useRoute} from '@react-navigation/native';
import {PropsRouteDetail} from '../navigation/Type';

export default function DetailPage() {
  const params = useRoute<PropsRouteDetail>().params;

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Toolbar
        link={params.job_google_link}
        url={params.employer_logo}
        country={params.job_country}
        jobTitle={params.job_title}
        location={params.job_publisher}
      />
      <Content content={params.job_highlights} />
      <ApplyForJob />
    </View>
  );
}
