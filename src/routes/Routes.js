/**
 * 
 * @author https://github.com/ymotse
 * 
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import SearchUser from '../pages/search/SearchUser'
import UserRepo from '../pages/repo/UserRepo'
import RepoDetail from '../pages/repo/RepoDetail'


const { Navigator, Screen } = createStackNavigator()


export default function PreferencesRoutes() {
    return (

        <NavigationContainer independent={true}>

            <Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: '#5ce2fd',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Screen
                    name="Recherche"
                    component={SearchUser}
                    options={{
                        headerShown: true,
                    }}
                />

                <Screen
                    name="Repositories"
                    component={UserRepo}
                    screenOptions={{
                        headerShown: true,

                    }}
                />
                <Screen
                    name="Detail"
                    component={RepoDetail}
                    screenOptions={{
                        headerShown: true,

                    }}
                />
            </Navigator>

        </NavigationContainer>
    )
}