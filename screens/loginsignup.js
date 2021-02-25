import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,TextInput } from 'react-native';
import db from './config'
import firebase from 'firebase'
import {Header} from 'react-native-elements'
export default class Loginsignup extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:''
        }
    }
    signup=async(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(this.state.emailId,this.state.password).then(()=>{
         alert("user added")  
        }).catch((error)=>{
            alert(error)
        })
       await db.collection("users").doc(this.state.emailId).set({
            emailId:this.state.emailId,
            password:this.state.password,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            address:this.state.address,
            contact:this.state.contact,
            confirmPassword:this.state.confirmPassword
        })
    }
        render()
{
    return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center", width:200}}>
            <h1>BookStore</h1>
        
<TextInput style={{width:200,height:30,borderWidth:3,alignSelf:'center' }} 
                placeholder={"Enter email id"}
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}
                value={this.state.emailId} />

                <TextInput style={{width:200,height:30,borderWidth:3}}
                placeholder={"Enter password"}
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }} 
                value={this.state.password}/>

                <TextInput style={{width:200,height:30,borderWidth:3}}
                placeholder={"Enter first name"}
                onChangeText={(text)=>{
                    this.setState({
                        firstName:text
                    })
                }}
                value={this.state.firstName} />

                <TextInput style={{width:200,height:30,borderWidth:3}} 
                placeholder={"Enter last name"}
                onChangeText={(text)=>{
                    this.setState({
                        lastName:text
                    })
                }} 
                value={this.state.lastName}/>

                <TextInput style={{width:200,height:30,borderWidth:3}}
                placeholder={"Enter address"}
                onChangeText={(text)=>{
                    this.setState({
                        address:text
                    })
                }} 
                value={this.state.address}
                />

                <TextInput style={{width:200,height:30,borderWidth:3}}
                placeholder={"Enter contact"}
                onChangeText={(text)=>{
                    this.setState({
                        contact:text
                    })
                }}value={this.state.contact}
                 />

                <TextInput style={{width:200,height:30,borderWidth:3}}
                placeholder={"Enter confirm password"}
                secureTextEntry={true}
                onChangeText={(text)=>{
                    this.setState({
                        confirmPassword:text
                    })
                }}
                value={this.state.confirmPassword}
                 />
                 <TouchableOpacity style={{width:200,height:30,borderWidth:3,backgroundColor:"orange"}} onPress={()=>{
                    this.signup(this.state.emailId,this.state.passsword)
                }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
                <View>
            
            
            <View style={{alignSelf:"center",flex:1}}>
             <TextInput style={{width:200,height:30,borderWidth:3}}
             placeholder={"Email Address"}
             onChangeText={(text)=>{
                 this.setState({
                     emailId:text
                 })
             }} />
            <TextInput style={{width:200,height:30,borderWidth:3}}
            placeholder={"Password"}
            onChangeText={(text)=>{
                this.setState({
                    password:text
                })
            }}
            secureTextEntry={true} />
            <TouchableOpacity style={{width:200,height:30,borderWidth:3,backgroundColor:"orange"}} onPress={()=>{
             this.userlogin()   
            }}>
            <Text>login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width:200,height:30,borderWidth:3,backgroundColor:"orange"}} onPress={()=>{
                this.setState({
                    
                })
            }}>
            <Text>signUp</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}
    
    userlogin=()=>{
        firebase.auth().signInWithEmailAndPassword(this.state.emailId,this.state.password).then((response)=>{
        alert("user login confirmed")
        this.props.navigation.navigate("Drawer")
        })
    
    }
    


}



