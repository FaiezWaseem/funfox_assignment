'use client';
import { Stack, Center, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useDimesions , useBreakpoint } from "@/hook/useDimensions";

interface PaginationProps {
    page : number,
    prev : string,
    next : string
}

export default function Pagination({ prev , page , next  } : PaginationProps) {

    const iconSize = useBreakpoint({ base : 40 , md : 40 , lg : 60 , xl : 70});

    return <HStack width={'85%'} height={'20%'} mt={5} justify={'space-between'} >
        <Image src={'/speak.svg'} width={iconSize} height={40} alt="speak" />
        <HStack>
            <Link href={prev}>
                <Image src={'/left_arrow.svg'} width={iconSize} height={40} alt="Left Arrow" />
            </Link>
            <Stack bg={'#CD3F97'} width={100} border={`2px solid #fff`} textAlign={'center'} rounded={5} >
                <Text fontSize={20} color={'#fff'} >
                    {page}
                </Text>
            </Stack>
            <Link href={next}>
                <Image src={'/right_arrow.svg'} width={iconSize} height={40} alt="right Arrow " />
            </Link>
        </HStack>
        <Image src={'/info.svg'} width={iconSize} height={40} alt="information" />
    </HStack>
}