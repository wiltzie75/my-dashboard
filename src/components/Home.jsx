import React from 'react';
import { styled } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Grid from '@mui/joy/Grid';
import Paper from '@mui/material/Paper';
import Transaction from './transaction.jsx';
import Sidebar from './sidebar.jsx';
import Charts from './Charts.jsx';
import Heading from './Heading.jsx'
import { mockTransactions } from '../data/mockData.js';


const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography['body-sm'],
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: theme.palette.background.level1,
  }),
}));

export default function ColumnLayoutInsideGrid() {
  return (
    <Grid container spacing={3} sx={{ flexGrow: 1 }}>
      <Grid size="grow">
        <Heading />
      </Grid>
      <Grid size="grow">
        <Sidebar />
      </Grid>
      <Grid size={6}>
      {mockTransactions.map(givenTransaction => {
            console.log(givenTransaction)
            return <Transaction givenTransaction={givenTransaction}/>
          })
          }
      </Grid>
      <Grid size="grow">
        <Charts />
      </Grid>
    </Grid>
  )
}