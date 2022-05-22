import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'


interface CommentCardProps {
    image: string,
    name: string;
    username: string;
    date: string;
    comment: string
}


const CommentCard: React.FC<CommentCardProps> = ({image, name, username, date, comment}) => {

    return(
        <View style={styles.container} >
            <View style={styles.top_container} >
                <Image
                source={{uri: image}}
                style={styles.image} />
                <Text style={styles.name} >{name}</Text>
                <Text style={styles.username} >@{username}  • {date}</Text>
            </View>
            <Text style={styles.comment} >{comment}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    comment: {
        fontFamily: 'Roboto-Regular',
        textAlign: "left",
        marginLeft: 55,
        color: "black",
        fontSize: 15,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 30,
        margin: 5,
        borderWidth: 1,
        borderColor: "black"
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
})

export default CommentCard