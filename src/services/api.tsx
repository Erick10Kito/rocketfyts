import { IListProps } from "../interfaces/IDND";

export function loadLists(): IListProps[] {
    return [
        {
            title: 'Tarefas',
            creatable: true,
            cardatable: false,
            cards: [
                {
                    content: 'Estudar módulo 01 de NodeJS',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {
                    content: 'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {

                    content: 'Estudar módulo 03 de React Native',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {

                    content: 'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
                    labels: ['#54e1f7'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {

                    content: 'Gravar testes e deploy ReactJS',
                    labels: ['#54e1f7'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
            ]
        },
        {
            title: 'experimentando',
            creatable: false,
            cardatable: false,
            cards: []
        },
        {
            title: 'Fazendo',
            creatable: false,
            cardatable: false,
            cards: [
                {

                    content: 'Gravar testes e deploy ReactJS',
                    labels: ['#54e1f7'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                }

            ]
        },
        {
            title: 'Pausado',
            creatable: false,
            cardatable: false,
            cards: [
                {

                    content: 'Gravar sobre Geolocalização e mapas com React Native',
                    labels: ['#7159c1'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {

                    content: 'Gravar testes e deploy ReactJS',
                    labels: ['#54e1f7'],
                    user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
                },
                {

                    content: 'Ajustes na biblioteca unform',
                    labels: [],
                }
            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            cardatable: false,
            done: true,
            cards: [
                {

                    content: 'Gravar aula sobre deploy e CI com React Native',
                    labels: [],
                },
                {

                    content: 'Gravar testes e deploy ReactJS',
                    labels: ['#54e1f7'],
                },
                {

                    content: 'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}