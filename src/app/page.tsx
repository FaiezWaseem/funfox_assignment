'use client';
import Container from "@/components/Container";
import Cloud from "@/components/cloud";
import { Stack, Center, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import { useDimesions, useBreakpoint } from "@/hook/useDimensions";

export default function Home() {

  const [, , isMobile, isTablet] = useDimesions();

  return (
    <Container showHelpBook={false} >
      <Center pos={'relative'} height={'100%'} flexDir={'column'} zIndex={2} >
        <Stack width={'85%'} minH={'70vh'} bg={'app.bglightGray'} rounded={8} >
          <Center>
            <HStack bg={'#FE6784'} justify={'center'} border={'3px dashed #FFAEBE'} py={5}
              px={10} my={5} rounded={10} width={{
                base: '80%',
                md: '60%',
                lg: '40%',
              }} >
              <Text color={'#fff'}
                fontSize={useBreakpoint({ base: 14, md: 16, lg: 18, xl: 22 })}
              >Element Of Story Writing</Text>
            </HStack>
          </Center>
          <Stack justify={'center'} p={10} >
            <Text fontSize={useBreakpoint({ base: 14, md: 16, lg: 22, xl: 24 })} lineHeight={1.1} >
              {`Welcome to term 2 of Writers Club. Are you excited for this amazing journey? Over the next week, we will be practicing the different elements of story writing. Our aim is to make stories more interesting and exciting.`}
            </Text>
          </Stack>
          <HStack justify={'center'} m={10} p={6} bg={'#25A3A1'} border={'3px dashed #FFF'}
            py={5} px={10} my={5} rounded={10}
          >
            <Text lineHeight={1.1} color={'#fff'} fontSize={useBreakpoint({ base: 14, md: 16, lg: 20, xl: 26 })} >
              {`There are`} <Text fontWeight={'bold'} fontSize={isTablet ? 20 : (isMobile ? 16 : 22)} display={'inline-block'} >five</Text> {`elements which make the foundation for story writing. An element is an essential part of something and every fiction story has the same key elements:`}
            </Text>
            <Image
              src={'/kid.svg'}
              width={80}
              height={60}
              alt="Kid Image"
            />
          </HStack>
          <HStack justify={'space-evenly'} flexWrap={'wrap'} >
            <Cloud label="SETTINGS" />
            <Cloud label="CHARACTERS" />
            <Cloud label="PLOT" />
            <Cloud label="PROBLEM OR CONFLICT" />
            <Cloud label="RESOLUTION" />
          </HStack>
          <Stack justify={'center'} p={10} >
            <Text fontSize={useBreakpoint({ base: 14, md: 16, lg: 18, xl: 24 })} lineHeight={1.1} >
              {`You must be familiar with some of these. If not, do not worry! we will cover all these elements as we go along.`}
            </Text>
          </Stack>
          <Center>
            <Stack
              justify={'center'}
              p={10}
              backgroundColor={'#FE6784'}
              gap={0}
              justifyContent={'center'}
              paddingLeft={'4%'}
              m={6}
              mx={10}
              rounded={7}
            >
              <Stack
                bgImage={'url(/paper.png)'}
                backgroundSize={'cover'}
                backgroundRepeat={'no-repeat'}
                paddingLeft={'4%'}
              >
                <Text fontSize={useBreakpoint({ base: 14, md: 16, lg: 18, xl: 26 })} width={isTablet ? '90%' : (isMobile ? '100%' : '80%')} >
                  {`For today’s lesson, we will try to understand and practice writing the setting for our stories. The setting is an important element of every fiction story.`}
                </Text>
              </Stack>
            </Stack>
          </Center>
        </Stack>
        <Pagination
          page={1}
          next="/2"
          prev="/"
        />
      </Center>
    </Container>
  );
}