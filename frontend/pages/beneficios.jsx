import { useState as state, useEffect as effect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getBenefits } from '../data/benefits'
import router from 'next/router'

const beneficios = () => {

    const [benefits, setBenefits] = state([{
        id: '',
        name: '',
    }])

    const contentTable = () => {
        return benefits.map(benefit => {
            return (
                <Tr key={benefit._id}>
                    <Td>{benefit.name}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./benefit/actualizar/${benefit._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    effect(() => {
        getBenefits().then(res => {
            setBenefits(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de beneficios </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/benefit/crear')}>Agregar beneficios</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {contentTable()}
                        </Tbody>
                    </Table>
                </Stack>
            </Container>
        </>

    )
}

export default beneficios