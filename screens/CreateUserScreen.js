import React, {useState} from 'react'
import {View, Button, TextInput, ScrollView, StyleSheet, TextInputComponent} from 'react-native'
import firebase from '../database/firebase'

const CreateUserScreen = (props) => {

    const [state, setstate] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText= (name, value) => {
        setstate({...state, [name]: value})
    }

    const AddNewUser = async() => {
        if(state.name === ''){
            alert('Please provide a name')
        } else{
            try {
                await firebase.db.collection('users').add({
                    name: state.name,
                    email: state.email,
                    phone: state.phone
                })
                props.navigation.navigate('UsersList')
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGruop}>
                <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText('name', value)}></TextInput>
            </View>
            <View style={styles.inputGruop}>
                <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText('email', value)}></TextInput>
            </View>            
            <View style={styles.inputGruop}> 
                <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText('phone', value)}></TextInput>
            </View>
            <View>
                <Button title="Save user" onPress={() => AddNewUser()}></Button>
            </View>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    inputGruop: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },

    container: {
        flex: 1,
        padding: 30,
    }
})
export default CreateUserScreen
