'use client';

import { HStack, Stack, VStack , useBreakpointValue , Image as CImage } from "@chakra-ui/react";

import Image from "next/image";

import { useDimesions , useBreakpoint } from "@/hook/useDimensions";

interface ContainerProps {
    children: React.ReactNode;
}


export default function Container({ children }: ContainerProps) {


    const [ ,, isMobile , isTablet ] = useDimesions();

    const sideImagesWidth = useBreakpoint({ base : 80 , md : 50 , lg : 60 , xl : 100});


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
            <Image src={'./funfoxLogo.svg'}  alt="funfox logo" width={120} height={120} />
            <Image src={'/container_images/week_board.png'}  alt="Week Board" width={120} height={120} />
        </HStack>
        <VStack position={'absolute'} height={'100%'} left={isMobile ? '-10px' : '10px'} width={120} justifyContent={'space-evenly'} >
            <Image src={'/container_images/pencil_blue.svg'}  alt="Blue Pencil image" width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/school_bag_blue.svg'}  alt="funfox logo"   width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/brown_book_open.svg'}  alt="funfox logo"   width={sideImagesWidth} height={sideImagesWidth} />
        </VStack>
        <Stack >
            {children}
        </Stack>
        <VStack position={'absolute'} height={'100%'} right={0} width={120} justifyContent={'space-evenly'} >
            <Image src={'/container_images/blue_book_side.svg'}  alt="Blue Pencil image" width={sideImagesWidth} height={sideImagesWidth}   />
            <Image src={'/container_images/green_book.svg'}  alt="funfox logo" width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/hat.svg'}  alt="funfox logo" width={sideImagesWidth} height={sideImagesWidth} />
        </VStack>
        <VStack position={'absolute'} top={'15%'} right={isMobile ? '-30px'  : '-10%'}>
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