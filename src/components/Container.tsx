'use client';

import { HStack, Stack, VStack , useBreakpointValue , Image as CImage } from "@chakra-ui/react";

import Image from "next/image";

interface ContainerProps {
    children: React.ReactNode;
}


export default function Container({ children }: ContainerProps) {




    return <Stack
        minW={'100vw'}
        minH={'100vh'}
        bgColor={'app.bgPink'}
    >
        <VStack position={'absolute'} top={'15%'} left={'-10%'} >
            <CImage
               src={'/container_images/spiral_right.svg'}
               width={300}
               height={300}
               alt="Spiral Background Image"
               left={-20}
            />
        </VStack>
    
        <HStack>
            <Image src={'./funfoxLogo.svg'}  alt="funfox logo" width={120} height={100} />
            <Image src={'/container_images/week_board.png'}  alt="funfox logo" width={100} height={100} />
        </HStack>
        <VStack position={'absolute'} height={'100%'} width={120} justifyContent={'space-evenly'} >
            <Image src={'/container_images/pencil_blue.svg'}  alt="Blue Pencil image" width={50} height={50} />
            <Image src={'/container_images/school_bag_blue.svg'}  alt="funfox logo" width={50} height={50} />
            <Image src={'/container_images/brown_book_open.svg'}  alt="funfox logo" width={50} height={50} />
        </VStack>
        <Stack >
            {children}
        </Stack>
        <VStack position={'absolute'} height={'100%'} right={0} width={120} justifyContent={'space-evenly'} >
            <Image src={'/container_images/blue_book_side.svg'}  alt="Blue Pencil image" width={50} height={50} />
            <Image src={'/container_images/green_book.svg'}  alt="funfox logo" width={50} height={50} />
            <Image src={'/container_images/hat.svg'}  alt="funfox logo" width={50} height={50} />
        </VStack>
        <VStack position={'absolute'} top={'15%'} right={'-10%'}>
            <CImage
               src={'/container_images/spiral_left.svg'}
               width={300}
               height={300}
               alt="Spiral Background Image"
               left={-20}
            />
        </VStack>
    </Stack>
}