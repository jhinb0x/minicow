import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'

export default function Cadastro() {
  return (
    <View style={{backgroundColor:'blue', height:'100%', display:'flex', justifyContent:'center', alignItems:'center', gap:90,}}>
      <View style={{ gap:90,}}>
        <Text style={{color:'#FFFFFF', fontSize: 25 }}> Faça o Cadastro </Text>
      </View>
    <View style={{display:'flex', justifyContent:'center', alignItems:'center', gap:10}}>
        <TextInput
        placeholder=" Nome"
        placeholderTextColor={"white"}
        style={{borderRadius: 6, backgroundColor:'#D41515', height:'20%', width:'20%', width:300, height:30}}
        />
        <TextInput
        placeholder=" CPF"
        placeholderTextColor={"white"}
        style={{borderRadius: 6, backgroundColor:'#ED2323', height:'20%', width:'20%', width:300, height:30, marginVertical: 10}}
        />
        <TextInput
        placeholder=" Senha "
        placeholderTextColor={"white"}
        style={{borderRadius: 6, backgroundColor:'#ED2323', height:'20%', width:'20%', width:300, height:30,}}
        />
        <View style={{flexDirection: 'row', marginVertical: 10}}>
        <TouchableOpacity style={{borderRadius: 6,  marginHorizontal: 10,color:"black", alignItems: 'center',backgroundColor:'#DDDDDD', padding: 10, width:140, height:28}}>

        </TouchableOpacity>

        <TouchableOpacity style={{borderRadius: 6,  marginHorizontal: 10,color:"black", alignItems: 'center',backgroundColor:'#DDDDDD', padding: 10, width:140, height:28}}>
        
        </TouchableOpacity>
        </View>
    </View>

    </View>
  )
}