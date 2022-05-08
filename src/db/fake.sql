
INSERT INTO companies (
   company_name
)
VALUES (
   'Akay City'
);

INSERT INSERT complexes (
   complex_name,
   company_id
) VALUES (
   'Nest One',
   1
);

select * from houses inner join complexes using(complex_id);



CREATE TABLE complexes(
   complex_id serial PRIMARY KEY,
   complex_name varchar(32) NOT NULL,
   company_id int REFERENCES companies(company_id) NOT NULL
);



insert into complexes (
   complex_name,

)



select * from banks where  max_kredit = (select min(max_kredit) from banks where kredit_duration = $1 and max_kredit >$2)






CREATE OR REPLACE FUNCTION fn1()
RETURNS TABLE(bank_name varchar,max_kredit int ,kredit_duration int) 
LANGUAGE plpgsql
AS
$$
BEGIN
    RETURN  QUERY EXECUTE  'select * from banks';
END
$$;



bank_id serial PRIMARY KEY,
   bank_name varchar(32) NOT NULL,
   max_kredit int NOT NULL,
   kredit_duration int NOT NULL


CREATE OR REPLACE FUNCTION myfunc()
LANGUAGE plpgsql
RETURNS TABLE(bank_name varchar,max_kredit int ,kredit_duration int) 
AS
$$
    BEGIN
            RETURN QUERY EXECUTE  'select * from banks';
    END;
$$ 



select * from banks where  max_kredit = (select min(max_kredit) from banks where kredit_duration = $1 and max_kredit >$2)




SELECT title,
       length,
       CASE
           WHEN length> 0
                AND length <= 50 THEN 'Short'
           WHEN length > 50
                AND length <= 120 THEN 'Medium'
           WHEN length> 120 THEN 'Long'
       END duration
FROM film
ORDER BY title;


SELECT
   bank_id,
   bank_name,
   max_kredit,
   kredit_duration,
   CASE
      WHEN kredit_duration = 10 THEN max_kredit/120
      WHEN kredit_duration = 15 THEN max_kredit/180
      WHEN kredit_duration = 20 THEN max_kredit/240
   END monthPayment
FROM
   banks
WHERE
   kredit_duration = (select min(max_kredit) from banks WHERE kredit_duration = $1 and max_kredit > $2)


SELECT
   bank_id,
   bank_name,
   max_kredit,
   kredit_duration,
   CASE
      WHEN kredit_duration = 10 THEN max_kredit/120
      WHEN kredit_duration = 15 THEN max_kredit/180
      WHEN kredit_duration = 20 THEN max_kredit/240
   END monthPayment
FROM
   banks
WHERE
   max_kredit = (select min(max_kredit) from banks WHERE kredit_duration = 10 and max_kredit > 35000000);



SELECT bank_id,bank_name,max_kredit, kredit_duration,CASE WHEN kredit_duration = 10 THEN max_kredit/120 WHEN kredit_duration = 15 THEN max_kredit/180  WHEN kredit_duration = 20 THEN max_kredit/240  END monthPayment FROM  banks WHERE  max_kredit = (select min(max_kredit) from banks WHERE kredit_duration = 10 and max_kredit > 35000000);





   SELECT
   *
FROM
   banks
WHERE
   max_kredit = (select min(max_kredit) from banks WHERE kredit_duration = 10 and max_kredit > 4100);



CREATE OR REPLACE FUNCTION getCredit(duration smallint , kredit int) 
RETURNS TABLE (
        bank_id int,
        bank_name varchar,
        max_kredit int ,
        kredit_duration smallint,
        monthpayment int
)
AS $$
BEGIN
    RETURN QUERY SELECT
   bank_id,
   bank_name,
   max_kredit,
   kredit_duration,
   CASE
      WHEN kredit_duration = 10 THEN max_kredit/120
      WHEN kredit_duration = 15 THEN max_kredit/180
      WHEN kredit_duration = 20 THEN max_kredit/240
      END monthpayment
   FROM
      banks
   WHERE
      max_kredit = (select min(max_kredit) from banks WHERE kredit_duration = duration and max_kredit > kredit);
END; $$ LANGUAGE 'plpgsql' ;


CREATE OR REPLACE FUNCTION banks()
RETURNS TABLE(
   company_id  int,
   company_name varchar
)
LANGUAGE plpgsql
AS
$$
   BEGIN
      RETURN QUERY select * from banks
      
   END
$$;



CREATE OR REPLACE FUNCTION fn(name text)
RETURNS TEXT
LANGUAGE plpgsql
AS
$$
DECLARE result text;
BEGIN

    IF 
        LENGTH(name) > 6
    THEN    
        result = 'Sizning ismingiz uzun 6dan';
    ELSE 
        result = 'Sizning ismingiz 6dan pas';
    END IF;

    RETURN result;
END
$$;



CREATE


CREATE OR REPLACE FUNCTION get_film (p_pattern VARCHAR) 
    RETURNS TABLE (
        film_title VARCHAR,
        film_release_year INT
) 
AS $$
BEGIN
    RETURN QUERY SELECT
        title,
        cast( release_year as integer)
    FROM
        film
    WHERE
        title ILIKE p_pattern ;
END; $$ 

LANGUAGE 'plpgsql';


CREATE OR REPLACE FUNCTION getBanks() 
RETURNS TABLE (
   bank_id int,
   bank_name varchar,
   max_kredit int,
   kredit_duration int
)
LANGUAGE plpgsql
AS
$$
BEGIN
   RETURN QUERY SELECT * FROM banks;
END
$$;


