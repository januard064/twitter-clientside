import React from "react";
import {Grid, List, ListItem, ListItemIcon, Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListOutlinedIcon from '@material-ui/icons/ListOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import MoreHorizRoundedIcon from '@material-ui/icons/MoreHorizRounded';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const MiniSidebar = ({logout}) => {

    const useStyles = makeStyles({
        root: {
            // backgroundColor:'blue',
            borderColor:'#e6ecf0',
        },
        brand:{
            color:'#1da1f2',
            fontSize:35
        },
        icon:{
            color:'black',
            fontSize:30
        },
        hover:{
            borderRadius:'50%',
            textAlign:'center',
            width:60

        }
    })    

    const classes = useStyles();

    return(
        <Box className={classes.root} >
            <List>
                <ListItem>
                    <ListItemIcon>
                        <TwitterIcon className={classes.brand} />
                    </ListItemIcon>
                </ListItem>
            </List>
            <List>
                <ListItem button className={classes.hover}>
                    <ListItemIcon>
                        <HomeIcon className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.hover}>
                    <ListItemIcon>
                        <SearchIcon className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.hover}>
                    <ListItemIcon>
                        <NotificationsOutlinedIcon className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.hover}>
                    <ListItemIcon>
                        <MailOutlineOutlinedIcon className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.hover}>
                    <ListItemIcon>
                        <PersonOutlineOutlinedIcon className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.hover}>
                    <ListItemIcon>
                        <MoreHorizRoundedIcon className={classes.icon} />
                    </ListItemIcon>
                </ListItem>
                <ListItem button className={classes.hover}>
                    <ExitToAppIcon onClick={(e) => logout(e)}/>
                </ListItem>
            </List>
        </Box>
    )
}

export default MiniSidebar;