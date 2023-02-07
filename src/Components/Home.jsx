import React from 'react'
import { Container, Typography, Box } from '@material-ui/core'

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box my={5}>
        <Typography variant="h3" component="h2" align="center">
          Vijay K Gautam(India)
        </Typography>
        <Typography component="h2" align="center">
          Using Json Server for dummy data
          <p>
            <i>
              I dont have too much time to implemet the login functionality.
              Sorry for that.
            </i>
          </p>
          <p>
            <i>Use command to run application: npm I  and npm run dev
            </i>
          </p>
        </Typography>
      </Box>
    </Container>
  )
}

export default Home
