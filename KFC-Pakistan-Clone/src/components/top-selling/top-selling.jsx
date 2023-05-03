import {
    Box,
    VStack,
    HStack,
    Button, Card,
    CardBody,
    CardFooter, Heading,
    Stack,
    Image,
    Text,
    Flex
} from "@chakra-ui/react";
import SectionHeading from "../categories/section-heading";

const TopSelling = ({cartCount, setCartCount}) => {
  const topSelling = [
    {
      id: 36,
      name: "Krunch Burger",
      imageUrl: "/kentucky-burger.jpg",
      productDescription:
        "Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun",
      originalPrice: 250.0,
      productType: "PRODUCT",
      isAvailableForSale: true,
    },
    {
      id: 33,
      name: "Hot Wings",
      imageUrl: "/hot-wings.jpg",
      productDescription: "10 Pcs of our Signature Hot & Crispy Wings",
      originalPrice: 550.0,
      productType: "PRODUCT",
      isAvailableForSale: true,
    },
    {
      id: 51,
      name: "Xtreme Duo Box",
      imageUrl: "/xtreme-duo-box.jpg",
      productDescription:
        "The irresistible combo of 2 signature Zingers + 2 pcs Hot & Crispy Chicken + 1 large fries + 2 drinks",
      originalPrice: 1390.0,
      productType: "PACKAGE",
      isAvailableForSale: true,
    },
    {
      id: 23,
      name: "Krunch With Fries N Drink",
      imageUrl: "/kentucky-with-fries-and-drink.jpg",
      productDescription: "Krunch + 1 regular Fries + 1 regular Drink",
      originalPrice: 490.0,
      productType: "PACKAGE",
      isAvailableForSale: true,
    },
  ];

  const addToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <Box ml={"48"} mr={"48"} mb={"12"}>
      <VStack flex={"1"}>
        <SectionHeading heading={'Top Selling'} />
        <Box width={"100%"}>
          <HStack spacing={"4"} mt={"6"}>
            {topSelling.map((data) => (
              <Card key={data.id} maxW="sm">
                <CardBody>
                  <Image src={data.imageUrl} borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{data.name}</Heading>
                    <Text>{data.productDescription}</Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <Flex width={'100%'}>
                    <Box flex={'1'}>
                        <Text fontSize="2xl" fontWeight={'bold'}>
                            Rs {data.originalPrice}
                        </Text>
                    </Box>
                    <Box flex={'1'}>
                        <Button variant="solid" colorScheme="red" onClick={addToCart}>
                            Add to cart
                        </Button>
                    </Box>
                  </Flex>
                </CardFooter>
              </Card>
            ))}
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
}

export default TopSelling;
