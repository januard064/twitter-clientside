import React,{useState} from "react";
import {Avatar, TextareaAutosize, Box, Grid, ButtonGroup, Button,List, ListItem, ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishOutlinedIcon from '@material-ui/icons/PublishOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';



const TweetComponent = ({tweets, deleteTweet, updateTweet, closeModal}) => {

    const useStyles = makeStyles({
        root:{
            borderColor:'#e6ecf0'
        },
        content:{
            marginBottom:20,
            marginTop:20
        },
        profile:{
            width:60,
            height:60
        },
        tweet:{
           marginTop:-15
        },
        username:{
            fontWeight:"bold"
        },
        tweetdetail:{
            fontWeight:'normal',
            color: "#62717d"
        },
        more:{
            float:'right',
            cursor:'pointer'
        },
        button:{
            marginRight:'15%',
        },
        icon:{
            color:'#62717d',
            fontSize:20,
        },
        action:{
            position:"absolute",
            borderColor:'white',
            width:200,
            height:50,
            marginTop:20,
            // padding:10,
            marginLeft:200,
            backgroundColor:'white'
           
        },
        actiontext:{
            marginTop:-2,
            fontSize:10,
            cursor:'pointer',
            height:20
        },
        reaction:{
            width:'100%',
        }
     
    })

    const classes = useStyles();

    const[tampil, setTampil] = useState(false);
    
    const toggleHandler = () => {
        setTampil(!tampil)
    }

    const setUpdateTweet = (tweets) => {
        updateTweet(tweets)
        setTampil(!tampil)
    }

  
    const deleteButton = (id) =>{
        deleteTweet(id);
        setTampil(!tampil)
    }

    return(
        <Box borderBottom={1} className={classes.root}>
            <Grid container className={classes.content} >
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} > <Avatar alt="image profile" src="/assets/images/profile.jpg" className={classes.profile} /> </Grid>
                <Grid item xs={8} sm={8} md={8} lg={8} xl={8} key={tweets.tweet_id}> 
                    { 
                        tampil && <Box className={classes.action} boxShadow={3}zIndex="tooltip"
                    >
                        <List>
                            <ListItem button className={classes.actiontext}>
                                <ListItemText onClick={() => setUpdateTweet(tweets)} >Edit</ListItemText>
                            </ListItem>
                            <ListItem button className={classes.actiontext}>
                                <ListItemText onClick={() => deleteButton(tweets.tweet_id)} >Delete</ListItemText>
                            </ListItem>
                        </List>
                    </Box>
                    }
                    <div className={classes.tweet} >
                        <p className={classes.username}>{tweets.tweet_name} <span className={classes.tweetdetail}>@{tweets.tweet_email} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(tweets.tweets_time))) }</span><MoreHorizRoundedIcon onClick={()=>toggleHandler()} className={classes.more}/></p> 
                        <p >{tweets.tweets}</p>
                    </div>
                    <Box display="flex" >
                        <ButtonGroup variant="none" className={classes.reaction} >
                            <Button className={classes.button} ><ChatBubbleOutlineIcon className={classes.icon}/>20</Button>
                            <Button className={classes.button}><RepeatIcon className={classes.icon} />20</Button>
                            <Button className={classes.button} ><FavoriteBorderIcon className={classes.icon} />20</Button>
                            <Button className={classes.button}><PublishOutlinedIcon className={classes.icon} /></Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid>
            
     
        </Box>
    )
}

export default TweetComponent;