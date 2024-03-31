import { useBreakpoint } from "@/hook/useDimensions";
import { Stack, Text } from "@chakra-ui/react";

interface CloudProps {
    label : string;
}

export default function Cloud( { label } : CloudProps) {
     const widthAndHeight =  useBreakpoint({ base : 200 , md : 200 , lg : 200 , xl : 300});
    return <Stack
        bgImage={'url(/cloud.svg)'}
        backgroundSize={'contain'}
        backgroundRepeat={'no-repeat'}
        bgPosition={'center'}
        width={'auto'}
        height={'auto'}
        minW={widthAndHeight}
        minH={widthAndHeight}
        justify={'center'}
        align={'center'}
    >
        <Text textAlign={'center'} width={'80%'} wordBreak={'break-word'}>{label}</Text>
    </Stack>
}