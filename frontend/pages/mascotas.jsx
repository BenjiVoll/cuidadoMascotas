import { useState as state, useEffect as effect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getPets } from '../data/pets'
import router from 'next/router'

const mascotas = () => {

    const [pets, setPets] = state([{
        id: '',
        user: '',
        name: '',
        race: '',
        diseases: '',
        sex: '',
        age: '',
        weight: '',
        colour: '',
        species: '',
    }])

    const contentTable = () => {
        return pets.map(pet => {
            return (
                <Tr key={pet._id}>
                    <Td>{pet.name}</Td>
                    <Td>{pet.race}</Td>
                    <Td>{pet.diseases}</Td>
                    <Td>{pet.sex}</Td>
                    <Td>{pet.age}</Td>
                    <Td>{pet.weight}</Td>
                    <Td>{pet.colour}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./pet/ver/${pet._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./pet/actualizar/${pet._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    effect(() => {
        getPets().then(res => {
            setPets(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de mascotas </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/pet/crear')}>Agregar mascota</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Raza</Td>
                                <Td>Enfermedad</Td>
                                <Td>Sexo</Td>
                                <Td>Edad</Td>
                                <Td>Peso</Td>
                                <Td>Color</Td>
                                <Td>Especie</Td>
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

export default mascotas