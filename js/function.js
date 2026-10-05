var salida = "";

const apellidosMexico = [
    "Hernández", "García", "Martínez", "López", "González",
    "Pérez", "Rodríguez", "Sánchez", "Ramírez", "Cruz",
    "Flores", "Gómez", "Morales", "Vázquez", "Jiménez",
    "Reyes", "Díaz", "Torres", "Gutiérrez", "Ruiz",
    "Mendoza", "Aguilar", "Ortiz", "Moreno", "Castillo",
    "Romero", "Álvarez", "Méndez", "Chávez", "Rivera",
    "Juárez", "Domínguez", "Herrera", "Medina", "Ramos",
    "Castro", "Ortega", "Vargas", "Santiago", "Salazar",
    "Rojas", "De la Cruz", "Guzmán", "Franco", "Silva",
    "Luna", "Muñoz", "Cabrera", "Delgado", "Contreras",
    "León", "Ríos", "Estrada", "Bautista", "Meza",
    "Gallegos", "Miranda", "Carrillo", "Valencia", "Nava",
    "Lara", "Pacheco", "Soto", "Cervantes", "Robledo",
    "Esquivel", "Salinas", "Maldonado", "Marín", "Calderón",
    "Lugo", "Rosas", "Padilla", "Fuentes", "Espinoza",
    "Rangel", "Acosta", "Sandoval", "Villegas", "Valdés",
    "Alfaro", "Camacho", "Guerrero", "Lozano", "Guevara",
    "Galindo", "Beltrán", "Orozco", "Pineda", "Navarro",
    "Parra", "Villalobos", "Duarte", "Serrano", "Ávila",
    "Ibarra", "Téllez", "Rocha", "Trejo", "Esparza"
];

const apellidosAlemanes = [
    "NULL", "Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz",
    "Hoffmann", "Schäfer", "Koch", "Bauer", "Richter", "Klein", "Wolf", "Schröder", "Neumann", "Schwarz",
    "Zimmermann", "Braun", "Krüger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Schmitz", "Krause",
    "Meier", "Lehmann", "Schmid", "Schulze", "Maier", "Köhler", "Herrmann", "König", "Walter", "Mayer",
    "Huber", "Kaiser", "Fuchs", "Peters", "Lang", "Scholz", "Möller", "Weiß", "Jung", "Hahn",
    "Schubert", "Vogel", "Friedrich", "Keller", "Günther", "Frank", "Berger", "Winkler", "Roth", "Beck",
    "Lorenz", "Baumann", "Franke", "Albrecht", "Schuster", "Simon", "Ludewig", "Böhm", "Winter", "Kraus",
    "Martin", "Krämer", "Stein", "Vogt", "Otto", "Jäger", "Große", "Seidel", "Heinrich", "Brandt",
    "Haas", "Schreiber", "Graf", "Schulte", "Dietrich", "Ziegler", "Kuhn", "Kühn", "Pohl", "Engel",
    "Horn", "Busch", "Bergmann", "Thomas", "Voigt", "Stegemann", "Sauer", "Arnold", "Wolff", "Bayer"
];

const nombresArabes = [
    "Muhammad", "Ahmed", "Ali", "Omar", "Amir", "Tariq", "Khalid", "Hassan", "Hussein", "Ibrahim",
    "Youssef", "Abdullah", "Mahmoud", "Mustafa", "Said", "Karim", "Zaid", "Hamza", "Bilal", "Samir",
    "Walid", "Ramy", "Tarek", "Yassin", "Nabil", "Ayman", "Amin", "Jamal", "Kareem", "Majid",
    "Nader", "Osama", "Qasim", "Rami", "Salem", "Talal", "Umar", "Yahya", "Zakariya", "Abbas",
    "Adnan", "Anwar", "Baha", "Farid", "Ghassan", "Habib", "Hadi", "Hakim", "Hashim", "Idris",
    "Jalal", "Kamal", "Latif", "Mahdi", "Marwan", "Munir", "Naser", "Qadir", "Rafiq", "Riad",
    "Salah", "Sami", "Shafiq", "Tahir", "Wael", "Yasser", "Zaki", "Amira", "Fatima", "Aisha",
    "Maryam", "Zainab", "Salma", "Khadija", "Noor", "Leyla", "Yasmin", "Huda", "Muna", "Nadia",
    "Rania", "Samira", "Sana", "Laila", "Reem", "Farida", "Hala", "Amal", "Iman", "Maha",
    "Najwa", "Rana", "Safa", "Tara", "Wafa", "Yasmine", "Zeina", "Dalal", "Farah", "Lina"
];

