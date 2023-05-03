import {
  Box,
  HStack,
  Heading,
} from "@chakra-ui/react";

function SectionHeading({ heading }) {
  return (
    <Box mt={"6"} width={"100%"}>
      <HStack>
        <Heading as="h3" size="lg">
          {heading}
        </Heading>
      </HStack>
    </Box>
  );
}

export default SectionHeading;
