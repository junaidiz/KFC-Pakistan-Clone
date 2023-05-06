import { Box, VStack, HStack, Image } from "@chakra-ui/react";
import SectionHeading from "./section-heading";
import { Link } from "react-router-dom";

function Categories() {
    return(
        <Box ml={'48'} mr={'48'}>
            <VStack flex={'1'}>
                <SectionHeading heading={'Browse Categories'}/>
                <Box width={'100%'}>
                    <HStack spacing={'4'} ml={'16'} mr={'16'} mt={'6'} justifyContent={'center'}>
                        <Box>
                            <Link to={'/everyday-value'}>
                                <Image src='/everyday-value.jpg' alt="Everyday Value"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to={'/ala-carte-&-combos'}>
                            <Image src='/ala-carte-combos.png' alt="Everyday Value"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to={'/signature-boxes'}>
                            <Image src='/signature-boxes.jpg' alt="Everyday Value"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to={'/sharing'}>
                            <Image src='/sharing.jpg' alt="Everyday Value"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to={'/snacks-&-beverages'}>
                            <Image src='/snacks-and-beverages.jpg' alt="Everyday Value"/>
                            </Link>
                        </Box>
                        <Box>
                            <Link to={'/midnight'}>
                            <Image src='/midnight.png' alt="Everyday Value"/>
                            </Link>
                        </Box>
                    </HStack>
                </Box>
            </VStack>
        </Box>
    )
}

export default Categories;