const nombresMexicanos = [
    "Juan", "José", "Luis", "Carlos", "Miguel", "Pedro", "Jorge", "Fernando", "Ricardo", "Alejandro",
    "Daniel", "David", "Eduardo", "Francisco", "Manuel", "Roberto", "Andrés", "Sergio", "Raúl", "Iván",
    "Héctor", "Arturo", "Alberto", "Mario", "Óscar", "Rubén", "Enrique", "Javier", "Adrián", "Esteban",
    "Diego", "Emilio", "Rodrigo", "Guillermo", "Salvador", "Hugo", "Alfonso", "Ramón", "Ignacio", "Tomás",
    "Benjamín", "Sebastián", "Pablo", "Leonardo", "Mauricio", "Ulises", "Federico", "Ernesto", "César", "Fabián",
    "Gael", "Damián", "Bruno", "Alan", "Axel", "Iker", "Kevin", "Jonathan", "Brian", "Edgar",
    "Ángel", "Jesús", "Cristian", "Marco", "Omar", "Ismael", "Abraham", "Samuel", "Josué", "Emanuel",
    "Noé", "Ezequiel", "Elías", "Matías", "Saúl", "Uriel", "Elian", "Lorenzo", "Nicolás", "Thiago",
    "Emiliano", "Santiago", "Máximo", "Camilo", "Gael", "Valentín", "Julián", "Cristóbal", "Iván", "Bautista",
    "Alexis", "Kevin", "Brayan", "Brandon", "Dylan", "Ian", "Álvaro", "Darío", "Rafael", "Teodoro"
];

function generar() {
    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": generarSQL(); break;
        case "2": generarSQLpostgresql(); break;
        case "3": generarSQLCSV(); break;
        case "4": generarJSON(); break;
    }
}

function generarSQL() {
    //SHOW CREATE TABLE alumnos
    salida = `CREATE DATABASE IF NOT EXISTS sistema_escolar; \n USE sistema_escolar; \n CREATE TABLE IF NOT EXISTS alumnos (
            expediente int NOT NULL,
    app1 varchar(255) NOT NULL,
  app2 varchar(255) DEFAULT NULL,
  nombres varchar(255) NOT NULL,
  correo varchar(255) NOT NULL,
  UNIQUE KEY expediente (expediente),
  UNIQUE KEY correo (correo),
  CONSTRAINT alumnos_chk_1 CHECK (((expediente >= 100000000) and (expediente <= 999999999))),
  CONSTRAINT alumnos_chk_2 CHECK ((length(trim(app1)) > 0)),
  CONSTRAINT alumnos_chk_3 CHECK (((app2 is null) or (length(trim(app2)) > 0))),
  CONSTRAINT alumnos_chk_4 CHECK ((length(trim(nombres)) > 0)),
  CONSTRAINT chk_correo_formato CHECK ((correo = concat('a',expediente,'@unison.mx')))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
            INSERT INTO alumnos VALUES \n`;

    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreArabe = "";

    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;

        if (apellidoAleman === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `UPPER('${apellidoAleman}')`;
        }

        nombre = "";
        nombreArabe = "";

        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreArabe = nombresArabes[Math.floor(Math.random() * nombresArabes.length)];
            nombre += ` ${nombreArabe}`;
        }

        salida += `(${matricula + i},UPPER('${apellidoMex}'), ${segundoApellido}, '${nombre}','a${matricula + i}@unison.mx'),\n\n`;
    }
    salida = salida.slice(0, -3) + ";";
    document.getElementById("salida").innerHTML = salida;
}

