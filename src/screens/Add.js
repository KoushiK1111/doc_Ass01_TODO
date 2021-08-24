import React, { useState } from 'react';
import { View,Text,StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import { AddTask } from '../redux/Action';

const Add = (props) => {
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('')

    const AddData = () =>{
        props.AddToDo({title,content})
        props.navigation.navigate('Home')
    }

    //console.log(props.data)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Title:</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter Title"
                onChangeText={setTitle}
                value={title}
            />
            <Text style={[styles.text,{marginTop:30}]}>Content:</Text>
            <TextInput 
                style={[styles.input]}
                placeholder="Type Content ..."
                multiline
                onChangeText={setContent}
                value={content}
            />
            <TouchableOpacity style={styles.btnStyle} onPress={AddData}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapDispatchToProps = dispatch =>{
    return{
        AddToDo : (data)=>dispatch(AddTask(data))
    }
};

const mapStateToProps = state =>{
    return{
        data: state.Reducer
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        margin:10
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    input:{
        borderWidth:1,
        marginTop:10,
        fontSize:18,
        borderRadius:10,
    },
    btnStyle:{
        backgroundColor:'green',
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:50
    },
    btnText:{
        fontSize:20,
        fontWeight:'bold'
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Add);