import React, { useState, useEffect } from "react";
import {Grid, Box, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const Register = ({setAuth}) => {

    const useStyles = makeStyles({
        logo:{
            height: '100vh',
            width: '100%'
        },
        login:{
            marginLeft:20
        },
        form:{
            marginTop:'10%'
        },
        textfield:{
            marginBottom:20,
            [`& fieldset`]: {
                borderRadius: 30,
                height:50
              },
        }, 
        button:{
            background:'#1da1f2',
            border:'none',
            height:30,
            borderRadius:10,
            color:'white',
            float:'right',
            cursor:'pointer',
        },
        warning:{
            color:'red'
        }
    }) 

    const classes = useStyles();

    const handleInputChange = (e) => {
        const {name, value} = e.target
        console.log(name)
        setUser({...user, [name]: value})
    }

    const initialFormState = {email: '', user_name:'', password:''}
    const [user, setUser] = useState(initialFormState);

    const [isValid, setIsValid] = useState('')
    const onSubmit = async (e) => {
        const {email, user_name, password} = user
        e.preventDefault()
        try {

            const body ={email, user_name, password};
            const response = await fetch("/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const responseJson = await response.json()
            if(response.status === 401){
                setIsValid(responseJson)
            } else{
                localStorage.setItem("token", responseJson.token)
                setAuth(true)
            }
           
        } catch (err) {
            console.log(err.message)
        }
    }


    return(
        <Grid container justifyContent="center" >
            <div className={classes.login}>
            <h1>Register Now</h1>
                <form className={classes.form} onSubmit={onSubmit} >
                    <Box display='block' >
                        <TextField  className={classes.textfield} id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleInputChange} />
                    </Box>
                    <Box display='block' >
                        <TextField  className={classes.textfield} id="outlined-basic" label="User Name" variant="outlined" name="user_name" onChange={handleInputChange} />
                    </Box>
                    <Box display='block' >
                        <TextField className={classes.textfield} id="outlined-basic" label="Password" variant="outlined" name="password" onChange={handleInputChange}/>
                    </Box>
                    <div className="btn"> <button className={classes.button}>Register</button></div>
                </form>
              
                <p className={classes.warning}>{isValid}</p>
                <p >Do you have account ? <span><Link to="/login">Login</Link></span> </p>
            </div>
            
        </Grid>
    )
}

export default Register;