function generarSQLpostgresql() {
    // 1. Estructura DDL de PostgreSQL
    salida = `CREATE DATABASE sistema_escolar;
                \\c sistema_escolar
                SET client_encoding = 'UTF8';
                CREATE TABLE IF NOT EXISTS alumnos (
                    expediente int NOT NULL,
                    app1 varchar(255) NOT NULL,
                    app2 varchar(255) DEFAULT NULL,
                    nombres varchar(255) NOT NULL,
                    correo varchar(255) NOT NULL,
                    UNIQUE (expediente),
                    UNIQUE (correo)
                );
                INSERT INTO alumnos (expediente, app1, app2, nombres, correo) VALUES \n`;

    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        
        let segundoApellido;
        if (apellidoAleman === "NULL") {
            segundoApellido = "NULL";
        } else {
            // En PostgreSQL usamos comillas simples para strings
            segundoApellido = `UPPER('${apellidoAleman}')`;
        }

        let nombreCompleto = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneSegundoNombre) {
            let nombreArabe = nombresArabes[Math.floor(Math.random() * nombresArabes.length)];
            nombreCompleto += ` ${nombreArabe}`;
        }

        // Construcción de la fila
        salida += `(${matricula + i}, UPPER('${apellidoMex}'), ${segundoApellido}, '${nombreCompleto}', 'a${matricula + i}@unison.mx'),\n`;
    }

    // Quitar la última coma y poner punto y coma
    salida = salida.trim().slice(0, -1) + ";";
    
    document.getElementById("salida").innerHTML = salida;
}


function generarSQLCSV() {
    salida = "matricula, apellido1, apellido2, nombre, correo\n";
    var matricula = 224250000;
    var nombre = "";
    var registros = 0;
    registros = document.getElementById('registros').value;
    var nombreArabe = "";

    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;
        console.log(tieneSegundoNombre);
        let segundoApellido;

        if (apellidoAleman === "NULL") {
            segundoApellido = "NULL";
        } else {
            segundoApellido = `${apellidoAleman}`;
        }

        nombre = "";
        nombreArabe = "";

        if (tieneSegundoNombre == 0) {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        } else {
            nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
            nombreArabe = nombresArabes[Math.floor(Math.random() * nombresArabes.length)];
            nombre += ` ${nombreArabe}`;
        }

        salida += `${matricula + i},${apellidoMex},${segundoApellido},${nombre},a${matricula + i}@unison.mx\n`;
    }
    // salida = salida.slice(0, 0);
    document.getElementById("salida").innerHTML = salida;
}

function generarJSON() {
    salida = "[\n";
    var matricula = 224250000;
    var registros = document.getElementById('registros').value;

    for (let i = 0; i < registros; i++) {
        let apellidoMex = apellidosMexico[Math.floor(Math.random() * apellidosMexico.length)];
        let apellidoAleman = apellidosAlemanes[Math.floor(Math.random() * apellidosAlemanes.length)];
        let tieneSegundoNombre = Math.random() < 0.5;

        let segundoApellido = (apellidoAleman === "NULL") ? "NULL" : apellidoAleman;

        let nombre = nombresMexicanos[Math.floor(Math.random() * nombresMexicanos.length)];
        if (tieneSegundoNombre) {
            let nombreArabe = nombresArabes[Math.floor(Math.random() * nombresArabes.length)];
            nombre += ` ${nombreArabe}`;
        }

        salida += `{\n`;
        salida += `"matricula": ${matricula + i},\n`;
        salida += `"apellido1": "${apellidoMex}",\n`;
        salida += `"apellido2": "${segundoApellido}",\n`;
        salida += `"nombre": "${nombre}",\n`;
        salida += `"correojson": "a${matricula + i}@unison.mx"\n`;

        if (i < registros - 1) {
            salida += `},\n`;
        } else {
            salida += `}\n`;
        }
    }

    salida += `]`;

    document.getElementById("salida").innerText = salida;
}

function guardarArchivo() {
    var var1 = document.createElement("a");
    //salida = salida.replaceAll("", "\r\n");
    var1.setAttribute("href", "data:text/plain;charset=UTF-8," + encodeURIComponent(salida));

    var opcion = document.getElementById("opcion").value;

    switch (opcion) {
        case "1": var1.setAttribute("download", "sistema_escolar.sql"); alert("Generando archivo SQL"); break;
        case "2": var1.setAttribute("download", "sistema_escolar.sql"); alert("Generando archivo Postgres"); break;
        case "3": var1.setAttribute("download", "sistema_escolar.csv"); alert("Generando archivo CSV"); break;
        case "4": var1.setAttribute("download", "sistema_escolar.json"); alert("Generando archivo JSON"); break;
    }

    var1.style.display = "none";
    document.body.appendChild(var1);
    var1.click();
    document.body.removeChild(var1);
}