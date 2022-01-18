import React, { useState, useEffect } from "react";
import {Link, Redirect} from 'react-router-dom';

import {Grid, Box, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const Login = ({setAuth}) => {

    const useStyles = makeStyles({
        logo:{
            height: '100vh',
            width: '100%'
        },
        login:{
            marginLeft:20
        },
        form:{
            marginTop:'20%'
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
            cursor:'pointer'
        },
        warning:{
            color:'red'
        }
    }) 

    const classes = useStyles();

    const [userlist, setUserlist] = useState([])

    const handleInputChange = (e) => {
        const {name, value} = e.target
        console.log(name)
        setUser({...user, [name]: value})
    }

    const getUserList = async () =>{
        const response = await fetch("/auth/login")
        const responseJson = await response.json()

        setUserlist(responseJson);
        console.log(`list of user ->`, responseJson)
    }

    useEffect (() => {
        getUserList()
    },[])

    const initialFormState = {email: '', password:''}
    const [user, setUser] = useState(initialFormState);

    const [isValid, setIsValid] = useState('')

     const onSubmit = async (e) => {
        const {email, password} = user
        e.preventDefault()
        try {
            const body ={email, password};
            const response = await fetch("/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            const responseJson = await response.json()

            // console.log('response->',responseJson)
            if(response.status === 401){
                console.log(responseJson)
                setIsValid(responseJson)
            } else{
                localStorage.setItem("token", responseJson.token)
                setAuth(true)
            }
            
           
        } catch (err) {
            console.log('err.message')
            setIsValid(err.message)
        }
     }


 
    return(

        <Grid container>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
            <Box
                component="img"
                className={classes.logo}
                alt="Twitter Logo"
                src="/assets/images/twitter.jpg"
            />
            </Grid>
            <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                {/* <Link to="/home">Beranda</Link> */}
                <div className={classes.login}>
                <h1>Happening Now</h1>
                    <form className={classes.form} onSubmit={onSubmit} >
                        <Box display='block' >
                            <TextField  className={classes.textfield} id="outlined-basic" label="Email" variant="outlined" name="email" onChange={handleInputChange} />
                        </Box>
                        <Box display='block' >
                            <TextField className={classes.textfield} id="outlined-basic" label="Password" variant="outlined" name="password" onChange={handleInputChange} />
                        </Box>
                        <div><button className={classes.button}>Login</button></div>
                    </form>
                    <p className={classes.warning}> { isValid  }</p>
                    <p>Don't have an account yet? <spapn><Link to="/register">register</Link></spapn></p>
                </div>
                
              
            
             
            </Grid>
        </Grid>
    )
}

export default Login;