import {
  Container,
  VStack,
  Heading,
  Button,
  Text,
  HStack,
} from '@chakra-ui/react'
import Image from 'next/future/image'

export function Connected() {
  return (
    <VStack spacing='20'>
      <Container>
        <VStack spacing='8'>
          <Heading
            color='white'
            as='h1'
            size='1xl'
            noOfLines={1}
            textAlign='center'
          >
            Welcome Buildoor.
          </Heading>

          <Text color='bodyText' fontSize='xl' textAlign='center'>
            Each buildoor is randomly generated and can be staked to receive
            <Text as='b'> $BLD</Text>. Use your <Text as='b'>$BLD</Text> to
            upgrade your buildoor and receive perks within the community!
          </Text>
        </VStack>
      </Container>

      <HStack spacing='10'>
        <Image src='/avatar1.png' alt='' width='120' height='120' />
        <Image src='/avatar2.png' alt='' width='120' height='120' />
        <Image src='/avatar3.png' alt='' width='120' height='120' />
        <Image src='/avatar4.png' alt='' width='120' height='120' />
        <Image src='/avatar5.png' alt='' width='120' height='120' />
      </HStack>

      <Button bgColor='accent' color='white' maxW='380px'>
        mint buildoor
      </Button>
    </VStack>
  )
}
