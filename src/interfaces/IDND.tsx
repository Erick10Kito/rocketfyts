export interface ICard {
    content: string;
    labels?: string[];
    user?: string;
}

export interface IListProps {
    title: string;
    creatable: boolean;
    cardatable: boolean,
    cards: ICard[];
    done?: boolean;
}

export interface IMoveObject {
    fromList: number,
    toList: number,
    from: number,
    to: number
}
