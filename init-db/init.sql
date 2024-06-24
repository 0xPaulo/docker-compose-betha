CREATE SCHEMA IF NOT EXISTS manutencao;

CREATE TABLE IF NOT EXISTS manutencao.tecnico (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tecnico_categorias VARCHAR(255),
    imagem VARCHAR,
    perfil VARCHAR NOT NULL
);

INSERT INTO manutencao.tecnico (nome, email,senha,tecnico_categorias,imagem,perfil) VALUES 
('Marcos Silva', 'marcos@mail','$2a$10$f3SEepwzvnNr4Qwnotf0Eulx8M8eouMs34qX1SV0Tcuv8uqcxp8ea','TELAS','https://lh3.googleusercontent.com/d/1h8VHBIEtjLwz9D3p6V0kF-5n_zI2chCS','MANUTENCAO'),

('Maria Santos', 'maria@mail','$2a$10$fm/KQFBBdlnM/9ipgT.TOOIrAg59aoltY/jwIgUWU/lJKwdQZYVMa','MOBILE','https://lh3.googleusercontent.com/d/1VpGVq4NkHT0dFdWMZf6aOHVMMKP9yGle','MANUTENCAO'),

('Pedro Oliveira', 'pedro@mail','$2a$10$VLkcilv04wHou/5Xg3gPIewF75ObUIVRWTVBtDdHTYmx9ulXl7Nma','PLACAS','https://lh3.googleusercontent.com/d/11gXSRtXxj9amUulTs3okdUcw2YNbfHuy','MANUTENCAO'),

('Ana Souza', 'ana@mail','$2a$10$qEXsV0cujCCQpQgzFlmno.jBU13B8zRahjeKLszQDegJy3vQo44dS','PLACAS','https://lh3.googleusercontent.com/d/1nnwRlR7Zmp4-cn2nvf4rSEJf8h15iGn7','MANUTENCAO'),

('Carlos Lima', 'carlos@mail','$2a$10$p1ssIqO5DfG44JXaZ1C04.2UUyCtoCcPBPvRS51KupJh6mz2SAV8S','TELAS','https://lh3.googleusercontent.com/d/1oOtXdRuEjgpyTIS_1S3y0uLKc-eLqSfi','MANUTENCAO'),

('Luciana Costa', 'luciana@mail','$2a$10$pPZc0GV32FbwEFzsXjH2nOEmuQLOeCdJap5mfDG.sQw7vvQOjAmAC','MOBILE','https://lh3.googleusercontent.com/d/1yB3UOimNB1_PbS3SqUycPgSVhQSt8MIx','MANUTENCAO'),

('admin', 'admin@mail','$2a$12$8aXrkS4knasDvbB5NNRa2eRmZZi1B/5l2mlvtG8Lsn3OFpyKjPy16','SEM_CATEGORIA','','ADMIN');