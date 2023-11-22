import { View, Text, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

export default function AdicionarSaldo() {
  return (
    <View style={{backgroundColor:'#C1D4EF', height:'100%',width:'100%', display:'flex', alignItems:'center'}}>
      <View style={{height:60, width:'100%',backgroundColor:'#D7E3F5', flexDirection: 'row', alignItems:'center', }}>
        
      <TouchableOpacity style={{color:"black", alignItems: 'center',backgroundColor:'#D7E3F5', width:50, height:60}}>
        
        </TouchableOpacity>
        <Text style={{color:'#FFFFFF'}}>EXTRATO</Text>
      </View>

      <View>
      <TextInput
          placeholder=" Digite o Saldo"
          placeholderTextColor={"white"}
          keyboardType = 'numeric'
          style={{borderRadius: 6, backgroundColor:'#C1D4EF', height:'20%', width:'20%', width:300, height:30, marginVertical:10
        }}
          />
          </View>
          <View style={{width:350, height:1, backgroundColor:'white', marginVertical:10}}>
          </View>
          <View style={{backgroundColor:"#D7E3F5", height:35, width:330, justifyContent:"center", alignItems:'center', borderRadius:25,elevation: 19, color:'#595959'}}>
          <Text>CONTRIBUICOES EM ABERTO</Text>
      </View>



      <View style={{backgroundColor:"#D7E3F5", height:400, width:320, justifyContent:"center", alignItems:'center', borderRadius:12, elevation: 1, gap:11}}>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          <View style={{backgroundColor:'white', height:30, width:300, borderRadius:17}}></View>
          
          
          
      </View>
    </View>
)
}
