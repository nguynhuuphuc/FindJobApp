import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  containerToolBar: {
    padding: 16,
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 24,
    height: 24,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  title: {
    color: 'grey',
    fontSize: 24,
  },
  subTitle: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  //Search
  containerSearch: {
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingEnd: 4,
    paddingStart: 4,
  },
  ml8: {
    marginLeft: 8,
  },
  mr8: {
    margin: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt8: {
    marginTop: 8,
  },
  ml24: {
    marginLeft: 24,
  },
  inputSearch: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#f0eff6', //#f0eff6
    borderRadius: 8,
    padding: 8,
    marginEnd: 4,
    borderWidth: 0.24,
  },
  btn: {
    height: 42,
    width: 42,
    padding: 8,
    backgroundColor: '#f07869',
    borderRadius: 12,
  },
  searchIcon: {
    tintColor: 'white',
  },
  //Filter
  containerFilter: {
    flexDirection: 'row',
    margin: 5,
  },
  btnFilter: {
    paddingStart: 8,
    paddingEnd: 8,
    paddingTop: 4,
    paddingBottom: 4,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 16,
    marginLeft: 8,
  },
  visible: {
    borderColor: '#ccc',
  },
  textVisible: {
    color: '#ccc',
  },
  textEnable: {
    color: 'black',
  },
  //Popular Job
  containerPopular: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 5,
    marginEnd: 5,
  },
  titlePopular: {
    color: 'black',
    fontSize: 20,
  },
  titleItemPopular: {
    fontSize: 16,
    color: '#CCC',
  },
  mainJobTitle: {
    width: 200,
    fontSize: 24,
    color: 'black',
  },
  colorGray: {
    color: '#CCC',
  },
  bgLightGray: {
    backgroundColor: '#f0eff6',
  },
  //NearBy
  containerNearBy: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginStart: 5,
    marginEnd: 5,
  },
  titleNearBy: {
    color: 'black',
    fontSize: 20,
  },
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleItemNearBy: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  height200: {
    bottom: 0,
    height: 300,
  },
});
