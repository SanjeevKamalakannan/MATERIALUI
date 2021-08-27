import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import HomeIcon from '@material-ui/icons/Home';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GroupIcon from '@material-ui/icons/Group';
import AppsIcon from '@material-ui/icons/Apps';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import product1 from './assets/product1.jpg'; 
import product2 from './assets/product2.png'; 
import product3 from './assets/product3.jpg'; 
import product4 from './assets/product4.jpg'; 
import product5 from './assets/product5.jpg'; 
import product6 from './assets/product6.jpg'; 
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  cardGrid : {
    padding : '40px 80px',
  },
  card : {
    borderRadius : '20px',
    height : '300px',
    width : '320px',
    display : 'flex',
    flexDirection : 'column'
  },
  cardMedia: {
    height: 0,
    paddingTop : "100%",
    
  },
  cardContent : {
    color : 'black'
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor : "#01AA00" }}
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title} noWrap>
            Quantiphi
          </Typography>
          
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
          <Button 
          endIcon = {<ArrowDropDownOutlinedIcon/>}
          color="inherit">Links</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
        <Link to="/">
          <ListItem button key={'Home'}>
              <ListItemIcon>{<HomeIcon/>}</ListItemIcon>
              <ListItemText primary={'Home'} />
          </ListItem>
          </Link>
          <Link to="/register">
          <ListItem button key={'Register'}>
              <ListItemIcon>{<ExitToAppIcon/>}</ListItemIcon>
              <ListItemText primary={'Register'} />
          </ListItem>
          </Link>
          <Link to="/login">
            <ListItem button key={'Login'}>
                <ListItemIcon>{<VpnKeyIcon/>}</ListItemIcon>
                <ListItemText primary={'Login'} />
            </ListItem>
          </Link>
          <Link to="/employees">
          <ListItem button key={'Employees'}>
              <ListItemIcon>{<GroupIcon/>}</ListItemIcon>
              <ListItemText primary={'Employees'} />
          </ListItem>
          </Link>
          <Link to="/products">
          <ListItem button key={'Products'}>
              <ListItemIcon>{<AppsIcon/>}</ListItemIcon>
              <ListItemText primary={'Products'} />
          </ListItem>
          </Link>
          <Link to="/addproduct">
          <ListItem button key={'Add Product'}>
              <ListItemIcon>{<LibraryAddIcon/>}</ListItemIcon>
              <ListItemText primary={'Add Product'} />
          </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <div className={classes.root}>
          <Grid container justify = "center">
            <Grid item>
            <TextField id="outlined" label="Search" variant="outlined" className={classes.title} style = {{ width : 600}}></TextField>
            </Grid>
            <Grid item>
            <Button variant = "contained"
              style={{ 
                padding : "15px 30px ",
                backgroundColor : "#01AA00",
                color :"White",
                }}>Submit</Button>
            </Grid>
          </Grid>
          </div>
            <Container className = {classes.cardGrid}>
              <Grid container spacing={4}>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={product1}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Typography style={{fontSize : "14px" , fontFamily : "Montserrat", padding : "15px 5px 0px 80px" , color : 'black'}} variant='h5'>Oil-Lubricant-Tonne <br/></Typography>
                  <Typography style={{fontFamily : "Montserrat" , padding : "0 95px" , color : 'black'}} variant='h5'>Supplier <br/></Typography>
                </Grid>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={product2}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Typography style={{fontSize : "14px" , fontFamily : "Montserrat", padding : "15px 5px 0px 80px" , color : 'black'}} variant='h5'>Petroleum-Gas-Tonne <br/></Typography>
                  <Typography style={{fontFamily : "Montserrat" , padding : "0 95px" , color : 'black'}} variant='h5'>Supplier <br/></Typography>
                </Grid>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={product3}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Typography style={{fontSize : "14px" , fontFamily : "Montserrat", padding : "15px 5px 0px 80px" , color : 'black'}} variant='h5'>Customer Services<br/></Typography>
                  <Typography style={{fontFamily : "Montserrat" , padding : "0 85px" , color : 'black'}} variant='h5'>Employee <br/></Typography>
                </Grid>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={product4}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Typography style={{fontSize : "14px" , fontFamily : "Montserrat", padding : "15px 5px 0px 80px" , color : 'black'}} variant='h5'>Oil-Lubricant-Tonne <br/></Typography>
                  <Typography style={{fontFamily : "Montserrat" , padding : "0 95px" , color : 'black'}} variant='h5'>Supplier <br/></Typography>
                </Grid>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={product5}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Typography style={{fontSize : "14px" , fontFamily : "Montserrat", padding : "15px 5px 0px 80px" , color : 'black'}} variant='h5'>Petroleum-Gas-Tonne <br/></Typography>
                  <Typography style={{fontFamily : "Montserrat" , padding : "0 95px" , color : 'black'}} variant='h5'>Supplier <br/></Typography>
                </Grid>
                <Grid item>
                  <Card className={classes.card}>
                    <CardMedia
                    className = {classes.cardMedia}
                    image={product6}
                    title = "image title"
                    />
                    <CardContent className={classes.cardContent}>
                    
                    </CardContent>
                  </Card>
                  <Typography style={{fontSize : "14px" , fontFamily : "Montserrat", padding : "15px 5px 0px 80px" , color : 'black'}} variant='h5'>Customer Services<br/></Typography>
                  <Typography style={{fontFamily : "Montserrat" , padding : "0 85px" , color : 'black'}} variant='h5'>Employee <br/></Typography>
                </Grid>
              </Grid>
            </Container>
        
      </main>
    </div>
  );
}
