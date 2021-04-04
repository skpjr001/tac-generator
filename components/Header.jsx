import { Button } from "@chakra-ui/button"
import { Box, Divider, Flex, Heading } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import Link from 'next/link'
import Head from 'next/head';

function Header() {
  return (
    <>
    <Head>
      <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="skpjr001" data-description="Support me on Buy me a coffee!" data-message="Thank you for visiting. Support us to keep these sites running it really helps to payoff server bills." data-color="#c05621" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
    </Head>
    
    <Box width={"full"} position={"fixed"}>
      <Divider h={"2"}  bg={"orange.600"} orientation={"horizontal"}/>
      <Flex px={{base:"5",md:"10", xl:"20"}} py={"2"} bg={"white"} direction={{base:"column",md:"row"}} height={"fit-content"} alignItems={"center"} justifyContent={"space-between"} boxShadow={"2xl"}>
        <Heading  size={"lg"} textAlign={"left"} textColor={"blackAlpha.700"}><Link href={`/`}><a>Terms and Conditions Generator</a></Link></Heading>
        <Flex>
          <Button hidden m={"2"} colorScheme={"messenger"}>Variant</Button>
          <Select m={"2"} colorScheme={"messenger"}  placeholder="Choose Variant">
            <option>Variant 1</option>
            <option>Variant 2</option>
            <option>Variant 3</option>
          </Select>
          <Button m={"2"} colorScheme={"blackAlpha"}>FAQ</Button>
        </Flex>
      </Flex>
    </Box>
    </>
  )
}

export default Header

