import { FC } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type CharacterCardProps = {};

const CharacterCard: FC<CharacterCardProps> = () => {
  return (
    <Card>
      <CardMedia
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: 'center' }}
        >
          Lizard
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button size="small">プロフィールを見る</Button>
      </CardActions>
    </Card>
  );
};

export default CharacterCard;
