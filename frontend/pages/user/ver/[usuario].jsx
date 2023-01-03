import { useState } from 'react'
import { getUser } from '../../../data/users'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import ShowInfo from '../../../components/ShowInfo'

export const getServerSideProps = async (context) => {
    try {
        const response = await getUser(context.query.usuario, localStorage.getItem('token'))
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
    const [user] = useState(data)
    const router = useRouter()

    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Usuario: {user.name}</Heading>
            <Stack my={10}>
                <ShowInfo value={user.name} color={"green.300"} tag={"Nombre"} />
                <ShowInfo value={user.age} color={"blue.300"} tag={"Edad"} />
                <HStack>
                    <ShowInfo value={user.email} color={"orange.300"} tag={"Email"} />
                    <ShowInfo value={user.telephonenumber} color={"red.300"} tag={"Numero de Telefono"} />
                    <ShowInfo value={user.apartmentnumber} color={"red.300"} tag={"Numero de aparatamento"} />
                    <ShowInfo value={user.numberpets} color={"red.300"} tag={"Numero de mascotas"} />
                    <ShowInfo value={user.role} color={"red.300"} tag={"Rol"} />
                    <ShowInfo value={user.pet} color={"red.300"} tag={"Mascota"} />
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