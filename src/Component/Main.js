import React from "react";
import {Grid, Container, Hidden} from '@material-ui/core'
import MiniSidebar from "./MiniSidebar";
import Sidebar from "./Sidebar";
import TweetPost from "./TweetPost";
import Trending from "./Trending";


const Main = ({setAuth, logout}) => {
    return(
        <Container maxWidth="lg">
            <Grid container  spacing={1}>
                <Hidden only={['xs','lg','xl']}><MiniSidebar logout={logout} /></Hidden>
                <Hidden only={['xs','sm','md']}><Sidebar setAuth={setAuth} logout={logout} /></Hidden>
                <Grid item xs={12} sm={10} md={7} lg={6} xl={6}><TweetPost setAuth={setAuth} /></Grid>
                <Hidden only={['xs','sm']}  ><Trending /></Hidden>
            </Grid>
        </Container>
    )
}

export default Main;