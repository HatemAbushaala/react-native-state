import React from 'react'
import { View, Text,FlatList } from 'react-native'

export default function Home() {

    const _data = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
    return (
        <View style={{padding:44}} >
          
          <FlatList
            numColumns={3}
            data={_data}
            // keyExtractor={({item})=>item}
            // renderItem={(obj) => <Text>{obj.item}</Text>}
            // renderItem={(obj) => <Text>{obj.index}</Text>}
            // renderItem={({item,index}) => <Text>{index}</Text>}

            renderItem={({item}) => <Text style={{margin:33,textAlign:'center'}}>{'data'+'\n'+item}</Text>}
          
          />
         
        </View>
    )
}
