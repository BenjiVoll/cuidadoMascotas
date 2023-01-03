import { useState as state, useEffect as effect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getSpecies } from '../data/species'
import router from 'next/router'

const especies = () => {

    const [species, setSpecies] = state([{
        id: '',
        name: '',
    }])

    const contentTable = () => {
        return species.map(specie => {
            return (
                <Tr key={specie._id}>
                    <Td>{specie.name}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./specie/actualizar/${specie._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    effect(() => {
        getSpecies().then(res => {
            setSpecies(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de especies </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/specie/crear')}>Agregar especie</Button>
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

export default especies