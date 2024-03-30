'use client';

import { HStack, Stack, VStack, Text, Input, ModalContent, useDisclosure, ModalHeader, ModalFooter, ModalCloseButton, Button, Image as CImage } from "@chakra-ui/react";

import Image from "next/image";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { useDimesions, useBreakpoint } from "@/hook/useDimensions";

interface ContainerProps {
    children: React.ReactNode;
    showHelpBook: boolean
}


export default function Container({ children, showHelpBook }: ContainerProps) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [, , isMobile, isTablet] = useDimesions();

    const sideImagesWidth = useBreakpoint({ base: 80, md: 50, lg: 60, xl: 100 });


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
            <Image src={'./funfoxLogo.svg'} alt="funfox logo" width={120} height={120} />
            <Image src={'/container_images/week_board.svg'} alt="Week Board" width={120} height={120} />
        </HStack>
        <VStack position={'absolute'} height={'100%'} left={isMobile ? '-10px' : '10px'} width={120} justifyContent={'space-evenly'} >
            <Image src={'/container_images/pencil_blue.svg'} alt="Blue Pencil image" width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/school_bag_blue.svg'} alt="funfox logo" width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/brown_book_open.svg'} alt="funfox logo" width={sideImagesWidth} height={sideImagesWidth} />
        </VStack>
        <Stack >
            {children}
        </Stack>
        <VStack position={'absolute'} height={'100%'} right={0} width={120} justifyContent={'space-evenly'} >
            <Image src={'/container_images/blue_book_side.svg'} alt="Blue Pencil image" width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/green_book.svg'} alt="Green Book logo" width={sideImagesWidth} height={sideImagesWidth} />
            <Image src={'/container_images/hat.svg'} alt="Hat logo" width={sideImagesWidth} height={sideImagesWidth} />
        </VStack>
        {showHelpBook && <VStack position={'absolute'} height={'100%'} right={0}
            justifyContent={'space-evenly'} zIndex={3}

        >
            <CImage src={'/help_book.svg'} alt="Book logo" width={sideImagesWidth} height={sideImagesWidth}
                _hover={{
                    cursor: 'pointer',
                    transform: 'scale(1.2)',
                    transition: 'transform 0.2s ease-in-out',
                }}
                onClick={onOpen}
            />
        </VStack>}

        <VStack position={'absolute'} top={'15%'} right={isMobile ? '-30px' : '-10%'}>
            <CImage
                src={'/container_images/spiral_left.svg'}
                width={300}
                height={300}
                alt="Spiral Background Image"
                left={-20}
            />
        </VStack>
        <Modal open={isOpen} onClose={onClose} center
           classNames={{
            overlay: 'customOverlay',
            modal: 'customModal',
          }}
          closeIcon={<Image src={'/close.svg'} width={30} height={30} alt="close" />}
        >
            <Stack width={'50vw'} height={'80vh'} justify={'space-evenly'} align={'center'} bg={'transparent'} >
                <Text fontSize={useBreakpoint({ base : 15 , md : 16  , lg : 22 , xl : 28})}  >Guide Sheet</Text>
                <Stack p={8} width={'100%'}  >
                    <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 18, xl: 44 })}  >So, what do you think the definition of setting is?</Text>
                    <HStack w={'100%'} justify={'space-between'} flexWrap={'wrap'} >
                        <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 18, xl: 36 })} >Any guesses?</Text>
                        <Stack width={'60%'} border={`3px dashed #B6B6B6`} textAlign={'center'} rounded={5} >
                            <Input variant='flushed' width={'100%'} _focus={{
                                border: 'none',
                                outline: 'none',
                                boxShadow: 'none',
                            }} 
                            value={'> Setting is the time and place of a story.'}
                            color={'#000'}
                            />
                        </Stack>
                        <HStack>
                            <Text fontSize={useBreakpoint({ base: 16, md: 17, lg: 18, xl: 36 })} >Hint:</Text>
                            <Image src={'/clock.svg'} width={30} height={30} alt="Clock Timeout Icon" />
                            <Image src={'/home.svg'} width={30} height={30} alt="Home Icon" />
                        </HStack>
                    </HStack>
                </Stack>
            </Stack>
        </Modal>

    </Stack>
}