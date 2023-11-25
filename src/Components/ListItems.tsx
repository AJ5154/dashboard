import { Assignment, BarChart, Dashboard, Layers, People, ShoppingCart } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import React from "react";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Dashboard />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCart />
      </ListItemIcon>
      <ListItemText primary="Orders" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <People />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChart />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Layers />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>
  </React.Fragment>
);
export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader inset>
        Saved Reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Current Month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Last Quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Assignment />
      </ListItemIcon>
      <ListItemText primary="Year-End Sale" />
    </ListItemButton>
   
    
  </React.Fragment>
);
