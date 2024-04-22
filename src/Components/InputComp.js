import { View, Text,TextInput } from 'react-native'
import React from 'react'

const InputComp = ({style,placeholder,onTextChange,keyBoardType,placeholderTextColor}) => {
  return (
    <>      
     <TextInput style={style} placeholder={placeholder}  onChange={onTextChange} keyboardType={keyBoardType} placeholderTextColor={placeholderTextColor}/>
    </>
  )
}
export default InputComp