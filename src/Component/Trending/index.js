import React, { useState } from "react";
import {Box, List, ListItem, ListItemText, TextField, Paper, InputBase, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const Trending = () => {

    const [trending, setTrending] = useState([
        {
            id: 1,
            country: 'Trending In Indonesia',
            keyword: 'Trending Now',
            totalKeywords: '20k',
       },
       {
            id: 2,
            country: 'Trending In Indonesia',
            keyword: 'Dummy Trending',
            totalKeywords: '21k',
       },
       {
            id: 3,
            country: 'Trending for you',
            keyword: 'Something 3',
            totalKeywords: '210k',
       }
    ])

    const useStyles = makeStyles({
        root:{
            marginLeft:40,
            flex:1,
        },
        content:{
            marginLeft:15,
        },
        title:{
            paddingTop:20
        },
        trending:{
            backgroundColor:'#f5f4f2',
            width:"100%",
            borderRadius:20,
        },
        contenttext:{
            display:'block',
        },
        trendingDetail:{
            fontSize:12,
            color:'silver'
        },
        trendingText:{
            fontWeight:'bold',
            fontSize:16
        },

        search:{
            marginTop:10,
            height:40,
            borderRadius:50,
            backgroundColor:'#f5f4f2',
        },
        input: {
            flex: 1,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    })

    const classes = useStyles()

    return(
        <div className={classes.root} >
        <Box component="span" display="block">
            <Paper component="form" className={classes.search}>
                <IconButton disabled >
                    <SearchIcon className={classes.iconButton} />
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search Twitter"
                />
            </Paper>
        </Box>
        <Box component="span"  display="block" className={classes.trending}>
            <div className={classes.content}>
                <h4 className={classes.title}>Trends for you</h4>
            </div>
            <List>
                {
                    trending.map((trends) => {
                        return(
                            <ListItem alignItems="flex-start">
                            <ListItemText primary={
                                <div>
                                    <div className={classes.trendingDetail}>{trends.country}</div>
                                    <div className={classes.trendingText}>{trends.keyword}</div>
                                    <div className={classes.trendingDetail}>{trends.totalKeywords} Tweets</div>
                                </div>
                            }/>
                            
                            </ListItem>
                        )
                    })
                }
            </List>
          
        </Box>
        </div>
    )
}

export default Trending;