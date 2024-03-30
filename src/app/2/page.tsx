
import Container from "@/components/Container";
import { Stack, Center, HStack } from "@chakra-ui/react";
import Pagination from "@/components/Pagination";

export default function PageTwo() {
  return (
    <Container>
      <Center pos={'relative'} height={'100%'} flexDir={'column'} zIndex={2} >
        <Stack width={'85%'} height={'70vh'} bg={'app.bglightGray'} rounded={8} >
          <h1>Hey</h1>
        </Stack>
        <Pagination />
      </Center>
    </Container>
  );
}