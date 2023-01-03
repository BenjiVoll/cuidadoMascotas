import { useState } from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createSpecie } from '../../data/species'
import InputForm from '../../components/InputForm'
import { useRouter } from 'next/router'
import { Formik } from 'formik'
import specieValidation from '../../validations/specieValidation'

const especies = () => {

    const [specie, setSpecie] = useState({
        name: ''
    })
    const router = useRouter()


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Especie</Heading>
            <Formik
                initialValues={specie}
                validationSchema={specieValidation}
                onSubmit={(values) => {
                    createSpecie(values).then(res => {
                        router.push("/especies")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre de la especie" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                            <HStack>
                            </HStack>
                            <HStack justify={"space-between"}>
                            </HStack>
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('http://localhost:3000/especies')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default especies

