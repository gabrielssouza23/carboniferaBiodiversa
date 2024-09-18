import React from 'react';
import MainContainer from '../../components/core/mainContainer';
import Footer from '../../components/footer';
import axios from 'axios';

export default function Login() {

    const loginUrl = "http://localhost:3333/admins/admins-login";

    const [post, setPost] = React.useState(null);

    function login(email, password) {
        axios
            .post(loginUrl, {               
                    email: email,
                    senha: password           
            })
            .then((response) => {
                setPost(response.data);
                console.log(post)
            });
    }

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    // Função para atualizar o estado conforme o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Função para capturar o submit do formulário
    const handleSubmit = (e) => {
        e.preventDefault(); // Evita o reload da página

        // Aqui você pode acessar os valores do formulário através de formData
        console.log('Form Data:', formData);
        // Faça algo com os dados, como enviar para a API

        login(formData.email, formData.password);
    };

    return (
        <MainContainer currentPage='login'>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-16 w-auto" src="/logo.svg" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green">
                        Logue para prosseguir
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email} // Valor controlado
                                    onChange={handleChange} // Captura mudanças
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={formData.password} // Valor controlado
                                    onChange={handleChange} // Captura mudanças
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-custom-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Logar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </MainContainer>
    );
}
