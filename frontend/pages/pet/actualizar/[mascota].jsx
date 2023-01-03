import { useState as state } from 'react'
import { getPet, updatePet } from '../../../data/pets'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import router from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getPet(context.query.mascota)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [pet, setPet] = state(data)
    const { mascota } = router.query

    const handleChange = (e) => {
        setPet({
            ...pet,
            [e.target.name]: e.target.value
        })

    }

    const submitPet = async (e) => {
        e.preventDefault()
        const response = await updatePet(mascota, pet)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Mascota actualizada',
                showConfirmButton: true,
                text: 'La mascota se actualizó correctamente'
            }).then(() => {
                router.push('/mascotas')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la mascota'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar mascota: {pet.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la mascota" type="text" value={pet.name} />
                <HStack>
                    <InputForm label="Raza" handleChange={handleChange} name="race" placeholder="Raza de la mascota" type="text" value={pet.race} />
                    <InputForm label="Enfermedades" handleChange={handleChange} name="diseases" placeholder="Enfermedades de la mascota" type="text" value={pet.diseases} />
                    <InputForm label="Sexo" handleChange={handleChange} name="sex" placeholder="Sexo de la mascota" type="text" value={pet.sex} />
                    <InputForm label="Edad" handleChange={handleChange} name="age" placeholder="Edad de la mascota" type="number" value={pet.age} />
                    <InputForm label="Peso" handleChange={handleChange} name="weight" placeholder="Peso de la mascota" type="number" value={pet.weight} />
                    <InputForm label="Color" handleChange={handleChange} name="colour" placeholder="Color de la mascota" type="text" value={pet.colour} />
                </HStack>
                <TextareaInput label="Especie" handleChange={handleChange} name="description" placeholder="Especie de la mascota" value={pet.species} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitPet}>Editar mascota</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/mascotas')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar