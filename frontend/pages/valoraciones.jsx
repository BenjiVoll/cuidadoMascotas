import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getAssessments } from '../data/assessments'
import { useRouter } from 'next/router'

const valoracion = () => {

    const [assessments, setAssessments] = useState([{
        id: '',
        controlservice: '',
        point: '',
        comment: '' 
    }])
    const router = useRouter()

    const contentTable = () => {
        return assessments.map(assessment => {
            return (
                <Tr key={assessment._id}>
                    <Td>{assessment.comment}</Td>
                    <Td>{assessment.point}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./assessment/ver/${assessment._id}`)}>Ver</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getAssessments().then(res => {
            setAssessments(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de valoraciones </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/assessment/crear')}>Agregar Valoracion</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Comentario</Td>
                                <Td>Puntaje</Td>
                                <Td>Acciones</Td>
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

export default valoracion