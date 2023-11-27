import {
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const PaymentMethod = () => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom sx={{ p: 3 }}>
        Shipping address
      </Typography>
      <Grid container spacing={2} sx={{ p: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name on card"
            variant="standard"
            fullWidth
            required
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Card number"
            variant="standard"
            fullWidth
            required
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Expiry date"
            variant="standard"
            fullWidth
            required
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="CVV"
            variant="standard"
            fullWidth
            required
            helperText="Last three digits on signature strip"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="primary" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PaymentMethod;
