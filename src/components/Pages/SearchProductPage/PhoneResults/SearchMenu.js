import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';



import SearchBox from '../SearchWrapper/SearchBox/SearchBox';
import CountryBox from '../SearchWrapper/CountryBox/CountryBox';
import CarriersBox from '../SearchWrapper/CarriersBox/CarriersBox';
import BrandBox from '../SearchWrapper/BrandBox/BrandBox';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
};

class SortBar extends React.Component {
    state = {
        top: false,
        left: false,
        bottom: false,
        right: false,
    };

    toggleDrawer = (side, open) => () =>{
        console.log("fire toggle")
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <List>
                    <ListItem >
                        <SearchBox/>
                    </ListItem>
                </List>
                <List>
                    <ListItem >
                        <h3>CATEGORIAS</h3>
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem >
                       <CountryBox/>
                    </ListItem>
                </List>

                <List>
                    <ListItem >
                        <CarriersBox/>
                    </ListItem>
                </List>

                <List>
                    <ListItem >
                        <BrandBox/>
                    </ListItem>
                </List>
            </div>
        );


        return (
            <div>
                <Button onClick={this.toggleDrawer('left', true)}>Buscar Categorias</Button>

                <SwipeableDrawer
                    open={this.state.left}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >

                        {sideList}
                    </div>
                </SwipeableDrawer>

            </div>
        );
    }
}



export default withStyles(styles)(SortBar);
