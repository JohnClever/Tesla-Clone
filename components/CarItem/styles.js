import {StyleSheet, Dimensions} from 'react-native'

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
        
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
       
      },
      title: {
        fontSize: 40,
        fontWeight: '500',
        color: '#000'
      },
      subtitle: {
        fontSize: 13,
        color: '#5c5e62'
      },
      subtitleCTA: {
        textDecorationLine: 'underline'
      },
      image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
      },
      buttonContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 20,
      }
})

export default styles