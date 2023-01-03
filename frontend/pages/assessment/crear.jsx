import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createAssessment } from '../../data/assessments'
import InputForm from '../../components/InputForm'
import TextareaInput from '../../components/TextareaInput'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import assessmentValidation from '../../validations/assessmentValidation'

const valoracion = () => {

    const [assessment, setAssessment] = useState({
        controlservice: '',
        point: '',
        comment: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Valoración</Heading>
            <Formik
                initialValues={assessment}
                validationSchema={assessmentValidation}
                onSubmit={(values) => {
                    createAssessment(values).then(res => {
                        router.push("/valoraciones")
                    })
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Stack spacing={4} mt={10}>
                            <HStack>
                                <InputForm label="Puntos" handleChange={handleChange} name="point" placeholder="Puntaje del servicio" type="number" value={values.price} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.point && errors.point && (
                                    <Text color={"red"}>{errors.point}</Text>
                                )}
                            </HStack>
                            <InputForm label="Comentario" handleChange={handleChange} name="comment" placeholder="Comentario del servicio" value={values.comment} handleBlur={handleBlur} />
                            {touched.comment && errors.comment && (
                                <Text color={"red"}>{errors.comment}</Text>
                            )}
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/valoraciones')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default valoracion


{/* <Stack spacing={4} mt={10}>
                <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del producto" type="text" value={product.name} />
                <HStack>
                    <InputForm label="Precio" handleChange={handleChange} name="price" placeholder="Precio del producto" type="number" value={product.price} />
                    <InputForm label="Cantidad" handleChange={handleChange} name="quantity" placeholder="Cantidad del producto" type="number" value={product.quantity} />
                </HStack>
                <TextareaInput label="Descripción" handleChange={handleChange} name="description" placeholder="Descripción del producto" value={product.description} />
            </Stack>
            <HStack>
                <Button colorScheme="blue" mt={10} mb={10} onClick={submitProduct}>Crear</Button>
                <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
            </HStack> */}