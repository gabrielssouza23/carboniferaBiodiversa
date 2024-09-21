import React from 'react'
import MainContainer from '../../components/core/mainContainer'
import Footer from '../../components/footer'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {

  const navigate = useNavigate();

  if(sessionStorage.getItem('authToken') === null) {
    navigate('/');
  }
  return (
    <MainContainer currentPage='dashboard'>
        <form action="" method="post">
            <div className="flex flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img className="mx-auto h-16 w-auto" src="/logo.svg" alt="Your Company" />
                    <h2 className="mt-10 text-center text-2xl font-semibold font-poppins uppercase leading-9 tracking-tight text-custom-green">
                        Dashboard
                    </h2>
                </div>
            </div>
        </form>
        <Footer />
    </MainContainer>
 )
}
