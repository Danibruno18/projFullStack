import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display:flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    borderr-radius: 5px;
`;

const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    width: 120px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: #fff;
    height: 42px;
`;

const Form = ({onEdit}) => {
    const ref = useRef();
    
    return (
        <FormContainer>
            <InputArea>
                <Label>Nome do Livro:</Label>
                <input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Data de Lançamento</Label>
                <input name="dataLancamento" type="date"/>
            </InputArea>
            <InputArea>
                <Label>Autor</Label>
                <input name="autor" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;
