create table user (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  picture text not null,
  location varchar(255) not null,
  rating int unsigned not null default 0,
  nb_services int unsigned not null default 0,
  nb_donations int unsigned not null default 0
);

create table service_category (
  id int unsigned primary key auto_increment not null,
  name varchar(80)
);

create table donation_category (
  id int unsigned primary key auto_increment not null,
  name varchar(80)
);

create table condition_category (
  id int unsigned primary key auto_increment not null,
  name varchar(80)
);

create table donation (
  id int unsigned primary key auto_increment not null,
  date date not null,
  picture text not null,
  title varchar(255) not null,
  description text not null,
  condition_id int unsigned not null,
  category_id int unsigned not null,
  user_id int unsigned not null,
  foreign key(condition_id) references condition_category(id),
  foreign key(category_id) references donation_category(id),
  foreign key(user_id) references user(id)
  name varchar(255) not null,
  picture text not null,
  location varchar(255) not null,
  rating int unsigned not null default 0,
  nb_services int unsigned not null default 0,
  nb_donations int unsigned not null default 0
);

create table service_category (
  id int unsigned primary key auto_increment not null,
  name varchar(80)
);

create table donation_category (
  id int unsigned primary key auto_increment not null,
  name varchar(80)
);

create table condition_category (
  id int unsigned primary key auto_increment not null,
  name varchar(80)
);

create table donation (
  id int unsigned primary key auto_increment not null,
  date date not null,
  picture text not null,
  title varchar(255) not null,
  description text not null,
  condition_id int unsigned not null,
  category_id int unsigned not null,
  user_id int unsigned not null,
  foreign key(condition_id) references condition_category(id),
  foreign key(category_id) references donation_category(id),
  foreign key(user_id) references user(id)
);

create table service (
  id int unsigned primary key auto_increment not null,
  date date not null,
  title varchar(255) not null,
  description text not null,
  category_id int unsigned not null,
  user_id int unsigned not null,
  foreign key(category_id) references service_category(id),
  foreign key(user_id) references user(id)
);

insert into user(id, name, picture, location, rating, nb_services, nb_donations)
values
  (1,
   "Julien Joecker",
    "https://storage.googleapis.com/quest_editor_uploads/Z0ASENec4r9nDINtoWZzF51mhBYc9trY.png", 
    "Toulouse, Haute-Garonne, France", 
    4, 
    23, 
    12),
  (2,
   "Sylvia Barraud",
   "https://github.com/Sylviatoo.png?size=300",
    "Toulouse, Haute-Garonne, France", 
   4,
   9,
   20
   ),
   (3,
    "Charlotte Albouy",
    "https://www.gravatar.com/avatar/84919?d=monsterid&s=300",
    "Toulouse, Haute-Garonne, France", 
    4,
    16,
    14
    ),
  (4,
    "Thierry Lenepveu",
    "https://storage.googleapis.com/quest_editor_uploads/XelGDydjF0UfoRy1fLKah7nFFFzYr681.png",
    "Toulouse, Haute-Garonne, France",
    3,
    8,
    8 
    ),
  (5,
    "Arthur Heurtebise",
    "https://i1.sndcdn.com/avatars-000395959800-dz9g6i-t1080x1080.jpg",
    "Toulouse, Haute-Garonne, France",
    5,
    1,
    1
  );

insert into donation_category (id, name)
values 
  (1, "alimentaire"),
  (2, "produits d'hygiène"),
  (3, "vêtements"),
  (4, "jouets"),
  (5, "electroménager"),
  (6, "meuble"),
  (7, "produits pour bébé"),
  (8, "informatique");

insert into service_category (id, name)
values 
  (1, "bricolage"),
  (2, "aide aux courses"),
  (3, "garde d'animaux de compagnie"),
  (4, "garde d'enfants"),
  (5, "soutien aux personnes isolées"),
  (6, "enseignement");

insert into condition_category (id, name)
values 
  (1, "neuf sous emballage d'origine"),
  (2, "état neuf"),
  (3, "très bon état"),
  (4, "bon état"),
  (5, "satisfaisant");

insert into donation (id, date, picture, title, description, condition_id, category_id, user_id)
values
 (1,
  "2024-12-05",
  "https://www.lidl.fr/assets/gcpf7d4e70edc0f459a972309babe4fdaf4.jpg",
  "Petit train en bois",
  "Je donne un set de chimin de fer en bois. Etat comme neuf. Très peu servi.",
  2,
  4,
  1),
 (2,
  "2014-11-29",
  "https://www.ikea.com/fr/fr/images/products/sonhult-tables-gigognes-lot-de-2-gris-motif-noyer__1329101_pe945076_s5.jpg?f=xl",
  "Tables gigognes, lot de 2, gris/motif noyer",
  "Je donne ces deux ravissants tables gigognes, n'ayant plus de place chez moi. Bon état. Quelques égratignures.",
  4,
  6,
  3),
 (3,
  "2024-12-04",
  "https://image.darty.com/petit_electromenager/expresso_cafetiere/cafetiere_dosette/philips_csa210_61_t2205234945565D_093606807.jpg",
  "Cafetière Senséo",
  "Je donne une cafetière Senséo Phillips. Jamais servi, sous embzllage d'origine.",
  1,
  5,
  2),
 (4,
  "2024-11-25",
  "https://lsco.scene7.com/is/image/lsco/005013632-front-pdp-ld?fmt=webp&qlt=70&resMode=sharp2&fit=crop,1&op_usm=0.6,0.6,8&wid=451&hei=451",
  "Jeans Levi's 501",
  "Je donne un Jean Levi's 501. Jamais porté.",
  2,
  3,
  4),
 (5,
  "2024-12-05",
  "https://i.ebayimg.com/images/g/kJUAAOSw76Bmfo0j/s-l1600.webp",
  "Ordi ultra performant",
  "Je fais don de mon ordinateur de compète. Apprenez à le dompter et vous serez satisfait.",
  2,
  8,
  3);
 
insert into service (id, date, title, description, category_id, user_id)
values
  (1, "Stuff", 1),
  (2, "Doodads", 1);
