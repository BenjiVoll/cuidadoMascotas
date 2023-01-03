import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createPet } from '../../data/pets'
import InputForm from '../../components/InputForm'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import petValidation from '../../validations/petValidation'

const mascotas = () => {

    const [pet, setPet] = useState({
        name: '',
        race: '',
        diseases: '',
        sex: '',
        age: '',
        weight: '',
        colour: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Mascota</Heading>
            <Formik
                initialValues={pet}
                validationSchema={petValidation}
                onSubmit={(values) => {
                    createPet(values).then(res => {
                        router.push("/mascotas")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la mascota" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                            <HStack>
                                <InputForm label="Raza" handleChange={handleChange} name="race" placeholder="Raza de la mascota" type="text" value={values.race} handleBlur={handleBlur} />
                                <InputForm label="Enfermedades" handleChange={handleChange} name="diseases" placeholder="Enfermedades de la mascota" type="text" value={values.diseases} handleBlur={handleBlur} />
                                <InputForm label="Sexo" handleChange={handleChange} name="sex" placeholder="Sexo de la mascota" type="text" value={values.sex} handleBlur={handleBlur} />
                                <InputForm label="Edad" handleChange={handleChange} name="age" placeholder="Edad de la mascota" type="number" value={values.age} handleBlur={handleBlur} />
                                <InputForm label="Peso" handleChange={handleChange} name="weight" placeholder="Peso de la mascota" type="number" value={values.weight} handleBlur={handleBlur} />
                                <InputForm label="Color" handleChange={handleChange} name="colour" placeholder="Color de la mascota" type="text" value={values.colour} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.race && errors.race && (
                                    <Text color={"red"}>{errors.race}</Text>
                                )}
                                {touched.diseases && errors.diseases && (
                                    <Text color={"red"}>{errors.diseases}</Text>
                                )}
                                {touched.sex && errors.sex && (
                                    <Text color={"red"}>{errors.sex}</Text>
                                )}
                                {touched.age && errors.age && (
                                    <Text color={"red"}>{errors.age}</Text>
                                )}
                                {touched.weight && errors.weight && (
                                    <Text color={"red"}>{errors.weight}</Text>
                                )}
                                {touched.colour && errors.colour && (
                                    <Text color={"red"}>{errors.colour}</Text>
                                )}
                            </HStack>
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/mascotas')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default mascotas

