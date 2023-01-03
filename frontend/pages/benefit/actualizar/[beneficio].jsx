import { useState as state} from 'react'
import { getBenefit, updateBenefit } from '../../../data/benefits'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import router from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getBenefit(context.query.beneficio)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [benefit, setBenefit] = state(data)
    const { beneficio } = router.query

    const handleChange = (e) => {
        setBenefit({
            ...benefit,
            [e.target.name]: e.target.value
        })

    }

    const submitBenefit = async (e) => {
        e.preventDefault()
        const response = await updateBenefit(beneficio, benefit)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Beneficio actualizado',
                showConfirmButton: true,
                text: 'El beneficio se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar el beneficio'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar beneficio: {benefit.name}</Heading>
            <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del beneficio" type="text" value={benefit.name} />
                <HStack>
                </HStack>
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitBenefit}>Editar beneficio</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/beneficios')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar