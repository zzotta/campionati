drop table if exists gare;
drop table if exists campionati;

create table if not exists `campionati` (
  `nome` text not null collate nocase,
  `anno` integer not null,
  primary key(nome, anno)
);

create table if not exists `gare` (
  `nome` text collate nocase,
  `anno` integer,
  `numero` integer not null,
  `luogo` text not null collate nocase,
  `data` text not null,
  primary key(nome, anno, numero),
  foreign key(nome, anno) references campionati(nome, anno) on delete set null on update cascade
);
