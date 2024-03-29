import { setStatusBarNetworkActivityIndicatorVisible } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import {View, Text, ScrollView, Button} from 'react-native'
import firebase from '../database/firebase'
import { ListItem, Avatar} from 'react-native-elements'

const UsersList = (props) => {


    const [users, setUsers] = useState([])

    useEffect(()=> {
        firebase.db.collection('users').onSnapshot(querySnapshot => {
            const users = [];
            querySnapshot.docs.forEach(doc => {
                let {name, email, phone} = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            })
            console.log(users)
            setUsers(users)
        })
    }, [])
    return (
        <ScrollView>
            <Button title="Create User" onPress={() => props.navigation.navigate('CreateUserScreens')}></Button>
            {
                users.map(user => {
                    return (
                        <ListItem key={user.id} bottomDivider  onPress={ () => {
                            props.navigation.navigate('UserDetailScreen', {
                                userId: user.id,
                            })
                        }}>
                            <ListItem.Chevron/>
                            <Avatar source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'}} rounded/>
                            <ListItem.Content>
                                <ListItem.Title>{user.name}</ListItem.Title>
                                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }
        </ScrollView>
    )
}

export default UsersList
