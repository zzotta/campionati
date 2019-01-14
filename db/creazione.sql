create table `campionati` (
  `nome` text not null,
  `anno` integer not null,
  primary key(nome, anno)
);

create table `gare` (
  `nome` text not null,
  `anno` integer not null,
  `numero` integer not null,
  `luogo` text not null,
  `data` text not null,
  primary key(nome, anno, numero)
  foreign key(nome, anno) references campionato(nome, anno)
);
