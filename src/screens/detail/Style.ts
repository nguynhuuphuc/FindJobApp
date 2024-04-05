import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  icon12: {
    width: 12,
    height: 12,
  },
  toolBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ml16: {
    marginLeft: 16,
  },
  mr16: {
    marginRight: 16,
  },
  mt16: {
    marginTop: 16,
  },
  mb16: {
    marginBottom: 16,
  },
  btn: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#ebebf2',
  },
  p16: {
    padding: 16,
  },
  logoCompany: {
    width: 100,
    height: 100,
  },
  titleJob: {
    fontSize: 24,
    fontWeight: '600',
  },
  fontBold: {
    fontWeight: '600',
  },
  secondaryColor: {
    color: '#2a204a',
  },
  containerHeader: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerLocationCompany: {
    flexDirection: 'row',
  },
  icon20: {
    width: 20,
    height: 20,
  },
  //Content
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnSelected: {
    backgroundColor: '#2f2650',
  },
  textSelected: {
    color: 'white',
  },
  textColorBlack: {
    color: 'black',
  },
  containerItemContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  itemTitle: {
    color: '#2f2650',
    fontSize: 20,
    fontWeight: '500',
  },
  //Apply for job
  containerApplyForJob: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
  },
  btnHeart: {
    borderRadius: 16,
    padding: 16,
    borderColor: '#ff7656',
    borderWidth: 1,
  },
  colorIconHeart: {
    tintColor: '#ff7656',
  },
  btnApplyForJob: {
    flexGrow: 1,
    backgroundColor: '#ff7656',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 16,
  },
});
