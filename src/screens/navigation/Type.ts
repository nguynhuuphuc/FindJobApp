import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NAME_NAVIGATION} from '../common/Const';
import {RouteProp} from '@react-navigation/native';

export type RootParams = {
  Home: undefined;
  Detail: {
    employer_logo: string;
    job_publisher: string;
    job_title: string;
    job_city: string;
    job_state: string;
    job_country: string;
    job_google_link: string;
    job_highlights: {
      Qualifications: [];
      Responsibilities: [];
      Benefits: [];
    };
  };
};

//Type check push props
export type PropsStackDetail = NativeStackNavigationProp<
  RootParams,
  NAME_NAVIGATION.DETAIL
>;

//Type check get props

export type PropsRouteDetail = RouteProp<RootParams, NAME_NAVIGATION.DETAIL>;
