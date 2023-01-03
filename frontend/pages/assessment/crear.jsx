import { Button, Container, Stack, Heading } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import router from 'next/router'
import { createAssessment } from '../../data/assessments'
import { Formik } from 'formik'
import FormInput from '../../components/FormInput'
import assessmentValidation from '../../validations/assessmentValidation'
import FormikError from '../../components/FormikError'

const valoracion = () => {
	
	return (
		<Container maxW="container.md">
			<Heading textAlign={"center"} my={10}>Crear Valoraciones</Heading>
			<Formik
				initialValues={{
					point: '',
					comment: ''
				}}
				validationSchema={assessmentValidation}
				onSubmit={async (values) => {
					try {
						const response = await createAssessment(values)
						if (response.status === 201) {
							Swal.fire({
								icon: 'success',
								title: 'Valoracion creada',
								text: 'La valoracion se creo correctamente!',
							}).then(() => {
								router.push('/valoraciones')
							})
						}
					} catch (error) {
						Swal.fire({
							icon: 'error',
							title: 'Oops...',
							text: 'Algo salió mal!',
						})
					}
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
						<Stack>
							<FormInput onChange={handleChange} placeholder="Puntaje del servicio" label="Puntaje" type={"number"} name={"point"} onBlur={handleBlur} value={values.point} />
							{touched.point && errors.point && <FormikError error={errors.point} />}
							<FormInput onChange={handleChange} placeholder="Comentario del servicio" label="Comentario" type={"text"} name={"comment"} onBlur={handleBlur} value={values.comment} />
							{touched.comment && errors.comment && <FormikError error={errors.comment} />}
						</Stack>
						<Button colorScheme="teal" size="md" type="submit" my={5} onClick={handleSubmit}> Crear Producto </Button>
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