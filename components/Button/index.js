import React from 'react'
import {View, Text, Pressable} from 'react-native'
import styles from './styles'

const StyledButton = (props) => {
    const {content, onPress, type} = props
    const backgroundColor = type === 'primary' ? '#171a20cc' : '#ffffffa6'
    const textColor = type === 'primary' ? '#ffffff' : '#171a20'
    return(
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
              
            </Pressable>
        </View>
    )
}

export default StyledButton