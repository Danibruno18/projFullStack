import React from "react";
import axios from "axios";
import styled from "styled-components";
import {FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";


const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 800px;
    margin: 20px auto;
    word-break: break-all.
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: isset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display:none" }
    };
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: auto;

    @media (max-width: 500px) {
        ${(props) => props.onlyweb && "display:none"}
    };
`;

const Grid = ({ livros }) =>{
    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Titulo</Th>
                    <Th>Autor</Th>
                    <Th>Data</Th>
                </Tr>
            </Thead>
            <Tbody>
                {livros.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.titulo}</Td>
                        <Td width="30%">{item.autor}</Td>
                        <Td width="30%">{item.dataLancamento}</Td>
                        <Td alignCenter width="5%"> <FaEdit /> </Td>
                        <Td alignCenter width="5%"> {/*<FaTrash onClick={() => handleDelete(item.id)} />*/} </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );

};

export default Grid;