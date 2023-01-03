import { useState, useEffect } from 'react'
import { Button, Container, Heading, HStack, Input, Stack, Table, Thead, Tr, Td, Th, Tbody } from '@chakra-ui/react'
import { getUsers } from '../data/users'
import { useRouter } from 'next/router'

const usuarios = () => {

    const [users, setUsers] = useState([{
        id: '',
        name: '',
        age: '',
        email: '',
        telephonenumber: '',
        apartmentnumber: '',
        numberpets: '',
        role: '',
        pet: '',
    }])
    const router = useRouter()

    const contentTable = () => {
        return users.map(user => {
            return (
                <Tr key={user._id}>
                    <Td>{user.name}</Td>
                    <Td>{user.age}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.telephonenumber}</Td>
                    <Td>{user.apartmentnumber}</Td>
                    <Td>{user.numberpets}</Td>
                    <Td>{user.role}</Td>
                    <Td>{user.pet}</Td>
                    <Td>
                        <HStack>
                            <Button colorScheme={"orange"} onClick={() => router.push(`./user/ver/${user._id}`)}>Ver</Button>
                            <Button colorScheme={"teal"} onClick={() => router.push(`./user/actualizar/${user._id}`)}>Editar</Button>
                        </HStack>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        getUsers().then(res => {
            setUsers(res.data)
        })
    }, [])


    return (
        <>
            <Container maxW="container.xl">
                <Heading as="h1" size="2xl" textAlign="center" mt="10"> Listado de usuarios </Heading>
                <Button colorScheme="blue" mt="10" mb="10" onClick={() => router.push('/user/crear')}>Agregar mascota</Button>
                <Stack spacing={4} mt="10">
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Td>Nombre</Td>
                                <Td>Age</Td>
                                <Td>Email</Td>
                                <Td>Telephonenumber</Td>
                                <Td>Apartmentnumber</Td>
                                <Td>Numberpets</Td>
                                <Td>Role</Td>
                                <Td>Pet</Td>
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

export default usuarios