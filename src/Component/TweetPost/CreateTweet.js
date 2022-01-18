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
            width:60,
            height:60
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
            marginTop:10,
            widthwidth:'100%'
        },
        button:{
            width:5
        },
        icon:{
            color:'#1da1f2',
            fontSize:25,
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
            backgroundColor:'#1da1f2',
            borderRadius:50,
            fontWeight:'bold',
            cursor:'pointer',
            border: 'none',
            height:30,
            
        },
        tweetsubmitbuttondisabled:{
            color:'white !important',
            fontWeight:'bold',
            textTransform:'capitalize',
            backgroundColor:'#8ecdf8',
            cursor:'pointer',
            borderRadius:50,
            height:30,
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
        // <div className={classes.root}>
        <Box borderBottom={1} className={classes.root}>
        <Grid container className={classes.content} >
           <Grid item xs={2} sm={2} md={2} lg={2} xl={2} > <Avatar alt="image profile" src="/assets/images/profile.jpg" className={classes.profile} /> </Grid>
           <Grid item xs={8} sm={8} md={8} lg={8} xl={8} >
                 <form onSubmit={onSubmit} >   
                    <TextareaAutosize  name="tweets" className={classes.tweet} minRows={2} placeholder="What's Happening" onChange={handleInputChange} maxLength={240} value={tweet.tweets} />
                    {
                        warning && <p className={classes.warning}>{240-warning.length} Character Left</p>
                    }
                            <div className={classes.tweetdetails}>
                                <Box display="flex"  >
                                    <Box flexGrow={1}>
                                        <ButtonGroup variant="none" >
                                                <Button className={classes.button} ><ImageOutlinedIcon className={classes.icon} /></Button>
                                                <Button className={classes.button}><GifIcon className={classes.icon} /></Button>
                                                <Button className={classes.button}><EqualizerIcon className={classes.icon} /></Button>
                                                <Button className={classes.button}><SentimentSatisfiedIcon className={classes.icon} /></Button>
                                                <Button className={classes.button}><EventIcon className={classes.icon} /></Button>
                                        </ButtonGroup>
                                    </Box>
                                    <Box className={classes.tweetsubmit}>
                                        {
                                            warning === '' ? (
                                               <div><button disabled  className={classes.tweetsubmitbuttondisabled}>Tweet</button> </div>
                                            ) :  <div><button onClick={onSubmit} className={classes.tweetsubmitbutton}>Tweet</button> </div>
                                        }
                                    </Box>
                                </Box>
                            </div>
                </form>
                {/* <div><button onClick={onSubmit} className={classes.tweetsubmitbutton}>Tweet</button> </div> */}
            </Grid>
        </Grid>
       
        </Box>
        // </div>
    )
}

export default CreateTweet;