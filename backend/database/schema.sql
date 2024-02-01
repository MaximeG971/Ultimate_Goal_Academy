create table coach (
  id int unsigned primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  speciality VARCHAR(255),
  photo VARCHAR(255)
);


create table formule (
  id int unsigned primary key auto_increment not null,
  type VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  coach_id INT UNSIGNED,
  FOREIGN KEY (coach_id) REFERENCES coach(id)
);

insert into coach (name, speciality, photo) VALUES ('Sidiki', 'Coach principal', 'https://github.com/MaximeG971/img-ug/blob/main/Sidiki-profil.JPG?raw=true');
insert into coach (name, speciality, photo) VALUES ('Koko', 'Entraîneur des gardiens', 'https://github.com/MaximeG971/img-ug/blob/main/Koko-ug.jpg?raw=true');
insert into coach (name, speciality, photo) VALUES ('Ali', 'Référent Futsal', 'https://github.com/MaximeG971/img-ug/blob/main/Ali-ug.JPG?raw=true');
insert into coach (name,speciality) VALUES ('Max', 'Spécifique défenseurs');
insert into formule (type, description, coach_id) VALUES ('Formule individuelle', 'Séances individualisées', 1);
insert into formule (type, description, coach_id) VALUES ('Formule collective', "Séances collectives par petits groupes sous forme d'ateliers", 1);
insert into formule (type, description, coach_id) VALUES ('Formule combinée', "Packaging séances individuelles et collectives", 1);
insert into formule (type, description, coach_id) VALUES ('Formule test', 'Test', 3);

create table user (
  id int unsigned primary key auto_increment not null,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

insert into user (email, password) VALUES ('admin@admin.com', 'admin123');

