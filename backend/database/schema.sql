create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);

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

