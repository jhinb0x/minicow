import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Teste() {
  const [data,setData] = useState('')
  useEffect(()=>{
    axios.get('http://10.0.2.2:8000/usuarios').then((response)=>{
      setData(response.data)
    })
  },[])
  function testando(){
    console.log(data)
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>testando</Text>
      <Button title='entrar' onPress={()=>testando()}/>
    </View>
  )
}