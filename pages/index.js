import Head from 'next/head'
import {Box} from '@chakra-ui/react'
export default function Home() {
  return (
    <Box pt={"20"} h={"container.lg"}>
      <Head>
        <title>Terms and Conditions Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </Box>   
  )
}
