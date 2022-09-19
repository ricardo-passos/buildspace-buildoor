import type { NextPage } from 'next'
import { Box, Center, Spacer, Stack, Link } from '@chakra-ui/react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

// components
import { NavBar } from '../components/Navbar'
import { Disconnected } from '../components/Disconnected'
import { Connected } from '../components/Connected'
import { useWallet } from '@solana/wallet-adapter-react'

const Home: NextPage = () => {
  const { connected } = useWallet()

  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name='The NFT Collection for buildoors' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        w='full'
        h='100vh'
        bgImage='url(/home-background.svg)'
        bgPos='center'
      >
        <Stack w='full' h='100vh' justify='center'>
          <NavBar />

          <Spacer />

          <Center>{connected ? <Connected /> : <Disconnected />}</Center>

          <Spacer />

          <Center mb='4' color='white'>
            <Link isExternal href='https://twitter.com/milos69'>
              build with buildspace
            </Link>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
