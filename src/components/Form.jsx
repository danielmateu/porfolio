import { useFormik } from 'formik'
import * as Yup from 'yup'

export const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Debes introducir el nombre'),
            email: Yup.string().email('El email no es válido').required('Debes introducir el email'),
            message: Yup.string().required('Debes introducir el mensaje')
        }),
        onSubmit: (values) => {
            console.log(values)
            enviarFormulario(values)
        }
    })
    
    return (
        <div className="flex flex-col gap-2 px-10 py-40 min-h-screen justify-center items-center" id='contact'>
            <h3 className='mb-4 px-20 text-4xl text-gray-800 dark:text-gray-400 font-semibold'>¿Quieres contactar?</h3>

            <form
                onSubmit={formik.handleSubmit}
                className='bg-white rounded hover:shadow-lg p-10 m-6 transition-all w-3/6' action="">
                <div className="mb-4 flex flex-col">
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        placeholder="Introduce tu nombre"
                        id='name'
                        className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.name && formik.errors.name ? (
                            <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                                <p>{formik.errors.name}</p>
                            </div>
                        ) : null
                    }
                </div>
                <div className="mb-4 flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        placeholder="Introduce tu email"
                        id='email'
                        className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && formik.errors.email ? (
                            <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                                <p>{formik.errors.email}</p>
                            </div>
                        ) : null
                    }
                </div>

                <div className="mb-4 flex flex-col">
                    <label htmlFor="faqs">Qué quieres saber?</label>
                    <input
                        type="text"
                        placeholder="Dime lo que estás buscando... 😉"
                        id='faqs'
                        className='p-4 bg-slate-100 rounded appearance-none focus:outline-none'
                        value={formik.values.faqs}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.faqs && formik.errors.faqs ? (
                            <div className="my-2 text-red-400 border-l-4 border-red-400 bg-red-200 text-center rounded hover:bg-red-400 hover:text-white transition-colors py-2">
                                <p>{formik.errors.faqs}</p>
                            </div>
                        ) : null
                    }
                </div>

                <input type="submit" value='Ponte en contacto!' className="w-full bg-sky-200 hover:bg-sky-300 transition-colors py-4 rounded my-2" />
                {/* {mensaje && <Alerta />} */}
            </form>
        </div>
    )
}