import React from "react";
import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import { Container, Grid } from "@mui/material";
import post1 from "./Blogpost1.md";
import post2 from "./Blogpost2.md";
import post3 from "./Blogpost3.md";
import CardData, { CardDataPost } from "./CardData";
import Header from "./Header";
import MainCard from "./MainCard";
import MainFeature, { PostType } from "./MainFeature";
import Sidebar from "./Sidebar";



const sectionItems = [
  { title: "Technology", url: "/technology" },
  { title: "Design", url: "/design" },
  { title: "Culture", url: "/Culture" },
  { title: "Business", url: "/Business" },
  { title: "Politics", url: "/Politics" },
  { title: "Opinion", url: "/Opinion" },
  { title: "Science", url: "/Science" },
  { title: "Health", url: "/Health" },
  { title: "Style", url: "/Style" },
  { title: "Travel", url: "/Travel" },
];

const mainCardData: PostType = {
  title: "Title of a longer featured blog post",
  desc: "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  linkText: "Continue reading...",
  imageText: "main image description",
};

const cardData:CardDataPost[] = [
  {
    title: "Featured Post",
    subheader: "Nov 12",
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
  },
  {
    title: "Post Post",
    subheader: "Nov 11",
    desc: "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
  },
];

const sidebarContent = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHub },
    { name: "Twitter", icon: Twitter },
    { name: "Facebook", icon: Facebook },
  ],
};

const posts = [post1, post2, post3];

const Blog = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <Header title="Blog" sectionItems={sectionItems} />
        <main>
          <MainFeature post={mainCardData} />
          <Grid container spacing={4}>
            {cardData.map((post) => (
              <CardData key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <MainCard title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebarContent.title}
              description={sidebarContent.description}
              archives={sidebarContent.archives}
              social={sidebarContent.social}
            />
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
};

export default Blog;
