create table coach (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  speciality VARCHAR(255)
);


create table formule (
  id int unsigned primary key auto_increment not null,
  type VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  coach_id INT UNSIGNED,
  FOREIGN KEY (coach_id) REFERENCES coach(id)
);

insert into coach (name, speciality) VALUES ('Sidiki', 'Coach principal');
insert into coach (name, speciality) VALUES ('Coco', 'Entraîneur U9 et spécifique gardiens');
insert into coach (name, speciality) VALUES ('Ali', 'Référent Futsal');

insert into formule (type, description, coach_id) VALUES ('Formule individuelle', 'Séances individualisées', 1);
insert into formule (type, description, coach_id) VALUES ('Formule collective', "Séances collectives par petits groupes sous forme d'ateliers", 1);
insert into formule (type, description, coach_id) VALUES ('Formule combinée', "Packaging séances individuelles et collectives", 1);


















