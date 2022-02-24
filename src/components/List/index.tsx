import React from "react";
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from '../Card'
import { stringify } from "querystring";
import { ICard, IListProps } from "../../interfaces/IDND";

interface IList {
    data: IListProps;
    index: number;
    listIndex: number;
}


export default function List({ data, index, listIndex }: IList) {


    return (
        <Container style={{ opacity: data.done ? 0.6 : 1 }}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#fff" />
                    </button>
                )}

            </header>

            <ul>

                {data.cards.length ?

                    data?.cards?.map((card, index) => <Card key={card.id} index={index} listIndex={listIndex} data={card} />)
                    : (<Card key={0} index={index} listIndex={listIndex} data={{ id: 1000, content: "" }} />)}
            </ul>
        </Container>

    );
}