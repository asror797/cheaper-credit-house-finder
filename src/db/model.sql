CREATE TABLE companies(
   company_id serial PRIMARY KEY,
   company_name varchar(32) NOT NULL
);

CREATE TABLE complexes(
   complex_id serial PRIMARY KEY,
   complex_name varchar(32) NOT NULL,
   house_price int NOT NULL,
   company_id int REFERENCES companies(company_id) NOT NULL
);


CREATE TABLE houses(
   house_id serial PRIMARY KEY,
   house_room smallint NOT NULL,
   house_price int NOT NULL,
   complex_id int REFERENCES complexes(complex_id) NOT NULL
);


CREATE TABLE banks (
   bank_id serial PRIMARY KEY,
   bank_name varchar(32) NOT NULL,
   max_kredit int NOT NULL,
   kredit_duration int NOT NULL
);



