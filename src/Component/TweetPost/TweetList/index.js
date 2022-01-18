import React from "react";
import {Avatar, TextareaAutosize, Box, Grid, ButtonGroup, Button,List, ListItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TweetComponent from "./TweetComponent";

const TweetList = ({tweet, deleteTweet, updateTweet, closeModal}) => {

    return(
        <Box >
           {
               tweet !== [] && tweet.map(tweets => <TweetComponent tweets={tweets} deleteTweet={deleteTweet} updateTweet={updateTweet} closeModal={closeModal} />)
           }
        </Box>
    )
}

export default TweetList;