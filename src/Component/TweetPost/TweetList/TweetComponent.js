import React,{useState} from "react";
import {Avatar, Box, Grid,List, ListItem, ListItemText, Popper, Fade, Paper} from '@material-ui/core';
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
            width:40,
            height:40
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
        buttongroup:{
            alignItems:"flex-start"
        },
        button:{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            
        },
        icon:{
            color:'#62717d',
            fontSize:20,
            cursor:'pointer',
            "&:hover": {
                backgroundColor: '#e1eef6',
              }
        },
        icondetail:{
            fontSize:15,
            color:'#62717d',
            marginLeft:10
        },
        actiontext:{
            marginTop:-2,
            fontSize:10,
            cursor:'pointer',
            height:20
        },
        paper:{
            width:150
        },
        reactionButton:{
            width:'100%',
            textAlign:"left"
        },
        table:{
            width:5,

        },
        row:{
            borderBottom:'none',
        }
     
    })

    const classes = useStyles();


    const setUpdateTweet = (tweets) => {
        updateTweet(tweets)
        setOpen(!open)
    }

  
    const deleteButton = (id) =>{
        deleteTweet(id);
        setOpen(!open)
    }


    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };

    return(
        <Box borderBottom={1} className={classes.root}>
            <Grid container className={classes.content} >
                <Grid item xs={2} sm={1} md={1} lg={1} xl={1} > <Avatar alt="image profile" src="/assets/images/profile.jpg" className={classes.profile} /> </Grid>
                <Grid item xs={9} sm={10} md={10} lg={10} xl={10} key={tweets.tweet_id}> 
                    
                    
                    <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                        {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Paper className={classes.paper}>
                                <List>
                                    <ListItem button className={classes.actiontext}>
                                        <ListItemText onClick={() => setUpdateTweet(tweets)} >Edit</ListItemText>
                                    </ListItem>
                                    <ListItem button className={classes.actiontext}>
                                        <ListItemText onClick={() => deleteButton(tweets.tweet_id)} >Delete</ListItemText>
                                    </ListItem>
                                </List>
                            </Paper>
                        </Fade>
                        )}
                    </Popper>

                    <div className={classes.tweet} >
                        <p className={classes.username}>{tweets.tweet_name} <span className={classes.tweetdetail}>@{tweets.tweet_email} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(tweets.tweets_time))) }</span><MoreHorizRoundedIcon onClick={handleClick('bottom-end')} className={classes.more}/></p> 
                        <p >{tweets.tweets}</p> 

                        <Grid container className={classes.buttongroup} >
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3} > <div className={classes.button}><ChatBubbleOutlineIcon className={classes.icon}/><span className={classes.icondetail}>20</span></div></Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}  > <div className={classes.button}><RepeatIcon className={classes.icon}/><span className={classes.icondetail}>20</span></div></Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}  > <div className={classes.button}><FavoriteBorderIcon className={classes.icon}/><span className={classes.icondetail}>20</span></div></Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}  ><div className={classes.button}><PublishOutlinedIcon className={classes.icon}/></div></Grid>
                        </Grid>
                  </div>
                </Grid>
            </Grid>
            
     
        </Box>
    )
}

export default TweetComponent;