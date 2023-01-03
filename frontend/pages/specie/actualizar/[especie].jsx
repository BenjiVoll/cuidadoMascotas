import { useState as state} from 'react'
import { getSpecie, updateSpecie } from '../../../data/species'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import router from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getSpecie(context.query.especie)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [specie, setSpecie] = state(data)
    const { especie } = router.query

    const handleChange = (e) => {
        setSpecie({
            ...specie,
            [e.target.name]: e.target.value
        })

    }

    const submitSpecie = async (e) => {
        e.preventDefault()
        const response = await updateSpecie(especie, specie)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Especie actualizada',
                showConfirmButton: true,
                text: 'La especie se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar la especie'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar especie: {specie.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la especie" type="text" value={specie.name} />
                <HStack>
                </HStack>
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitSpecie}>Editar especie</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/especies')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar