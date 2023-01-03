import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getControlServices } from '../data/controlServices'
import { useRouter } from 'next/router'

const controlServicio = () => {

    const [controlServices, setControlServices] = useState([{
        id: '',
        benefit: '',
        entrydate: '',
        entryhour: '',
        nameenter: '',
        exitdate: '',
        exithour: '',
        namewithdraw: '',
        state: '',
    }])
    const router = useRouter()

    const contentTable = () => {
        return controlServices.map(controlService => {
            return (
                <Tr key={controlService._id}>
                    <Td>{controlService.namepet}</Td>
                    <Td>{controlService.entrydate}</Td>
                    <Td>{controlService.entryhour}</Td>
                    <Td>{controlService.nameenter}</Td>
                    <Td>{controlService.exitdate}</Td>
                    <Td>{controlService.exithour}</Td>
                    <Td>{controlService.namewithdraw}</Td>
                    <Td>{controlService.state}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./controlService/ver/${controlService._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./controlService/actualizar/${controlService._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getControlServices().then(res => {
            setControlServices(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de control de servicio </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/controlService/crear')}>Agregar control de servicio</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Fecha de entrada</Td>
                                <Td>Hora de entrada</Td>
                                <Td>Nombre persona dejo mascota</Td>
                                <Td>Fecha de salida</Td>
                                <Td>Hora de salida</Td>
                                <Td>Nombre persona retiro mascota</Td>
                                <Td>Esatado control de servicio</Td>
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

export default controlServicio