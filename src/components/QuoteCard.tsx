import React, { useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
//import { RootStackParams } from '../../App';
import { useNavigation } from '@react-navigation/native';
import {showMessage, hideMessage} from 'react-native-flash-message';

interface QuoteCardProps {
    user_img: string;
    name: string;
    username: string;
    date: string;
    post_body: string;
    post_from: string;
    post_image?: string;
}

const QuoteCard: React.FC<QuoteCardProps> = ({user_img, name, username, date, post_body, post_from, post_image}) => {

    /*
    const navigation = useNavigation<StackNavigationProp<RootStackParams>>()
    const onTapComment = () => {
        navigation.navigate('PostDetailPage')
    }*/


    const likePost = () => {
        showMessage({
            message: "Post liked!",
            type: 'success',
          });
    }

    return(
        <View style={styles.container} >
            <View style={styles.top_container} >
                <Image
                source={{uri: user_img}}
                style={styles.image} />
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.username} >@{username} • {date}</Text>
            </View>
            <View style={styles.post_container} >
                <Text style={styles.post_text} >{post_body}</Text>
                <Text style={styles.quote_from} >• {post_from}</Text>
            </View>
            {post_image ? 
            <View style={styles.image_container} >
                <Image source={{uri: post_image}}
                style={styles.post_image} />
            </View> : null}
            
            <View style={styles.comment_like_container} >
                <TouchableOpacity onPress={() => {}} >
                    <View style={styles.comment_like_inside_container} >
                        <Icon name='comment-outline' color="#00344F" size={25} />
                        <Text style={styles.comment_like_number} >15</Text>
                    </View>
                </TouchableOpacity>
            
                <View style={styles.comment_like_inside_container} >
                    <TouchableOpacity onPress={() => likePost()} >
                        <Icon name='cards-heart' color="#00344F" size={25} />
                    </TouchableOpacity>
                    <Text style={styles.comment_like_number} >35</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E4E4E4",
      borderColor: "black",
      borderWidth: 2,
      padding: 5,
      borderRadius: 10,
      flexDirection: "column",
    },
    top_container: {
      flexDirection: "row",
      justifyContent: "flex-start",
    },
    post_container: {

    },
    image_container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    comment_like_container: {
        flexDirection: "row",
        marginTop: 2
    },
    comment_container: {
        flexDirection: "row"
    },
    comment_like_inside_container: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 10
    },
    comment_like_number: {
        fontSize: 15,
        color: "black",
        margin: 3
    },
    post_text: {
        color: "black",
        marginLeft: 55,
        marginRight: 5,
        fontFamily: 'Roboto-Regular',
        fontSize: 16
    },
    quote_from: {
        color: "black",
        textAlign: "right",
        marginTop: 10,
        marginRight: 10,
        marginBottom: 5,
        fontWeight: "700",
        fontFamily: "Roboto-Regular"
    },
    name:{
      fontSize: 20,
      fontFamily: 'Roboto-Regular',
      marginTop: 11,
      color: "black",
      marginLeft: 5
    },
    username: {
        fontSize: 15,
        marginTop: 15,
        marginLeft: 5,
        color: "gray",
        fontFamily: "Roboto-Regular"
    },
    image: {
      width: 40,
      height: 40,
      borderRadius: 30,
      margin: 5,
      borderWidth: 1,
      borderColor: "black"
    },
    top_container_icon: {
      margin: 10
    },
    post_image: {
        width: '90%',
        height: undefined,
        alignItems: "center",
        borderRadius: 10,
        aspectRatio: 1,
    }
})
  
export default QuoteCard