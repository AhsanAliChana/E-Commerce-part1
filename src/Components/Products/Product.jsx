import React from 'react';
import product from "../images/6.jpg"
import product1 from "../images/product-img-6.jpg"
import product2 from "../images/product-img-7.jpg"
import product3 from "../images/product-img-8.jpg"
import product4 from "../images/product-img-9.jpg"
import { Button, Card, Rating, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

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

const Product = () => {
  return (
    <div className="d-flex flex-wrap gap-3">
      {Productdata.map((product, index) => (
        <Card key={index} className="p-3 shadow" style={{ width: '200px' }}>
          <img
            src={product.img}
            alt={product.Name}
            className="w-100 h-auto"
            style={{ objectFit: "cover" }}
          />
          <Typography variant="body2" color="textSecondary">
            {product.Category}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {product.Name}
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Rating value={product.Rating} precision={0.5} readOnly />
            <Typography variant="body2">({product.Rating})</Typography>
          </Box>
          <Box display="flex" alignItems="baseline" justifyContent="space-between">
            <Typography variant="h6" color="primary">
              {product.Price}
            </Typography>
            {product.OriginalPrice && (
              <Typography
                variant="body2"
                color="textSecondary"
                style={{ textDecoration: "line-through" }}
              >
                {product.OriginalPrice}
              </Typography>
            )}
          </Box>
          <Button
            size="small"
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
          >
            Add
          </Button>
        </Card>
      ))}
    </div>
  );
};

export default Product;
