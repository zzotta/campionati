drop table if exists gare;
drop table if exists campionati;
drop table if exists piloti;

create table if not exists campionati (
  nome text not null collate nocase,
  anno integer not null,
  primary key(nome, anno)
);

create table if not exists gare (
  campionato_nome text collate nocase,
  campionato_anno integer,
  numero integer not null,
  luogo text not null collate nocase,
  data text not null,
  primary key(campionato_nome, campionato_anno, numero),
  foreign key(campionato_nome, campionato_anno) references campionati(nome, anno) on update cascade
);

create table if not exists piloti (
  nome text not null collate nocase,
  cognome text not null collate nocase,
  primary key(nome, cognome)
);

create table if not exists partecipazioni (
  pilota_nome text not null collate nocase,
  pilota_cognome text not null collate nocase,
  gara_nome text not null collate nocase,
  gara_anno integer not null,
  gara_numero integer not null,
  primary key(pilota_nome, pilota_cognome, gara_nome, gara_anno, gara_numero),
  foreign key(pilota_nome, pilota_cognome) references piloti(nome, cognome) on update cascade,
  foreign key(gara_nome, gara_anno, gara_numero) references gare(nome, anno, numero) on update cascade
);
