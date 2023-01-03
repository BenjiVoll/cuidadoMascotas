import { useState as state} from 'react'
import { getControlServices } from '../../../data/controlServices'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import router from 'next/router'
import ShowInfo from '../../../components/ShowInfo'

export const getServerSideProps = async (context) => {
    try {
        const response = await getControlServices(context.query.controlServicio, localStorage.getItem('token'))
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
                }
            }
        } else {
            return {
                redirect: {
                    destination: "/",
                }
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: "/",
            }
        }
    }

}

const editar = ({ data }) => {
    const [controlService] = state(data)

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Control servicio: {controlService.name}</Heading>
            <Stack my={10}>
                <ShowInfo value={controlService.name} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={controlService.benefit} color={"blue.300"} tag={"Beneficio"} />
                <HStack>
                    <ShowInfo value={controlService.entrydate} color={"orange.300"} tag={"Fecha de entrada"} />
                    <ShowInfo value={controlService.entryhour} color={"red.300"} tag={"Hora de entrada"} />
                    <ShowInfo value={controlService.nameenter} color={"red.300"} tag={"Nombre persona dejo mascota"} />
                    <ShowInfo value={controlService.exitdate} color={"red.300"} tag={"Fecha de salida"} />
                    <ShowInfo value={controlService.exithour} color={"red.300"} tag={"Hora de salida"} />
                    <ShowInfo value={controlService.namewithdraw} color={"red.300"} tag={"Nombre persona retiro mascota"} />
                    <ShowInfo value={controlService.state} color={"red.300"} tag={"Estado"} />
                </HStack>
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar