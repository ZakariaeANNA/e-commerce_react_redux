import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button } from '@mui/material';
import "./ItemCard.css";

export default function ItemCard() {

  return (
    <Card sx={{ maxWidth: 345 }} className="item">
      <CardMedia
        component="img"
        height="194"
        image="https://www.simplyrecipes.com/thmb/kuFvxBY8s3avWVIwFrO5G7aws6A=/2000x1334/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-HORIZONTAL-ce4d8fe93ec045c0a868ec065f49800a.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing className="cardactions">
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Button variant="contained">Contained</Button>
      </CardActions>
    </Card>
  );
}
