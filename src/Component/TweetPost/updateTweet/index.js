import React, { useEffect, useState } from "react";
import {Box, TextareaAutosize,  Grid, Avatar, Modal, Fade, Backdrop} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CancelIcon from '@material-ui/icons/Cancel';

const ModalUpdateTweet = ({closeModal, currentState, postUpdateTweet, modalUpdate}) => {

    const useStyles = makeStyles({
        root: {
            position:'fixed',
            top:'20%',
            backgroundColor:'white',
            padding:10,
            borderRadius:10,
            alignItems: 'center',
            justifyContent: 'center',
        },
        profile : {
           width:40,
           height:40
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
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            
          },
        paper: {
            backgroundColor: 'white',
            border: '2px solid #000',
            boxShadow: 5,
            border:'none',
            padding:20,
            borderRadius:20
          },
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
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modalUpdate}
        onClose={closeModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalUpdate}>
          <Grid item xs={10} sm={6} md={5} lg={4} xl={4} className={classes.paper}>
            <form onSubmit={onSubmit} >           
                <Grid container>
                    <Grid item xs={2} sm={2} md={2} lg={2} xl={2} > <Avatar alt="image profile" src="/assets/images/profile.jpg" className={classes.profile} ></Avatar> </Grid>
                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10} > <TextareaAutosize name="tweets" minRows={3} className={classes.input} defaultValue={currentState.tweets} onChange={handleInputChange} /></Grid>
                    {/* {currentState.tweet_id} */}
                </Grid>
               
                <div><button className={classes.tweetsubmitbutton} >Tweet</button></div>
            </form>
          </Grid>
        </Fade>
      </Modal>
    )

}

export default ModalUpdateTweet;