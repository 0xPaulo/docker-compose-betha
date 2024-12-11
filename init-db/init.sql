CREATE SCHEMA IF NOT EXISTS manutencao;

CREATE TABLE IF NOT EXISTS manutencao.tecnico (
    id BIGINT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tecnico_categorias VARCHAR(255),
    imagem VARCHAR,
    perfil VARCHAR NOT NULL
);
INSERT INTO
    manutencao.tecnico (
        id,
        nome,
        email,
        senha,
        tecnico_categorias,
        imagem,
        perfil
    )
VALUES (
        301,
        'Marcos Silva Silva 2',
        'marcos@mail',
        '$2a$10$f3SEepwzvnNr4Qwnotf0Eulx8M8eouMs34qX1SV0Tcuv8uqcxp8ea',
        'TELAS',
        'https://lh3.googleusercontent.com/d/1h8VHBIEtjLwz9D3p6V0kF-5n_zI2chCS',
        'MANUTENCAO'
    ),
    (
        302,
        'Maria Santos',
        'maria@mail',
        '$2a$10$fm/KQFBBdlnM/9ipgT.TOOIrAg59aoltY/jwIgUWU/lJKwdQZYVMa',
        'MOBILE',
        'https://lh3.googleusercontent.com/d/1VpGVq4NkHT0dFdWMZf6aOHVMMKP9yGle',
        'MANUTENCAO'
    ),
    (
        303,
        'Pedro Oliveira',
        'pedro@mail',
        '$2a$10$VLkcilv04wHou/5Xg3gPIewF75ObUIVRWTVBtDdHTYmx9ulXl7Nma',
        'PLACAS',
        'https://lh3.googleusercontent.com/d/11gXSRtXxj9amUulTs3okdUcw2YNbfHuy',
        'MANUTENCAO'
    ),
    (
        304,
        'Ana Souza',
        'ana@mail',
        '$2a$10$qEXsV0cujCCQpQgzFlmno.jBU13B8zRahjeKLszQDegJy3vQo44dS',
        'PLACAS',
        'https://lh3.googleusercontent.com/d/1nnwRlR7Zmp4-cn2nvf4rSEJf8h15iGn7',
        'MANUTENCAO'
    ),
    (
        305,
        'Carlos Lima',
        'carlos@mail',
        '$2a$10$p1ssIqO5DfG44JXaZ1C04.2UUyCtoCcPBPvRS51KupJh6mz2SAV8S',
        'TELAS',
        'https://lh3.googleusercontent.com/d/1oOtXdRuEjgpyTIS_1S3y0uLKc-eLqSfi',
        'MANUTENCAO'
    ),
    (
        306,
        'Luciana Costa',
        'luciana@mail',
        '$2a$10$pPZc0GV32FbwEFzsXjH2nOEmuQLOeCdJap5mfDG.sQw7vvQOjAmAC',
        'MOBILE',
        'https://lh3.googleusercontent.com/d/1yB3UOimNB1_PbS3SqUycPgSVhQSt8MIx',
        'MANUTENCAO'
    ),
    (
        307,
        'admin',
        'admin@mail',
        '$2a$12$8aXrkS4knasDvbB5NNRa2eRmZZi1B/5l2mlvtG8Lsn3OFpyKjPy16',
        'SEM_CATEGORIA',
        '',
        'ADMIN'
    );
CREATE TABLE IF NOT EXISTS manutencao.cliente (
    id BIGINT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(255) NOT NULL,
    imagem VARCHAR(255),
    perfil VARCHAR(255)
);

INSERT INTO
    manutencao.cliente (
        id,
        email,
        endereco,
        nome,
        telefone,
        imagem,
        perfil
    )
VALUES (
        301,
        'isabela@email.com',
        'Praça da Felicidade, 123',
        'Isabela da Silva Oliveira',
        '(22) 5555-8888',
        NULL,
        NULL
    ),
    (
        302,
        'juliana@email.com',
        'Rua da Liberdade, 789',
        'Juliana Santos Silva',
        '(44) 9999-8888',
        NULL,
        NULL
    ),
    (
        303,
        'carlos@email.com',
        'Avenida Principal, 1001',
        'Carlos da Silva Santos',
        '(44) 1111-2222',
        NULL,
        NULL
    ),
    (
        304,
        'ana@email.com',
        'Rua das Árvores, 789',
        'Ana Pereira Costa',
        '(55) 3333-4444',
        NULL,
        NULL
    ),
    (
        305,
        'fernanda@email.com',
        'Alameda das Flores, 555',
        'Fernanda Oliveira Rodrigues',
        '(66) 5555-6666',
        NULL,
        NULL
    ),
    (
        306,
        'rafaela@email.com',
        'Praça da Alegria, 321',
        'Rafaela Nunes Almeida',
        '(77) 7777-8888',
        NULL,
        NULL
    ),
    (
        307,
        'lucas@email.com',
        'Travessa das Estrelas, 987',
        'Lucas da Silva Lima',
        '(88) 9999-0000',
        NULL,
        NULL
    ),
    (
        308,
        'mariana@email.com',
        'Rua dos Sonhos, 456',
        'Mariana Santos Ferreira',
        '(99) 1234-5678',
        NULL,
        NULL
    ),
    (
        309,
        'gabriel@email.com',
        'Avenida dos Ventos, 789',
        'Gabriel Oliveira Da Silva',
        '(11) 9876-5432',
        NULL,
        NULL
    ),
    (
        310,
        'diego@email.com',
        'Avenida da Paz, 456',
        'Diego da Silva Oliveira',
        '(33) 1234-5678',
        NULL,
        NULL
    );

