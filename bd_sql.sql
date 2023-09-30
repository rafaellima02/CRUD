create database teste34;

use teste34;

create table registro(
id_clube int primary key auto_increment,
clube varchar (50),
regiao varchar (50),
estadio varchar (50),
datafundacao varchar (50)
);

select * from registro;

drop database teste34;


create table users(
id int primary key auto_increment,
nome varchar (50) not null,
email varchar (50) not null,
senha varchar (50) not null
);

select * from users;


