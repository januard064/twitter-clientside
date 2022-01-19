import React, { useState, useEffect } from "react";
import {Avatar, TextareaAutosize, Box, Grid, ButtonGroup, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import GifIcon from '@material-ui/icons/Gif';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import EventIcon from '@material-ui/icons/Event';



const CreateTweet = ({postTweet, dataUser} ) => {

    const useStyles = makeStyles({
        root:{
            borderColor:'#e6ecf0'
        },
        content:{
            marginBottom:20
        },
        profile:{
            width:40,
            height:40,
            textAlign:'center'
        },
        warning:{
            color:'#1da1f2',
            fontSize:14
        },
        tweet:{
            border:'none',
            outline:'none',
            width:'100%',
            flex:1
        },
        tweetdetails:{
            marginBottom:10,
            borderColor:'#e6ecf0'
        },
        button:{
            width:5
        },
        buttonGroup:{
            width:'100%'
        },
        icon:{
            color:'#1da1f2',
            fontSize:20,
            cursor:'pointer',
            "&:hover":{
                backgroundColor: '#e1eef6',
            }
        },
        tweetsubmit:{
            color:'white !important',
            fontWeight:'bold',
            textTransform:'capitalize',
            // backgroundColor:'#1da1f2',
            borderRadius:50,
        },
        tweetsubmitbutton:{
            color:'white',
            textTransform:'capitalize',
            backgroundColor:'#1d9bf0',
            "&:hover":{
                backgroundColor:"#1a8cd8"
            },
            borderRadius:50,
            fontWeight:'bold',
            cursor:'pointer',
            border: 'none',
            height:30,
            float:'right'
        },
        tweetsubmitbuttondisabled:{
            color:'white !important',
            fontWeight:'bold',
            textTransform:'capitalize',
            backgroundColor:'#8ecdf8',
            cursor:'pointer',
            border: 'none',
            borderRadius:50,
            height:30,
            float:'right'
        }
    })

    const classes = useStyles();

    const[warning, setWarning] = useState('')

   
    

    const initialForm = ({
        tweets :'',
        tweets_time :'',
        tweet_name: '',
        tweet_email : '',
   })
    const [tweet, setTweet] = useState(initialForm)

    const handleInputChange = (e) => {
        const {name, value} = e.target
        setWarning(value)
        console.log(value)
        setTweet({...tweet, [name]: value})

    }

    const onSubmit = async (e) => {
        e.preventDefault()
        postTweet(tweet)
        setTweet(initialForm)
        setWarning('')
    }

    return(
        <Box borderBottom={1} className={classes.root}>
        <Grid container className={classes.content} >
           <Grid item xs={2} sm={1} md={1} lg={1} xl={1} > <Avatar alt="image profile" src="/assets/images/profile.jpg" className={classes.profile} /> </Grid>
           <Grid item xs={9} sm={10} md={10} lg={10} xl={10} >
                 <form onSubmit={onSubmit} >   
                 <Box borderBottom={1} className={classes.tweetdetails}>     
                    <TextareaAutosize  name="tweets" className={classes.tweet} minRows={2} placeholder="What's Happening" onChange={handleInputChange} maxLength={240} value={tweet.tweets} />
                    {
                        warning && <p className={classes.warning}>{240-warning.length} Character Left</p>
                    }
                   </Box> 
                    <Grid container>    
                        <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                            <Grid container  >
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2}> <div className={classes}><ImageOutlinedIcon className={classes.icon}/></div></Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} > <div className={classes}><GifIcon className={classes.icon}/></div></Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} > <div className={classes}><EqualizerIcon className={classes.icon}/></div></Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} ><div className={classes}><SentimentSatisfiedIcon className={classes.icon}/></div></Grid>
                                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} ><div className={classes}><EventIcon className={classes.icon}/></div></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4} xl={4} justifyContent="flex-end">
                                {
                                    warning === '' ? (
                                        <div><button disabled  className={classes.tweetsubmitbuttondisabled}>Tweet</button> </div>
                                    ) :  <div><button onClick={onSubmit} className={classes.tweetsubmitbutton}>Tweet</button> </div>
                                }
                        </Grid>
                    </Grid>
                      
                </form>
            </Grid>
        </Grid>
       
        </Box>
    )
}

export default CreateTweet;