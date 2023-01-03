import { useState as state } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createControlService } from '../../data/controlServices'
import InputForm from '../../components/InputForm'
import router from 'next/router'
import { Formik } from 'formik'
import controlServiceValidation from '../../validations/controlServiceValidation'

const controlServicios = () => {

    const [controlService, setControlService] = state({
        benefit: '',
        entrydate: '',
        entryhour: '',
        nameenter: '',
        exitdate: '',
        exithour: '',
        namewithdraw: '',
        state: ''
    })


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear ControlServicio</Heading>
            <Formik
                initialValues={controlService}
                validationSchema={controlServiceValidation}
                onSubmit={(values) => {
                    createControlService(values).then(res => {
                        router.push("/controlServicios")
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
                            <InputForm label="Benefit" handleChange={handleChange} name="benefit" placeholder="Beneficio de la mascota" type="text" value={values.benefit} handleBlur={handleBlur} />
                            {touched.benefit && errors.benefit && (
                                <Text color={"red"}>{errors.benefit}</Text>
                            )}
                            <HStack>
                                <InputForm label="Fecha de entrada" handleChange={handleChange} name="entrydate" placeholder="Fecha entrada de la mascota" type="text" value={values.entrydate} handleBlur={handleBlur} />
                                <InputForm label="Hora de entrada" handleChange={handleChange} name="entryhour" placeholder="Hora entrada de la mascota" type="text" value={values.entryhour} handleBlur={handleBlur} />
                                <InputForm label="Nombre persona dejo mascota" handleChange={handleChange} name="nameenter" placeholder="Nombre persona dejo  la mascota" type="text" value={values.nameenter} handleBlur={handleBlur} />
                                <InputForm label="Fecha de salida" handleChange={handleChange} name="exitdate" placeholder="Fecha de salida de la mascota" type="number" value={values.exitdate} handleBlur={handleBlur} />
                                <InputForm label="Hora de salida" handleChange={handleChange} name="exithour" placeholder="Hora de salida de la mascota" type="number" value={values.entryhour} handleBlur={handleBlur} />
                                <InputForm label="Nombre persona retiro mascota" handleChange={handleChange} name="namewithdraw" placeholder="Nombre persona retiro la mascota" type="text" value={values.namewithdraw} handleBlur={handleBlur} />
                                <InputForm label="Estado control de servicio" handleChange={handleChange} name="state" placeholder="Control de servicio" type="text" value={values.state} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.benefit && errors.benefit && (
                                    <Text color={"red"}>{errors.benefit}</Text>
                                )}
                                {touched.entrydate && errors.entrydate && (
                                    <Text color={"red"}>{errors.entrydate}</Text>
                                )}
                                {touched.entryhour && errors.entryhour && (
                                    <Text color={"red"}>{errors.entryhour}</Text>
                                )}
                                {touched.nameenter && errors.nameenter && (
                                    <Text color={"red"}>{errors.nameenter}</Text>
                                )}
                                {touched.exitdate && errors.exitdate && (
                                    <Text color={"red"}>{errors.exitdate}</Text>
                                )}
                                {touched.exithour && errors.entryhour && (
                                    <Text color={"red"}>{errors.exithour}</Text>
                                )}
                                {touched.namewithdraw && errors.namewithdraw && (
                                    <Text color={"red"}>{errors.namewithdraw}</Text>
                                )}
                                {touched.state && errors.state && (
                                    <Text color={"red"}>{errors.state}</Text>
                                )}
                            </HStack>
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/controlServicio')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default controlServicios

