import { Card, CardContent, CardMedia, Typography, IconButton, Grid } from '@mui/material';
import { Favorite as FavoriteIcon, Share as ShareIcon } from '@mui/icons-material';

export default function UserHeaderCard() {
  return (
    <Card sx={{ p: 2, mt: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <CardMedia
            component="img"
            image="https://via.placeholder.com/150" // Replace with your image URL
            alt="User"
            sx={{ borderRadius: '50%', width: '80px', height: '80px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography variant="h6" component="div">
              User Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Subtitle
            </Typography>
            <Typography variant="body1">
              Level: 1
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={5} container justifyContent="flex-end">
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
}