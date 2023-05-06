import { Box, Image } from "@chakra-ui/react"

function Carousal() {
    return (
        <Box>
            <Image 
                src='/KFC-Banner.jpg'
                alt="KFC-Banner"
                ml={'auto'}
                mr={'auto'}
                mt={'4'}
                width={'1300px'}
            />
        </Box>
    )
}

export default Carousal