create table usuario (
    id SERIAL PRIMARY KEY,
    primeiro_nome VARCHAR(100),
    ultimo_nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(100)
);


insert into usuario (primeiro_nome, ultimo_nome, email, telefone) values ('Melita', 'Coleborn', 'mcoleborn0@yahoo.com', '+1-932-150-0885');
insert into usuario (primeiro_nome, ultimo_nome, email, telefone) values ('Errol', 'Konzelmann', 'ekonzelmann1@goo.gl', '+44-693-288-6973');
insert into usuario (primeiro_nome, ultimo_nome, email, telefone) values ('Giraud', 'Jost', 'gjost2@abc.net.au', '+351-613-303-3178');
insert into usuario (primeiro_nome, ultimo_nome, email, telefone) values ('Nadine', 'Wolfenden', 'nwolfenden3@photobucket.com', '+1-167-176-7986');
insert into usuario (primeiro_nome, ultimo_nome, email, telefone) values ('Rossy', 'Holt', 'rholt4@economist.com', '+1-474-789-2730');

