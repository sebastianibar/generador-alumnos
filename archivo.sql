CREATE TABLE IF NOT EXISTS alumnos (

    expediente INTEGER NOT NULL UNIQUE CHECK(expediente >= 100000000 AND expediente <= 999999999),
    app1 VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(app1)) > 0),
    app2 VARCHAR(255) CHECK(app2 IS NULL OR LENGTH(TRIM(app2)) > 0),
    nombres VARCHAR(255) NOT NULL CHECK(LENGTH(TRIM(nombres)) > 0),
    correo VARCHAR(255) NOT NULL UNIQUE,
    CONSTRAINT chk_correo_formato CHECK(correo = CONCAT("a", expediente, "@unison.mx"))
);
DELIMITER $$
CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos 
FOR EACH ROW
BEGIN
   SET NEW.app1 = TRIM(NEW.app1);
END$$

DELIMITER $$
-- PARA POSTGRESS-
-- 1. Crear la tabla (Sintaxis corregida para Postgres)
CREATE TABLE IF NOT EXISTS alumnos (
    expediente INTEGER NOT NULL,
    app1 VARCHAR(255) NOT NULL,
    app2 VARCHAR(255) DEFAULT NULL,
    nombres VARCHAR(255) NOT NULL,
    correo VARCHAR(255) NOT NULL,
    -- Restricciones de unicidad
    CONSTRAINT unique_expediente UNIQUE (expediente),
    CONSTRAINT unique_correo UNIQUE (correo),
    -- Restricciones de validación (CHECK)
    CONSTRAINT alumnos_chk_1 CHECK (expediente >= 100000000 AND expediente <= 999999999),
    CONSTRAINT alumnos_chk_2 CHECK (LENGTH(TRIM(app1)) > 0),
    CONSTRAINT alumnos_chk_3 CHECK (app2 IS NULL OR LENGTH(TRIM(app2)) > 0),
    CONSTRAINT alumnos_chk_4 CHECK (LENGTH(TRIM(nombres)) > 0),
    CONSTRAINT chk_correo_formato CHECK (correo = 'a' || expediente || '@unison.mx')
);

-- 2. Crear la función del trigger
CREATE OR REPLACE FUNCTION fn_trim_app1()
RETURNS TRIGGER AS $$
BEGIN
    NEW.app1 := TRIM(NEW.app1);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 3. Crear el trigger
DROP TRIGGER IF EXISTS bi_alumnos_app1 ON alumnos;
CREATE TRIGGER bi_alumnos_app1
BEFORE INSERT ON alumnos
FOR EACH ROW
EXECUTE FUNCTION fn_trim_app1();

--224210763

-- Pruebas de integridad
INSERT INTO alumnos VALUES (NULL, "abril", "garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (0, "abril", "garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (224210763, "abril", "garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (-224210763, "abril", "garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (-22421076, "abril", "garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (-2242107630, "abril", "garcia", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (224211769, "", "garcia", "Jose Humberto", "jose.abrilk@unison.mx");
INSERT INTO alumnos VALUES (224213769, "       ", "garcia", "Jose Humberto", "jose.ab1rilk@unison.mx");
INSERT INTO alumnos VALUES (224290769, "b    ", "garcia", "Jose Humberto", "jose.aba1aril2@unison.mx");
INSERT INTO alumnos VALUES (223210763, "abril", "     ", "Jose Humberto", "jose.abril@unison.mx");
INSERT INTO alumnos VALUES (224207130, "abril", NULL, "Jose Humberto", "jose.abril1@unison.mx");
INSERT INTO alumnos VALUES (224207930, "abril", "                        ", "Jose Humberto", "jose.abril2@unison.mx");
INSERT INTO alumnos VALUES (224206430, "abril", "Garcia", "Jose Humberto", "jose.abril3@unison.mx");
INSERT INTO alumnos VALUES (224206130, "abril", "Garcia", "        ", "jose.abril4@unison.mx");
INSERT INTO alumnos VALUES (224206430, "abaril", "Garcia", NULL, "jose.abril5@unison.mx");












