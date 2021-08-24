import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';

const Home = ({navigation,data}) => {
    // useEffect(()=>{
    //     console.log(data)
    // },[data])
    const color=(status)=>{
        if(status==='not started'){
            return 'red'
        }else if(status==='completed'){
            return 'green'
        }else if(status==='on hold'){
            return 'blue'
        }else{
            return 'purple'
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList 
                    data={data}
                    keyExtractor={item=>item.id}
                    renderItem={({item})=>(
                        <TouchableOpacity style={styles.listBtnStyle} onPress={()=>navigation.navigate('Update',{item})}>
                            <Text style={styles.listText}>{item.title}</Text>
                            <Text style={[styles.listText,{color:color(item.status)}]}>{item.status}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.addBtnContainer}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>navigation.navigate('Add')}>
                    <Text style={styles.btnText}>Add To-Do</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = state =>{
    return{
        data: state.Reducer
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:10,
        paddingVertical:10
    },
    showBtnConatiner:{
        
    },
    listContainer:{
        flex:1,
    },
    addBtnContainer:{
        
    },
    btnStyle:{
        backgroundColor:'green',
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
    },
    listBtnStyle:{
        backgroundColor:'lightgrey',
        height:50,
        borderRadius:10,
        marginVertical:10,
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal:20
    },
    listText:{
        fontSize:20,
    },
    btnText:{
        fontSize:18,
        fontWeight:'bold'
    }

})

export default connect(mapStateToProps,null)(Home);