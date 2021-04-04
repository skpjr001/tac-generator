import Icon from "@chakra-ui/icon";
import { Box, Center, Flex, Grid, GridItem, Heading, HStack, Text} from "@chakra-ui/layout"
import Link from 'next/link';
import {FaCoffee, FaHeart} from 'react-icons/fa'

function Footer() { 
  return (
    <Box>
      <Heading px={{base:"5", md:"10", xl:"20"}} fontSize={"xl"} py={"8"} bg={"blackAlpha.100"}>Company</Heading>
      <Grid templateColumns={{base:"repeat(2, 1fr)",md:"repeat(5, 1fr)"}} templateRows={{md:"repeat(2, 1fr)"}}>
        <GridItem px={{base:"5", md:"10", xl:"20"}} py={{base:"5", md:"10"}} colSpan={{base:"2",md:"3"}} rowSpan={{md:"2"}} bg={"blackAlpha.300"}>
          <Text fontWeight={"bold"} fontSize={"lg"} textColor={"gray.500"}>DESIGNED BY</Text>
          <Heading pt={"4"} pb={"2"} fontWeight={"extrabold"} size={"3xl"} textColor={"gray.700"} _hover={{textColor:"gray.500"}}><Link href={"/"}><a>Pal Labs</a></Link></Heading>
          <Flex><Text fontWeight={"bold"} fontSize={"lg"} textColor={"gray.700"}>&#169; 2021</Text>
           <Link href='/policy'><a><Text px={"5"} fontWeight={"bold"} fontSize={"lg"} textColor={"gray.700"} _hover={{textColor:"gray.500"}}>PRIVACY POLICY</Text></a></Link>
          </Flex>
          <Text pt={"4"} pb={"2"} fontWeight={"bold"} fontSize={"lg"} textColor={"gray.500"}>ABOUT</Text>
          <Text fontWeight={"normal"} fontSize={"xl"} textColor={"gray.700"}>{"Lorem ipsem is a text to write in demo. with try and error it works well to needs Lorem ipsem is a text to write in demo. with try"} 
          {"a"}</Text>
        </GridItem>
        <GridItem px={{base:"5", md:"10"}} py={{base:"5", md:"10"}} colSpan={{base:"1",md:"1"}} rowSpan={{md:"1"}} bg={"blackAlpha.300"}>
          <Heading pb={"2"} fontWeight={"bold"} fontSize={"lg"} textColor={"gray.500"}>CONTACT</Heading>
          <Link href={"mailto:sachinkumarskrose@gmail.com"}><a><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>EMAIL</Text></a></Link>
          <Link href={"/contact"}><a><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>FORM</Text></a></Link>
        </GridItem>
        <GridItem px={{base:"5", md:"10"}} py={{base:"5", md:"10"}} colSpan={{base:"1",md:"1"}} rowSpan={{md:"1"}} bg={"blackAlpha.300"}>
          <Heading pb={"2"} fontWeight={"bold"} fontSize={"lg"} textColor={"gray.500"}>SOCIALIZE</Heading>
          <Link href={"https://facebook.com/skpjr001"}><a target="_blank"><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>FACEBOOK</Text></a></Link>
          <Link href={"https://twitter.com/skpjr001"}><a target="_blank"><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>TWITTER</Text></a></Link>
          <Link href={"https://instagram.com/skpjr001"}><a target="_blank"><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>INSTAGRAM</Text></a></Link>
        </GridItem>
        <GridItem px={{base:"5", md:"10"}} pb={{base:"5", md:"10"}} colSpan={{md:"1"}} rowSpan={{md:"1"}} bg={"blackAlpha.300"}>
          <Heading pb={"2"} fontWeight={"bold"} fontSize={"lg"} textColor={"gray.500"}>PARTNER SITES</Heading>
          <Link href={""}><a><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>SITE 1</Text></a></Link>
          <Link href={""}><a><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>SITE 2</Text></a></Link>
        </GridItem>
        <GridItem px={{base:"5", md:"10"}} pb={{base:"5", md:"10"}} colSpan={{md:"1"}} rowSpan={{md:"1"}} bg={"blackAlpha.300"}>
          <Heading pb={"2"} fontWeight={"bold"} fontSize={"lg"} textColor={"gray.500"}>PRODUCTS</Heading>
          <Link href={""}><a><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>PRODUCT 1</Text></a></Link>
          <Link href={""}><a><Text fontWeight={"semibold"} fontSize={"lg"} textColor={"gray.700"}>PRODUCT 2</Text></a></Link>
        </GridItem>
      </Grid>
      <Center py={"10"}>Made with<Icon mx={"1"} as={FaHeart} color="red.400" /> and <Icon mx={"1"} as={FaCoffee} color="yellow.700" /></Center>
    </Box>
  )
}

export default Footer
