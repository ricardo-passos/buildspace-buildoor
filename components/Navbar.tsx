import { HStack, Spacer, Button } from '@chakra-ui/react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import styles from '../styles/Home.module.css'

export function NavBar() {
  return (
    <HStack w='full' p='4'>
      <Spacer />

      <WalletMultiButton className={styles['wallet-adapter-button-trigger']} />
    </HStack>
  )
}
