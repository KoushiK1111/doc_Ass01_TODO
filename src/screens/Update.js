import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { UpdateTask } from '../redux/Action';
import RadioGroup from 'react-native-radio-buttons-group';


const radioButtonsData = [{
    id: '1', 
    label: 'In progress',
}, {
    id: '2',
    label: 'on hold',
},
{
    id: '3',
    label: 'completed',
}]


const Update = (props) => {
    const [title, setTitle] = useState(props.route.params.item.title);
    const [content, setContent] = useState(props.route.params.item.content)
    const id = props.route.params.item.id;
    const [radioButtons, setRadioButtons] = useState(radioButtonsData)
    const [status,setStatus] = useState(props.route.params.item.status)

    function onPressRadioButton(radioButtonsArray) {
        radioButtonsArray.map(el=>{
            if(el.selected){
                console.log(el)
                setStatus(el.label)
            }
        })
    }

    const UpdateData = () => {
        props.UpdateToDo({ title, id, content,status })
        console.log({ id, title, content })
        props.navigation.navigate('Home')
    }
    console.log(status)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Title:</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter Title"
                onChangeText={setTitle}
                value={title}
            />
            <Text style={[styles.text, { marginTop: 30 }]}>Content:</Text>
            <TextInput
                style={[styles.input]}
                placeholder="Type Content ..."
                multiline
                onChangeText={setContent}
                value={content}
            />
            <RadioGroup
                radioButtons={radioButtons}
                onPress={onPressRadioButton}
                containerStyle={{
                    //flex:1,
                    padding:20,
                    alignSelf:'flex-start'
                }}
            />
            <TouchableOpacity style={styles.btnStyle} onPress={() => UpdateData()}>
                <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        UpdateToDo: (data) => dispatch(UpdateTask(data))
    }
}

const mapStateToProps = state => {
    return {
        data: state.Reducer
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    input: {
        borderWidth: 1,
        marginTop: 10,
        fontSize: 18,
        borderRadius: 10,
    },
    btnStyle: {
        backgroundColor: 'green',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Update);