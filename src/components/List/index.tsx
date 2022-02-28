import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from '../Card'
import { IListProps } from "../../interfaces/IDND";
import CardExperimental from '../CardExperimental';

interface IList {
    data: IListProps;
    index: number;
    listIndex: number;
}


export default function List({ data, index, listIndex }: IList) {
    console.log(data)
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


                {
                    (data.cards.length !== 0 && [data].length) ?
                        data.cards.map((card, index) => <Card key={index} index={index} listIndex={listIndex} data={card} />)
                        : (<CardExperimental listIndex={listIndex} />)
                }
            </ul>
        </Container>

    );
}