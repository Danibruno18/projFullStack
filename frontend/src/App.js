import GridLivro  from "./components/Livro/GridLivro.js";
import FormLivro from "./components/Livro/FormLivro.js";
import GridAutor  from "./components/Autor/GridAutor.js";
import FormAutor from "./components/Autor/FormAutor.js";
import GridUser  from "./components/Usuario/GridUser.js";
import FormUser from "./components/Usuario/FormUser.js";

import GlobalStyle from "./styles/global";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";




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
  // const [onEdit, setOnEdit] = useState(null);

  const[autor, setAutor] = useState([]);
  // const [onEdit, setOnEdit] = useState(null);

  const[user, setUser] = useState([]);
  // const [onEdit, setOnEdit] = useState(null);

  const getUser = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setUser (res.data.sort((a, b) => (a.nomeuser > b.nomeuser ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  const getAutor = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setAutor (res.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getAutor();
  }, [setAutor]);


  const getLivros = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setLivros (res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getLivros();
  }, [setLivros]);

  return (
    <>
    {/* USUARIOS */}
    <Container>
      <Title>Usuários</Title>
      <FormUser/>
      <GridUser/>
    <ToastContainer autoClose={3000} /*position={toast.position.bottom_left}*/ />
    <GlobalStyle/> 
    </Container>

    {/* AUTORES */}
    <Container>
      <Title>Autores</Title>
      <FormAutor/>
      <GridAutor autor={autor}/>
    </Container>
    <ToastContainer autoClose={3000} /*position={toast.position.bottom_left}*/ />
    <GlobalStyle/>


    {/* LIVROS */}
      <Container>
        <Title>Livros</Title>
        <FormLivro/>
        <GridLivro livros={livros}/>
      </Container>
      <ToastContainer autoClose={3000} /*position={toast.position.bottom_left}*/ />
      <GlobalStyle/>
    </>
  );
}

export default App;
