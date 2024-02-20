import {StyleSheet} from 'react-native';
import {size, weight} from '../../themes/fonts';
import color from '../../themes/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  footer: {padding: 10},
  userName: {
    fontSize: size.md,
    fontWeight: weight.bold,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  post: {},
  threeDots: {marginLeft: 'auto'},
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  text: {
    color: color.black,
    lineHeight: 18,
  },
  bold: {
    fontWeight: weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: color.black,
    lineHeight: 18,
    flex: 1,
  },
});
