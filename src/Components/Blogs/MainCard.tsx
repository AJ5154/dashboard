import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import MarkDown from "./MarkDown";

interface MainProps {
  posts: ReadonlyArray<string>;
  title: string;
}
const MainCard = (props: MainProps) => {
  const { posts, title } = props;
  return (
    <React.Fragment>
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          "& .markdown": {
            py: 3,
          },
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map((post) => (
          <MarkDown className="markdown" key={post.substring(0, 40)}>
            {post}
          </MarkDown>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default MainCard;
