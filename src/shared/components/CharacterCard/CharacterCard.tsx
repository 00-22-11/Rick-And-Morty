import { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../../App.router';

interface Props {
  id: number;
  name: string;
  image: string;
  origin: {
    name: string;
  };
}

export const CharacterCard: FC<Props> = ({ id, name, image, origin }) => (
  <Link to={`${AppRoutes.CHARACTERS}/${id}`}>
    <Card sx={{ width: 345 }}>
      <CardMedia component="img" height="200" image={image} alt={`Character-${id}`} style={{ objectFit: 'contain' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {origin.name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);
