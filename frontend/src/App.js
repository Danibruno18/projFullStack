import GridLivro from "./components/Livro/GridLivro.js";
import FormLivro from "./components/Livro/FormLivro.js";
import GridAutor from "./components/Autor/GridAutor.js";
import FormAutor from "./components/Autor/FormAutor.js";
import GridUser from "./components/Usuario/GridUser.js";
import FormUser from "./components/Usuario/FormUser.js";

import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const Tela = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`; 

const Title = styled.h2``;

function App() {
  const [livros, setLivros] = useState([]);
  const[autor, setAutor] = useState([]);
  const[user, setUser] = useState([]);
  
  const getUser = async () => {
    try{
      const res = await axios.get("http://localhost:8800/usuario");
      setUser (res.data.sort((a, b) => (a.nomeuser > b.nomeuser ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const getAutor = async () => {
    try{
      const res = await axios.get("http://localhost:8800/autor");
      setAutor (res.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getAutor();
  }, []);


  const getLivros = async () => {
    try{
      const res = await axios.get("http://localhost:8800/livros");
      setLivros (res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <>
      <Tela>
        {/* USUARIOS */}
        <Container>
          <Title>Usuários</Title>
          <FormUser/>
          <GridUser user={user}/>
        <ToastContainer autoClose={3000} position="BOTTOM_LEFT" />
        <GlobalStyle/> 
        </Container>

        {/* AUTORES */}
        <Container>
          <Title>Autores</Title>
          <FormAutor/>
          <GridAutor autor={autor}/>
        </Container>
        <ToastContainer autoClose={3000} position="BOTTOM_LEFT" />
        <GlobalStyle/>


        {/* LIVROS */}
          <Container>
            <Title>Livros</Title>
            <FormLivro/>
            <GridLivro livros={livros}/>
          </Container>
          <ToastContainer autoClose={3000} position="BOTTOM_LEFT" />
          <GlobalStyle/>
      </Tela>
    </>
  );
}

export default App;
