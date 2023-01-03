import { useState } from 'react'
import { getControlService, updateControlService } from '../../../data/controlServices'
import { Button, Container, Heading, HStack, Stack } from '@chakra-ui/react'
import InputForm from '../../../components/InputForm'
import TextareaInput from '../../../components/TextareaInput'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export const getServerSideProps = async (context) => {
    const response = await getControlService(context.query.controlServicio)
    return {
        props: {
            data: response.data
        }
    }
}

const editar = ({ data }) => {
    const [controlService, setControlService] = useState(data)
    const router = useRouter()
    const { controlServicio } = router.query

    const handleChange = (e) => {
        setControlService({
            ...controlService,
            [e.target.name]: e.target.value
        })

    }

    const submitControlService = async (e) => {
        e.preventDefault()
        const response = await updateControlService(controlServicio, controlService)
        if (response.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Control de servicio actualizado',
                showConfirmButton: true,
                text: 'Control de servicio se actualizó correctamente'
            }).then(() => {
                router.push('/')
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                showConfirmButton: true,
                text: 'Ocurrió un error al actualizar el control de servicio'
            })
        }
    }
    return (
        <Container maxW="container.xl" mt={10}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Editar control de servicio: {controlService.name}</Heading>
        <Stack spacing={4} mt={10}>
            <HStack>
                <InputForm label="Fecha de entrada" handleChange={handleChange} name="entrydate" placeholder="Fecha de entrada de la mascota" type="text" value={controlService.entrydate} />
                <InputForm label="Hora de entrada" handleChange={handleChange} name="entryhour" placeholder="Hora entrada de la mascota" type="number" value={controlService.entryhour} />
                <InputForm label="Nombre de persona deja" handleChange={handleChange} name="nameenter" placeholder="Nombre persona dejo a la mascota" type="text" value={controlService.nameenter} />
                <InputForm label="Fecha de retiro" handleChange={handleChange} name="exitdate" placeholder="Fecha retiro de la mascota" type="text" value={controlService.exitdate} />
                <InputForm label="Hora de retiro" handleChange={handleChange} name="exithour" placeholder="Hora retiro de la mascota" type="number" value={controlService.exithour} />
                <InputForm label="Nombre persona retira" handleChange={handleChange} name="namewithdraw" placeholder="Nombre persona retiro mascota" type="text" value={controlService.namewithdraw} />
                <InputForm label="Estado control de servicio" handleChange={handleChange} name="state" placeholder="Estado del control de servicio" type="text" value={controlService.state} />
                </HStack>
            </Stack>
            <HStack>
            <Button colorScheme="blue" mt={10} mb={10} onClick={submitControlService}>Editar control de servicio</Button>
            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/controlServicio')}>Cancelar</Button>
            </HStack>
        </Container>
    )
}

export default editar