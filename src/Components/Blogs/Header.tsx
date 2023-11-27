import { Search } from "@mui/icons-material";
import { Button, IconButton, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  sectionItems: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

const Header = (props: HeaderProps) => {
  const { title, sectionItems } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <Search />
        </IconButton>
        <Button variant="outlined">signup</Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {sectionItems.map((section) => (
          <Link
          color="inherit"
          noWrap
          key={section.title}
          variant="body2"
          href={section.url}
          sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

export default Header;
