import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Features />
    </Box>
  )
}

export default Home