CREATE TABLE IF NOT EXISTS manutencao.chamado (
    id BIGINT PRIMARY KEY,
    analise_tecnica VARCHAR(255) NOT NULL,
    custo_estimado INTEGER NOT NULL,
    data_entrada VARCHAR(255) NOT NULL,
    data_saida VARCHAR(26),
    defeito_relatado VARCHAR(255) NOT NULL,
    image_urls TEXT[],
    item_serie VARCHAR(255) NOT NULL,
    name_item VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    cliente_id_fk INTEGER NOT NULL,
    tecnico_id_fk VARCHAR(255),
    motivo_nao_conclusao VARCHAR(255)
);

INSERT INTO
    manutencao.chamado (
        id,
        analise_tecnica,
        custo_estimado,
        data_entrada,
        data_saida,
        defeito_relatado,
        image_urls,
        item_serie,
        name_item,
        status,
        cliente_id_fk,
        tecnico_id_fk,
        motivo_nao_conclusao
    )
VALUES (
        111,
        'Mouse com defeito no sensor',
        75,
        '2024-04-19 14:15:00',
        NULL,
        'Scroll não funciona',
        NULL,
        'YZA707',
        'Mouse',
        'AGUARDANDO_FINALIZAR',
        302,
        NULL,
        NULL
    ),
    (
        112,
        'Teclado precisa de troca de membrana',
        55,
        '2024-04-18 12:30:00',
        NULL,
        'Teclas soltas',
        NULL,
        'VWX606',
        'Teclado',
        'CONCLUIDO_CONSERTADO',
        301,
        NULL,
        NULL
    ),
    (
        107,
        'Teclado precisa de substituição de teclas',
        60,
        '2024-04-14 14:10:00',
        NULL,
        'Teclas presas',
        NULL,
        'JKL202',
        'Teclado',
        'CONCLUIDO_N_CONSERTADO',
        307,
        NULL,
        NULL
    ),
    (
        103,
        'Teclado precisa de limpeza interna',
        50,
        '2024-04-10 10:00:00',
        NULL,
        'Teclas não funcionam',
        NULL,
        'ABC123',
        'Teclado',
        'AGUARDANDO_CLIENTE',
        303,
        NULL,
        NULL
    ),
    (
        105,
        'Monitor com problemas na placa de vídeo',
        120,
        '2024-04-12 09:45:00',
        NULL,
        'Tela piscando',
        NULL,
        'DEF789',
        'Monitor',
        'AGUARDANDO_CLIENTE',
        305,
        NULL,
        NULL
    ),
    (
        109,
        'Monitor precisa de ajuste de configuração',
        110,
        '2024-04-16 08:20:00',
        NULL,
        'Tela oscilando',
        NULL,
        'PQR404',
        'Monitor',
        'AGUARDANDO_MANUTENCAO',
        309,
        NULL,
        NULL
    ),
    (
        108,
        'Mouse com problema no botão',
        80,
        '2024-04-15 16:45:00',
        NULL,
        'Duplo clique constante',
        NULL,
        'MNO303',
        'Mouse',
        'AGUARDANDO_CLIENTE',
        308,
        NULL,
        NULL
    ),
    (
        110,
        'CPU com superaquecimento',
        180,
        '2024-02-19 14:15:00',
        NULL,
        'Desligamento aleatório',
        NULL,
        'STU505',
        'CPU',
        'AGUARDANDO_CLIENTE',
        310,
        NULL,
        NULL
    ),
    (
        106,
        'CPU precisa de manutenção preventiva',
        200,
        '2024-04-13 11:20:00',
        NULL,
        'Lento ao iniciar',
        NULL,
        'GHI101',
        'CPU',
        'AGUARDANDO_MANUTENCAO',
        306,
        NULL,
        NULL
    ),
    (
        104,
        'Mouse precisa de troca de sensor',
        70,
        '2024-04-11 15:30:00',
        NULL,
        'Cursor travado',
        NULL,
        'XYZ456',
        'Mouse',
        'AGUARDANDO_CLIENTE',
        304,
        NULL,
        NULL
    ),
    (
        113,
        'A tela apresenta uma rachadura diagonal',
        200,
        '2024-06-04 00:00:00',
        '2024-06-04 18:18:21.153485',
        'O telefone não esta carregando',
        NULL,
        '32094234-234-234',
        'Telefone',
        'EM_MANUTENCAO',
        304,
        NULL,
        NULL
    );