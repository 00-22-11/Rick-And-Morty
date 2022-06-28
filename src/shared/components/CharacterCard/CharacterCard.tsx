import { FC } from 'react';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { AppRoutes } from '../../../App.router';
import styles from './CharacterCard.module.scss';

interface Props {
  id: number;
  name: string;
  image: string;
}

export const CharacterCard: FC<Props> = ({ id, name, image }) => (
  <Link to={`${AppRoutes.CHARACTERS}/${id}`}>
    <Card sx={{ width: 345 }} className={styles.card}>
      <CardMedia component="img" height="200" image={image} alt={`Character-${id}`} style={{ objectFit: 'contain' }} />
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ textDecoration: 'none', textAlign: 'center', fontFamily: 'League Gothic', color: 'cornflowerblue' }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
);
