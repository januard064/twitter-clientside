import React, { useEffect, useState } from "react";
import {Box, TextareaAutosize,  Grid, Avatar} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel';

const ModalUpdateTweet = ({closeModal, currentState, postUpdateTweet}) => {

    const useStyles = makeStyles({
        root: {
            width:'40%',
            position:'fixed',
            height:'25%',
            top:'20%',
            backgroundColor:'white',
            padding:20,
            left:'20%',
            borderRadius:10
        },
        profile : {
           
        },
        input:{
            width:'100%',
            border:'none',
            outline:'none',
        },
        close:{
            float:'right',
            cursor:'pointer'
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
            float:'right'
        }
    })

    const classes = useStyles();

    const [updateTweet, setUpdateTweet] = useState(currentState)

    useEffect(
        () => {
            setUpdateTweet(currentState)
            console.log('tweet yang dipilih', currentState)
        },[]
    )

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setUpdateTweet({...updateTweet,[name]: value})
        console.log('update', value)
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        postUpdateTweet(updateTweet)
        closeModal()
    }
    
    return(
        <Box className={classes.root} zIndex="tooltip"  boxShadow={3} >
            <CancelIcon className={classes.close} onClick={() => closeModal()} />
            <form onSubmit={onSubmit} >           
                <Grid container>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} > <Avatar alt="image profile" src="/assets/images/profile.jpg" className={classes.profile} ></Avatar> </Grid>
                    <Grid item xs={8} sm={8} md={8} lg={8} xl={8} > <TextareaAutosize name="tweets" minRows={3} className={classes.input} defaultValue={currentState.tweets} onChange={handleInputChange} /></Grid>
                    {/* {currentState.tweet_id} */}
                </Grid>
               
                <div><button className={classes.tweetsubmitbutton} >Tweet</button></div>
            </form>

        </Box>
    )

}

export default ModalUpdateTweet;