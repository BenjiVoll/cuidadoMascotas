import { useState as state } from 'react'
import { getPet } from '../../../data/pets'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import router from 'next/router'
import ShowInfo from '../../../components/ShowInfo'

export const getServerSideProps = async (context) => {
        const response = await getPet(context.query.mascota)
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
                }
            }
        }
}
const editar = ({ data }) => {
    const [pet] = state(data)

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Mascota: {pet.name}</Heading>
            <Stack my={10}>
                <ShowInfo value={pet.name} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={pet.race} color={"blue.300"} tag={"Raza"} />
                <HStack>
                    <ShowInfo value={pet.deseases} color={"orange.300"} tag={"Enfermedades"} />
                    <ShowInfo value={pet.sex} color={"red.300"} tag={"Sexo"} />
                    <ShowInfo value={pet.age} color={"red.300"} tag={"Edad"} />
                    <ShowInfo value={pet.weight} color={"red.300"} tag={"Peso"} />
                    <ShowInfo value={pet.colour} color={"red.300"} tag={"Color"} />
                </HStack>
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/mascotas")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar