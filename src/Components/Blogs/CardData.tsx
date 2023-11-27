import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export type CardDataPost = {
    desc: string;
    image: string;
    subheader:string,
    title: string;
};

interface CardDataProps {
  post: CardDataPost;
}
const CardData = (props: CardDataProps) => {
  const { post } = props;
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {post.subheader}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.desc}
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image={post.image}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

export default CardData;
