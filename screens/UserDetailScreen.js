import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Button, ActivityIndicator} from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {
    const initialState = {
        id: '',
        name: '',
        email: '',
        phone: ''
    }
    const [user, setuser] = useState(initialState)

    const [loading, setloading] = useState(true)

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();

        setuser({
            ...user,
            id: doc.id,
        })

        setloading(false)
    }

    useEffect(() => {
        getUserById(props.route.params.userId)
    }, [])

    const handleChangeText= (name, value) => {
        setuser({...user, [name]: value})
    }

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId);
        await dbRef.delete();
        props.navigation.navigate('UsersList')
    }

    const updateUser = async () => {
        const dbRef = firebase.db.collection('users').doc(user.id);
        await dbRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone,
        })
        setuser(initialState)

        props.navigation.navigate('UsersList')
    }
    if(loading){
        return (
            <View>
                <ActivityIndicator size="large" color="#9e9e9e"></ActivityIndicator>
            </View>
        )
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGruop}>
                <TextInput placeholder="Name User" onChangeText={(value) => handleChangeText('name', value)} value={user.name}></TextInput>
            </View>
            <View style={styles.inputGruop}>
                <TextInput placeholder="Email User" onChangeText={(value) => handleChangeText('email', value)} value={user.email}></TextInput>
            </View>            
            <View style={styles.inputGruop}> 
                <TextInput placeholder="Phone User" onChangeText={(value) => handleChangeText('phone', value)} value={user.phone}></TextInput>
            </View>
            <View>
                <Button title="Update user" onPress={() => updateUser()} color="#19AC52"></Button>
            </View>            
            <View>
                <Button title="Delete user" onPress={() => deleteUser()} color="#E37399"></Button>
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
export default UserDetailScreen
