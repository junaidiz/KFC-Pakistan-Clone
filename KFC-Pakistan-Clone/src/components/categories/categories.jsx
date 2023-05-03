import { Box, VStack, HStack, Image } from "@chakra-ui/react";
import SectionHeading from "./section-heading";

function Categories() {
    return(
        <Box ml={'48'} mr={'48'}>
            <VStack flex={'1'}>
                <SectionHeading heading={'Browse Categories'}/>
                <Box width={'100%'}>
                    <HStack spacing={'4'} ml={'16'} mr={'16'} mt={'6'} justifyContent={'center'}>
                        <Box>
                            <Image src='/everyday-value.jpg' alt="Everyday Value"/>
                        </Box>
                        <Box>
                            <Image src='/ala-carte-combos.png' alt="Everyday Value"/>
                        </Box>
                        <Box>
                            <Image src='/signature-boxes.jpg' alt="Everyday Value"/>
                        </Box>
                        <Box>
                            <Image src='/sharing.jpg' alt="Everyday Value"/>
                        </Box>
                        <Box>
                            <Image src='/snacks-and-beverages.jpg' alt="Everyday Value"/>
                        </Box>
                        <Box>
                            <Image src='/midnight.png' alt="Everyday Value"/>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Categories;