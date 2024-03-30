'use client';
import Container from "@/components/Container";
import { Stack, Center, HStack, Text, Input , Image } from "@chakra-ui/react";
import Pagination from "@/components/Pagination";

import { useBreakpoint, useDimesions } from "@/hook/useDimensions";


export default function PageTwo() {
  return (
    <Container showHelpBook >
      <Center pos={'relative'} height={'100%'} flexDir={'column'} zIndex={2} >
        <Stack width={'85%'} height={'auto'} bg={'app.bglightGray'} rounded={8} >
          <Stack p={3} m={8} >
            <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 22, xl: 44 })} fontWeight={500} >Can you figure out the definition of setting from the following examples?</Text>
            <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 22, xl: 44 })} fontWeight={'lighter'} color={'GrayText'}  >(take a minute to think about this)</Text>
          </Stack>
          <HStack justify={'space-evenly'} flexWrap={'wrap'} alignItems={'center'} >
            <Card src={'/sunny_beach.png'} alt={'Sunny Beach'} text="Sunny day at a beach" />
            <Card src={'/horror.png'} alt={'horror House'} text="A cold rainy night in a haunted house in October" />
          </HStack>
          <Stack p={8}  >
            <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 18, xl: 44 })}  >So, what do you think the definition of setting is?</Text>
            <HStack w={'100%'} justify={'space-between'} flexWrap={'wrap'} >
              <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 18, xl: 36 })} >Any guesses?</Text>
              <Stack width={'50%'} border={`3px dashed #B6B6B6`} textAlign={'center'} rounded={5} >
                <Input variant='flushed' width={'100%'} _focus={{
                  border: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                }} />
              </Stack>
              <HStack>
                <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 18, xl: 36 })} >Hint:</Text>
                <Image src={'/clock.svg'} width={useBreakpoint({ base: 30, md: 50, lg: 50, xl: 80 })} height={40} alt="Clock Timeout Icon" />
                <Image src={'/home.svg'} width={useBreakpoint({ base: 30, md: 50, lg: 50, xl: 80 })} height={40} alt="Home Icon" />
              </HStack>
            </HStack>
          </Stack>
          <Stack justify={'center'} m={10} p={6} bg={'#25A3A1'} border={'3px dashed #FFF'}
            py={5} px={10} my={5} rounded={10} >
            <Text lineHeight={1.1} color={'#fff'} display={'flex'} fontSize={useBreakpoint({ base: 14, md: 16, lg: 20, xl: 32 })} >
              {`Setting is the time`}
              <Image src={'/clock.svg'} width={30} height={30} alt="Clock Timeout Icon" m={2} />
              {`and place`}
              <Image src={'/home.svg'} width={30} height={30} alt="Home Icon" m={2} />
              {`of a story. It often answers the questions: when? and where?`}
            </Text>
          </Stack>
          <Stack my={12} mx={6}>
            <Text>{`The time of the story could be in the past, future, day, night, summer or winter.
A story may take place in a school, a mall, a desert, an airplane or in a variety
of other places.`}</Text>
          </Stack>
        </Stack>
        <Pagination
         page={2}
         prev="/"
         next="/2"
        />
      </Center>
    </Container>
  );
}

interface CardProps {
  src: string,
  alt: string,
  text: string
}

const Card = ({ src, alt, text }: CardProps) => {
  return <Stack justify={'center'} align={'center'} >
    <Stack
      padding={12}
      paddingX={18}
      background={'#FFF'}
      border={'2px dashed #CCCCCC'}
      justify={'center'}
      alignItems={'center'}
      width={'fit-content'}
    >
      <Image src={src} 
      width={useBreakpoint({ base: 100, md: 100, lg: 100, xl: 300 })} 
      height={useBreakpoint({ base: 100, md: 100, lg: 100, xl: 300 })} 
      alt={alt} />
    </Stack>
    <Text>{text}</Text>
  </Stack>
}