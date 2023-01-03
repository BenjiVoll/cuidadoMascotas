import { useState as state} from 'react'
import { Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import { createUser } from '../../data/users'
import InputForm from '../../components/InputForm'
import router from 'next/router'
import { Formik } from 'formik'
import userValidation from '../../validations/userValidation'

const usuarios = () => {

    const [user, setUser] = state({
        name: '',
        age: '',
        email: '',
        telepohonenumber: '',
        apartmentnumber: '',
        numberpets: '',
        role: '',
        pet: ''
    })
    


    return (
        <Container maxW="container.xl" mt={10}>
            <Heading as={"h1"} size={"2xl"} textAlign={"center"}>Crear Usuario</Heading>
            <Formik
                initialValues={user}
                validationSchema={userValidation}
                onSubmit={(values) => {
                    createUser(values).then(res => {
                        router.push("/usuarios")
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
                            <InputForm label="Nombre" handleChange={handleChange} name="name" placeholder="Nombre del usuario" type="text" value={values.name} handleBlur={handleBlur} />
                            {touched.name && errors.name && (
                                <Text color={"red"}>{errors.name}</Text>
                            )}
                            <HStack>
                                <InputForm label="Edad" handleChange={handleChange} name="age" placeholder="Edad del usuario" type="number" value={values.age} handleBlur={handleBlur} />
                                <InputForm label="Email" handleChange={handleChange} name="email" placeholder="Email del usuario" type="text" value={values.email} handleBlur={handleBlur} />
                                <InputForm label="Numero de telefono" handleChange={handleChange} name="telephonenumber" placeholder="Numero de telefono del usuario" type="number" value={values.telepohonenumber} handleBlur={handleBlur} />
                                <InputForm label="Numero de apartamento" handleChange={handleChange} name="apartmentnumber" placeholder="Numero de apartamento del usuario" type="number" value={values.apartmentnumber} handleBlur={handleBlur} />
                                <InputForm label="Numero de mascotas" handleChange={handleChange} name="numberpets" placeholder="Numero de mascotas del usuario" type="number" value={values.numberpets} handleBlur={handleBlur} />
                                <InputForm label="Role" handleChange={handleChange} name="role" placeholder="Rol  del usuario" type="text" value={values.role} handleBlur={handleBlur} />
                                <InputForm label="Mascota" handleChange={handleChange} name="pet" placeholder="Mascota del usuario" type="text" value={values.pet} handleBlur={handleBlur} />
                            </HStack>
                            <HStack justify={"space-between"}>
                                {touched.age && errors.age && (
                                    <Text color={"red"}>{errors.age}</Text>
                                )}
                                {touched.email && errors.email && (
                                    <Text color={"red"}>{errors.email}</Text>
                                )}
                                {touched.telepohonenumber && errors.telepohonenumber && (
                                    <Text color={"red"}>{errors.telepohonenumber}</Text>
                                )}
                                {touched.apartmentnumber && errors.apartmentnumber && (
                                    <Text color={"red"}>{errors.apartmentnumber}</Text>
                                )}
                                {touched.numberpets && errors.numberpets && (
                                    <Text color={"red"}>{errors.numberpets}</Text>
                                )}
                                {touched.role && errors.role && (
                                    <Text color={"red"}>{errors.role}</Text>
                                )}
                                {touched.pet && errors.pet && (
                                <Text color={"red"}>{errors.pet}</Text>
                                )}
                            </HStack>
                        </Stack>
                        <HStack>
                            <Button colorScheme="blue" mt={10} mb={10} type={"submit"} >Crear</Button>
                            <Button colorScheme="red" mt={10} mb={10} onClick={() => router.push('/')}>Cancelar</Button>
                        </HStack>
                    </form>
                )}
            </Formik>
        </Container >
    )
}

export default usuarios

