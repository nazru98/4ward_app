import {TouchableOpacity,Image } from 'react-native'
import React from 'react'
import imagePath from '../assets/imagePath'

const BackButton = ({onPressBackButton}) => {
  return (
    <TouchableOpacity onPress={onPressBackButton}  style={{width:30}}>
    <Image source={imagePath.ic_back_arrow} />
    </TouchableOpacity>
  )
}

export default BackButton