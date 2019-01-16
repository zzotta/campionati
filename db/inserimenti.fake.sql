insert into campionati values('rocks inside champioship', 2018);
insert into campionati values('rocks inside champioship', 2019);
insert into campionati values('sorrca', 2019);

insert into gare values('rocks inside champioship', 2018, 1, 'casalecchio', '15/01/2019');
insert into gare values('rocks inside champioship', 2018, 2, 'zola', '15/02/2019');
insert into gare values('rocks inside champioship', 2018, 3, 'siracusa', '15/03/2019');
insert into gare values('rocks inside champioship', 2019, 1, 'roma', '30/01/2019');
insert into gare values('sorrca', 2019, 1, 'belluno', '30/02/2019');

insert into piloti values('massimo', 'arcara');
insert into piloti values('marco', 'comparato');
insert into piloti values('alex', 'neri');
insert into piloti values('gabriele', 'cieri');
insert into piloti values('valerio', 'rumagnoli');
insert into piloti values('ivan', 'menarini');
insert into piloti values('mattia', 'desiderio');
insert into piloti values('patrick', 'maroni');

insert into partecipazioni values('marco', 'comparato', 'rocks inside champioship', 2018, 2);
insert into partecipazioni values('massimo', 'arcara', 'rocks inside champioship', 2018, 2);
insert into partecipazioni values('marco', 'comparato', 'sorrca', 2019, 1);

insert into categorie values('abs');
insert into categorie values('lexan');

insert into manches values('marco', 'comparato', 'sorrca', 2019, 1, 'abs', 1, 0, 2, 600);


-- delete from campionati where anno = 2018;
-- delete from gare where nome is null;
