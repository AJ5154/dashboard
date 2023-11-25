import { Link, Typography } from '@mui/material';
import React from 'react'

const Deposits = () => {
  return (
    <React.Fragment>
        <Typography variant='h5' color="primary" >Recent Deposits</Typography>
        <Typography variant='h3' >$5,6758.67</Typography>
        <Typography variant='h6' component="p" color="text.secondary" sx={{flex:1}} >On 24 May 2017</Typography>
        <div>
            <Link href="/deposits">View Balance</Link>
        </div>
    </React.Fragment>
  )
}

export default Deposits