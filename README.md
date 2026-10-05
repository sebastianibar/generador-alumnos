# Generador de Datos de Alumnos para Base de Datos (Dummy Data)

Herramienta web que genera datos de prueba de alumnos para llenar bases de datos escolares sin usar información real. Se elige cuántos registros se quieren (hasta 50,000) y el formato de salida: SQL para MySQL, SQL para PostgreSQL, CSV o JSON. El resultado se muestra en pantalla y se puede descargar como archivo.

> Todos los datos son ficticios: se forman combinando nombres y apellidos de listas, por lo que cualquier parecido con personas reales es coincidencia.

## Tecnologías

- **Lenguajes:** HTML, CSS y JavaScript puro (sin frameworks ni librerías externas)
- **Base de datos:** ninguna. La herramienta solo *genera* scripts y archivos para usarlos en:
  - MySQL 8.0.16 o superior (por las restricciones `CHECK`)
  - PostgreSQL
- **Servidor:** no necesita. Corre directamente en el navegador.

## Estructura

```
generador-datos-alumnos/
├── imagenes/              # Capturas de pantalla usadas en este README
│   ├── interfaz.png
│   ├── formatos.png
│   └── resultado.png
├── js/
│   └── function.js        # Listas de nombres/apellidos y funciones de generación
├── generador.html         # Interfaz de la herramienta (incluye sus estilos)
├── archivo.sql            # Tabla de referencia y pruebas de integridad
└── README.md
```

## Cómo ejecutarlo

No hay nada que instalar:

1. Descarga o clona este repositorio.
2. Abre `generador.html` con doble clic (o arrástralo a tu navegador).
3. Elige el número de registros y el tipo de archivo.
4. Presiona **Generar** y después **Guardar** para descargarlo.

> `generador.html` carga el script desde `./js/function.js`, así que respeta esa carpeta; si mueves el archivo, la herramienta no funcionará.

Para usar el resultado en una base de datos:

- **MySQL:** ejecuta el archivo `.sql` descargado (por ejemplo, `mysql -u root -p < sistema_escolar.sql`).
- **PostgreSQL:** ejecútalo con `psql -U postgres -f sistema_escolar.sql`. El script usa el comando `\c`, que solo funciona en `psql`.

## Funciones principales

- **Número de registros:** de 1 a 50,000. Los botones *Registros 1* y *Registros 50000* llenan el campo rápidamente.
- **Cuatro formatos de salida:**
  - **SQL MySQL/MariaDB:** crea la base `sistema_escolar`, la tabla `alumnos` con sus restricciones e inserta los registros.
  - **PostgreSQL:** crea la base y la tabla, e inserta los registros.
  - **CSV:** archivo de texto con encabezados, listo para importar.
  - **JSON:** lista de objetos con los datos de cada alumno.
- **Datos generados por alumno:**
  - **Matrícula (expediente):** números consecutivos de 9 dígitos que comienzan en `224250000`.
  - **Primer apellido:** mexicano, elegido al azar de una lista de 100.
  - **Segundo apellido:** alemán, elegido al azar de una lista de 100; en algunos casos queda vacío (`NULL`).
  - **Nombre:** un nombre mexicano y, en la mitad de los casos, un segundo nombre árabe.
  - **Correo institucional:** con el formato `a<expediente>@unison.mx`.
- **Vista previa** del resultado en pantalla.
- **Descarga** del archivo generado directamente desde el navegador (`sistema_escolar.sql`, `.csv` o `.json`).

## Restricciones de la tabla (formato SQL)

La tabla `alumnos` que crea el script de MySQL incluye:

| Restricción | Qué asegura |
|---|---|
| `UNIQUE` en `expediente` y `correo` | No hay expedientes ni correos repetidos |
| `CHECK` en `expediente` | Debe tener 9 dígitos (entre 100000000 y 999999999) |
| `CHECK` en `app1` y `nombres` | No pueden estar vacíos ni ser solo espacios |
| `CHECK` en `app2` | Puede ser `NULL`, pero si existe no puede estar vacío |
| `CHECK` en `correo` | Debe ser exactamente `a` + expediente + `@unison.mx` |

La versión de PostgreSQL crea la tabla con las llaves únicas; las restricciones `CHECK` completas están en `archivo.sql`.

## Ejemplos de salida

**CSV**
```
matricula, apellido1, apellido2, nombre, correo
224250000,Sandoval,Lang,Guillermo Wafa,a224250000@unison.mx
224250001,Gutiérrez,Vogt,Valentín,a224250001@unison.mx
```

**SQL (fragmento de los `INSERT`)**
```sql
INSERT INTO alumnos VALUES
(224250000,UPPER('Ibarra'), UPPER('Werner'), 'Alexis Yasser','a224250000@unison.mx'),
(224250001,UPPER('Serrano'), UPPER('Böhm'), 'Saúl','a224250001@unison.mx');
```

## Capturas

### Pantalla principal
![Pantalla principal](imagenes/interfaz.png)

### Selección del tipo de archivo
![Formatos disponibles](imagenes/formatos.png)

### Resultado generado (SQL con 50,000 registros)
![Resultado generado](imagenes/resultado.png)

## Desarrollado por

- Ibarra Padilla Sebastián

Proyecto realizado para la materia Base de Datos II.
