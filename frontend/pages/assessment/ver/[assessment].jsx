import { useState } from 'react'
import { getAssessment } from '../../../data/assessments'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ShowInfo from '../../../components/ShowInfo'

export const getServerSideProps = async (context) => {
        const response = await getAssessment(context.query.valoracion)
        if (response.status === 200) {
            return {
                props: {
                    data: response.data
                }
            }
        }
}
const editar = ({ data }) => {
    const [assessment] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Valoración:</Heading>
            <Stack my={10}>
                <ShowInfo value={assessment.comment} color={"blue.300"} tag={"Valoración"} />
                <HStack>
                    <ShowInfo value={assessment.point} color={"orange.300"} tag={"Puntaje"} />
                </HStack>
            </Stack>
            <HStack >
                <Button w={"full"} colorScheme="blue" mt={10} mb={10}>Editar</Button>
                <Button w={"full"} colorScheme="red" mt={10} mb={10}>Eliminar</Button>
                <Button w={"full"} colorScheme="green" mt={10} mb={10} onClick={() => router.push("/valoraciones")}>Volver</Button>
            </HStack>
        </Container>
    )
}

export default editar