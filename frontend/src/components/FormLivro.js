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

const Form = ({ onEdit }) => {
    const ref = useRef();
    
    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Título:</Label>
                <Input name="titulo" />
            </InputArea>
            <InputArea>
                <Label>Autor</Label>
                <Input name="autor" />
            </InputArea>
            <InputArea>
                <Label>Ano</Label>
                <Input name="dataLancamento" type="date"/>
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;
