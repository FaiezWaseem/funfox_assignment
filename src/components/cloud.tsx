import { Stack, Text } from "@chakra-ui/react";

interface CloudProps {
    label : string;
}

export default function Cloud( { label } : CloudProps) {
    return <Stack
        bgImage={'url(/cloud.svg)'}
        backgroundSize={'contain'}
        backgroundRepeat={'no-repeat'}
        bgPosition={'center'}
        width={'auto'}
        height={'auto'}
        minW={200}
        minH={100}
        justify={'center'}
        align={'center'}
    >
        <Text>{label}</Text>
    </Stack>
}