import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const AddressForm = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom >
        Shipping address
      </Typography>
      <Grid container spacing={3} >
        <Grid item xs={12} sm={6}>
          <TextField
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant="standard" required fullWidth label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            required
            label="Address line 1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="standard"
            fullWidth
            required
            label="Address line 2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="City" fullWidth variant="standard" required />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant="standard"
            required
            fullWidth
            label="State/Province/Region"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Zip / Postal code"
            fullWidth
            variant="standard"
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField variant="standard" required fullWidth label="Country" />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AddressForm;
