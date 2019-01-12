create table if not exists `campionati` (
  `nome` text not null,
  `anno` integer not null,
  primary key(nome, anno)
);

create table `gare` (
  `campionato` text not null,
  `numero` integer not null,
  `luogo` integer not null,
  `data` integer not null,
  primary key(campionato, numero)
);
