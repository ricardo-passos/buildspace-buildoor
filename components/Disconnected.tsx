import { MouseEvent } from 'react'
import { Container, VStack, Heading, Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'
import { useWallet } from '@solana/wallet-adapter-react'

export function Disconnected() {
  // hooks
  const { setVisible } = useWalletModal()
  const { wallet, connect } = useWallet()

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    if (event.defaultPrevented) return

    if (!wallet) {
      setVisible(true)
    } else {
      connect()
    }
  }

  return (
    <Container>
      <VStack spacing='20'>
        <Heading
          color='white'
          as='h1'
          size='2xl'
          noOfLines={2}
          textAlign='center'
        >
          Mint your buildoor. Earn $BLD. Level up.
        </Heading>

        <Button
          bgColor='accent'
          color='white'
          maxW='380px'
          onClick={handleClick}
        >
          become a builder <ArrowForwardIcon />
        </Button>
      </VStack>
    </Container>
  )
}
