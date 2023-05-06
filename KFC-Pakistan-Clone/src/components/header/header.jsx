import {
  Box,
  Button,
  Center,
  Flex,
  Spacer,
  Image,
  HStack,
  Text,
} from "@chakra-ui/react";

const Header = (props) => {
  return (
    <Box position={'sticky'} zIndex={'1100'} top={'0'} width={'100%'}>
      <Flex
        bg={"black"}
        color={"white"}
        width={"100%"}
        py={"3"}
        pl={"48"}
        pr={"48"}
      >
        <Flex>
          <Box>
            <Image src="/KFC-Red.png" alt="KFC-Logo" />
          </Box>
          <Center px={"8"}>
            <Button colorScheme="teal" variant="solid">
              Email
            </Button>
            <Button colorScheme="teal" variant="outline">
              Call us
            </Button>
          </Center>
        </Flex>
        <Spacer />
        {/* <Flex>
                <Center>
                    <Image
                        // px={"8"}
                        boxSize='40px'
                        objectFit='cover'
                        src='/bucket-empty.png'
                        alt='Bucket-empty'
                    />
                    <Button colorScheme='red' variant='solid'>
                        Register / Sign in
                    </Button>
                </Center>
            </Flex> */}
        <HStack spacing="24px">
          <Box>
            <Button
              colorScheme="white"
              variant="outline"
              size={"lg"}
              width={"32"}
            >
              Location
            </Button>
          </Box>
          <Box position={"relative"}>
            <Text position={"absolute"} top={"3px"} left={"10px"}>
              {props.cartCount}
            </Text>
            <Image
              // px={"8"}
              boxSize="30px"
              objectFit="cover"
              src="/bucket-empty.png"
              alt="Bucket-empty"
            />
          </Box>
          <Box>
            <Button colorScheme="red" variant="solid" size={"sm"}>
              Register / Sign in
            </Button>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
