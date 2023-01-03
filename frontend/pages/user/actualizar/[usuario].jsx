import { useState as state} from 'react'
import { getUser, updateUser } from '../../../data/users'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import router from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getUser(context.query.usuario)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [user, setUser] = state(data)
    const { usuario } = router.query

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }

    const submitUser = async (e) => {
        e.preventDefault()
        const response = await updateUser(usuario, user)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Usuario actualizada',
                showConfirmButton: true,
                text: 'El usuario se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar al usuario'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar usuario: {user.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del usuario" type="text" value={user.name} />
                <HStack>
                    <InputForm label="Edad" handleChange={handleChange} name="age" placeholder="Edad del usuario" type="number" value={user.age} />
                    <InputForm label="Email" handleChange={handleChange} name="email" placeholder="Email del usuario" type="text" value={user.email} />
                    <InputForm label="Numero de telefono" handleChange={handleChange} name="telephonenumber" placeholder="Numero de telefono del usuario" type="number" value={user.telephonenumber} />
                    <InputForm label="Numero de apartamento" handleChange={handleChange} name="apartmentnumber" placeholder="Numero de apartamento del usuario" type="number" value={user.apartmentnumber} />
                    <InputForm label="Numero de mascotas" handleChange={handleChange} name="numberpets" placeholder="Numero  de  mascotas del usuario" type="number" value={user.numberpets} />
                    <InputForm label="Role" handleChange={handleChange} name="role" placeholder="Rol del usuario" type="text" value={user.rol} />
                </HStack>
                <TextareaInput label="Mascota" handleChange={handleChange} name="pet" placeholder="Mascota del usuario" value={user.pet} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitUser}>Editar usuario</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/usuarios')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar