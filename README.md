# React App

## Descripción

App es una aplicación web desarrollada en React que permite gestionar,en principio, las consultas del hotel, consultando una API desarrollada con Django. La aplicación ofrece funcionalidades para listar, agregar, modificar y eliminar consultas, aplicando filtros y manteniendo el estado en la interfaz de usuario sincronizado con el almacenamiento local (localStorage).


## Funcionalidades

Listar Consultas: Muestra una lista de consultas obtenidas de la API de Django.

Agregar Consulta: Permite registrar una nueva consulta a través de un formulario.

Modificar Consulta: Permite modificar una consulta existente.

Eliminar Consulta: Permite eliminar una consulta de la lista.

Aplicar Filtros: Filtra las consultas por nombre y apellido utilizando un contexto global.

Sincronización con localStorage: La lista de consultas procesadas se guarda en localStorage para persistencia entre sesiones.

Navegación con React Router: Usa react-router-dom para manejar la navegación entre las diferentes vistas (listado de consultas, formulario de consulta).


## Conceptos

Context API: Utilizada para manejar el estado global de los filtros y la lista de consultas procesadas, evitando la necesidad de pasar propiedades a través de múltiples niveles de componentes.
Implementación de Context API para la gestión del estado global y evitar la prop drilling.

Hooks: Se utilizan hooks personalizados (useConsultas, useFiltros, useLista) para manejar la lógica de negocios y la interacción con la API.

Filtros: Los filtros permiten a los usuarios buscar consultas específicas por nombre y apellido. Los filtros se aplican en tiempo real usando el estado global del contexto, mientras el usuario escribe en los campos de búsqueda.


Persistencia en localStorage: La lista de consultas procesadas se guarda en localStorage para asegurar que los datos se mantengan entre sesiones de usuario.

React Router: Utiliza BrowserRouter y Routes para gestionar la navegación entre diferentes vistas de la aplicación (listar consultas, formulario de nueva consulta, etc.).

Fetch API: Se utiliza para realizar solicitudes HTTP a la API de Django, manejando operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para las consultas.


## Instalación y Ejecución

1 Clona el repositorio:

git clone https://github.com/germancaradec/Hotel-Django.git

2 Navega al directorio del proyecto:

cd 03_CRUD_consultas

3 Instala las dependencias:

npm install

4 Ejecuta la aplicación:

npm start

5 Abre tu navegador y visita http://localhost:3000.
