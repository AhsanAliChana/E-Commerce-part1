import React from 'react'
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
import ProductImage1 from '../../assets/product-img-1.jpg'
import ProductImage2 from '../../assets/product-img-2.jpg'
import ProductImage3 from '../../assets/product-img-3.jpg'
import ProductImage4 from '../../assets/product-img-4.jpg'
import ProductImage5 from '../../assets/product-img-5.jpg'
import { Card, Link, Menu, MenuItem, Rating } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const productsData = [
  { id: 1,
   image: ProductImage1,
   name: "Haldiram's Sev Bhujia",
   category:"Snack & Munchies",
   price: "18",
   rating: "3",
  },

  { id: 2,
    image: ProductImage2,
    name: "NutriChoice Digestive",
    category:"Bakery & Biscuits ",
    price: "24",
    rating: "4",
  },

  { id: 3,
    image: ProductImage3,
    name: "Cadbury 5 Star Chocolate",
    category:"Bakery & Biscuits",
    price: "32",
    rating: "5",
  },

  { id: 4,
    image: ProductImage4,
    name: "Onion Flavour Potato",
    category:"Snack & Munchies",
    price: "4",
    rating: "4",
  },
  { id: 5,
    image: ProductImage5,
    name: "Salted Instant Popcorn",
    category:"Instant Food",
    price: "13",
    rating: "4",
  },
];

interface Props {
  
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function AppLayout(props: Props) {
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
        E-Store
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
    <Box sx={{ display: 'flex' }}>
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
        aria-controls={true ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={true ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleIcon />
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
        <MenuItem onClick={handleClose}>
        <Link className="text-decoration-none" to="/sign-in">My account</Link>
        </MenuItem>
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
        {/* product card */}
       <Box className="d-flex gap-2">

        {
          productsData.map((product)=>{
            return (
              <Card className='p-2'>
           <img src={product.image} alt=""/>
           <Typography variant="body2">{product?.category}</Typography>
           <Typography variant="h6">{product.name}</Typography>
           <Rating name="read-only" value={product.rating} readOnly />
           <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
           <Typography>${product.price}</Typography>
           <Button size="small" variant="contained"> <AddIcon />Add</Button>
           </Box>
        </Card>
            )
          })
        }
       
       </Box>
      </Box>
    </Box>
  );
}
