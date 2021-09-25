import React, {useEffect} from 'react'
import {View, Text, StyleSheet, TextInput, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'

const UserDetailScreen = (props) => {


    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get();
        const user = doc.data();
        console.log(user)
    }

    useEffect(() => {
        getUserById(props.route.params.userId)
    })
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
export default UserDetailScreen
