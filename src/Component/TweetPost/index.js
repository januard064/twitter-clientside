import React,{useEffect, useState} from "react";
import {Box, Divider, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BorderColor } from "@material-ui/icons";
import CreateTweet from "./CreateTweet";
import ModalUpdateTweet from "./updateTweet";
import TweetList from "./TweetList";

const TweetPost = ({setAuth}) => {

   
    const useStyles = makeStyles({
        root:{
          height:'100vw',
          borderColor:'#e6ecf0',
          marginLeft:20
        },
        content:{
            marginLeft:20
        }
    })

    const classes = useStyles();

    //state for list of tweet
    const [tweetList, setTweetList] = useState([])
    tweetList.sort((a,b) =>  parseInt(b.tweet_id)-parseInt(a.tweet_id));

    // function for get list from API of tweet and set state to tweetList
    const getTweetList  = async () => {
        const response = await fetch("/tweets")
        const responseJson = await response.json()

        setTweetList(responseJson);
        console.log('tweetList => ',responseJson)

    }

    const [dataUser, setDataUser] = useState("")
    async function getDataUser(){
        try {
            const response = await fetch("auth/userdata", {
                method: "GET", 
                headers: {token : localStorage.token}
            })

            const responJson = await response.json()

            setDataUser(responJson.user_name)
        } catch (err) {
            console.log(err.message)
        }
    }
 
    //lifecycle for run getTweetList function
    useEffect (() => {
        // const userData = JSON.parse(localStorage.getItem('Data User'))
        getTweetList()
        getDataUser()
        console.log('hasil', tweetList)
    },[])
    

    
    const postTweet = async (tweet) => {
        try {
            
            // const userData = JSON.parse(localStorage.getItem('Data User'))
            tweet.tweet_id = tweet.tweet_id
            tweet.tweets = tweet.tweets
            tweet.tweets_time =new Date().toISOString()
            tweet.tweet_name= dataUser
            tweet.tweet_email = dataUser

            const body ={tweet};
            const response = await fetch("/tweets", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(`response ->`, response)
            setTweetList([...tweetList, tweet])
            getTweetList()
        } catch (err) {
            console.log(err.message)
        }
       
    }


    //state for modal -  using for update component
    const [modalUpdate, setModalUpdate] = useState(false)


    //state for clicked tweet
    const [currentState, setCurrentState] = useState()


    //function for click and a tweet data and set the data to the currentState
    const updateTweet = (tweet) => {
        setCurrentState({tweet_id: tweet.tweet_id, tweets: tweet.tweets, tweets_time: tweet.tweets_time, tweet_name: tweet.tweet_name, tweet_email: tweet.tweet_email})
        
        setModalUpdate(!modalUpdate)
        console.log('selected tweet',currentState)

        try {
            
        } catch (err) {
            console.log(err.message)
        }
            
    }

    // function for update - post the updated tweet 
    const postUpdateTweet = async (tweet) => {
        console.log('updated tweet => ', tweet.tweet_id)
       
        try {
            const body =  {tweet} 
            console.log(body)
            const response = await fetch(`/tweets/${body.tweet.tweet_id}`,
            {
                method:"PUT",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(body)
            });
            console.log(response)
            setTweetList(tweetList.map(tweetLists => (tweetLists.tweet_id === tweet.tweet_id ? tweet: tweetLists)))

        } catch (err) {
            console.log(err.message)
        }
    }

    //function to close modal(for update tweet)
    const closeModal = () => {
        setModalUpdate(!modalUpdate)
    }

    //function for delete tweet
    const deleteTweet = async (id) => {
        try {
            const deleteTweet = await fetch(`/tweets/${id}`, {
                method: "DELETE"
            });

            console.log(deleteTweet)
            setTweetList(tweetList.filter(tweet => tweet.tweet_id != id))
        } catch (err) {
            console.log(err.message)
        }
    }

  
    return(
        <Box borderRight={1} border className={classes.root} borderLeft={1}>
            <Box className={classes.content}>
                <h3>Home</h3>
                <CreateTweet postTweet={postTweet} dataUser={dataUser}  />
                <TweetList tweet={tweetList} deleteTweet={deleteTweet} updateTweet={updateTweet} closeModal={closeModal} />
                {
                    modalUpdate && <ModalUpdateTweet closeModal={closeModal} updateTweet={updateTweet} currentState={currentState} postUpdateTweet={postUpdateTweet} />
                }
            </Box>
        </Box>
    )
}

export default TweetPost;