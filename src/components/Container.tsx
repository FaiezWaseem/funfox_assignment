'use client';

import { Stack } from "@chakra-ui/react";

interface ContainerProps {
    children: React.ReactNode;
}


export default function Container({ children }: ContainerProps) {
    return <Stack
        minW={'100vw'}
        minH={'100vh'}
        bgColor={'app.bgPink'}
    >
        <Stack>
            {children}
        </Stack>

    </Stack>
}