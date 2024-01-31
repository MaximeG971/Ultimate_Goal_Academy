create table coach (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  speciality VARCHAR(255)
);


create table formule (
  id int unsigned primary key auto_increment not null,
  type VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL
);

insert into coach (name, speciality) VALUES ('Sidiki', 'Coach principal');
insert into coach (name, speciality) VALUES ('Coco', 'Entraîneur U9 et spécifique gardiens');
insert into coach (name, speciality) VALUES ('Ali', 'Référent Futsal');
















