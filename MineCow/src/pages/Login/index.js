import { View, Text, TextInput } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={{backgroundColor:'blue', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:90,}}>
      <View style={{ gap:90,}}>
        <Text style={{color:'#FFFFFF', fontSize: 25 }}> Faça Login </Text>
      </View>
    <View style={{display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
        <TextInput
        style={{backgroundColor:'#D41515', height:'20%', width:'20%', width:225, height:25}}
        />
        <TextInput
        style={{backgroundColor:'#ED2323', height:'20%', width:'20%', width:225, height:25}}
        />
        
    </View>

    </View>
  )
}