import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import product from "../images/6.jpg"
import product1 from "../images/product-img-6.jpg"
import product2 from "../images/product-img-7.jpg"
import product3 from "../images/product-img-8.jpg"
import product4 from "../images/product-img-9.jpg"
import {  Card , Rating } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

const Productdata = [
  {
    Name: "Haldiram's Sev Bhujia",
    Category: "Snack & Munchies",
    img: product,
    Price: "$18",
    OriginalPrice: "$24",
    Rating: 4.5,
  },
  {
    Name: "NutriChoice Digestive",
    Category: "Bakery & Biscuits",
    img: product1,
    Price: "$24",
    OriginalPrice: "",
    Rating: 4.5,
  },
  {
    Name: "Cadbury 5 Star Chocolate",
    Category: "Bakery & Biscuits",
    img: product2,
    Price: "$32",
    OriginalPrice: "$35",
    Rating: 5,
  },
  {
    Name: "Onion Flavour Potato",
    Category: "Snack & Munchies",
    img: product3,
    Price: "$3",
    OriginalPrice: "$5",
    Rating: 3.5,
  },
  {
    Name: "Salted Instant Popcorn",
    Category: "Instant Food",
    img: product4,
    Price: "$13",
    OriginalPrice: "$18",
    Rating: 4.5,
  },
];


interface Props {
 
  window?: () => Window;
}

const drawerWidth = 340;
const navItems = ['Home', 'About', 'Contact'];

 function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box className="" sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            E-Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
              <Button className='text-white'
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AccountCircleIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}> <Link to="/signin" className='text-decoration-none'>My account</Link></MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,  
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
  
      </Box>
    </Box>
      <div className='d-flex gap-2 container'> 
      {Productdata.map((Product)=>{
      return(
       
        <Card className='p-2 shadow'>
<img className='w-75 h-50' src={Product.img} alt="" />
<Typography variant='body2'>{Product.Name}</Typography>

<Typography variant='h5'> {Product.  Rating }</Typography>
<Typography variant='h6'> {Product.Catogry}</Typography>
<Typography variant='body1'>  <Rating name="read-only" value={4} readOnly /> {Product. Price}</Typography>
<box className="d-flex justify-content-between  align-items-center"> <Typography variant='body1'> {Product. Price}</Typography>
<Button size='small' variant='contained'> <AddIcon/>  Add</Button>
</box>
        </Card>
     
      )
      }) }
     </div>
</>  
);
}
export default Header;