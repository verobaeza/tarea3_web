# Tarea 3
## 1. Consideraciones generales
*   El back y el front se inicializan ubicándose en cada carpeta y ejecutando ```yarn dev```
*   No implementé que se puedan ingresar números negativos

## 2. Front
*   Asume que la URL del back es http://localhost:3000/
*   Se usó React para diseñar la calculadora, utilizando como referencia https://www.sitepoint.com/react-tutorial-build-calculator-app/ 
*   El archivo principal es front/src/App.jsx
* Los botones están asociados a las siguientes funciones
    *   "C": resetClickHandler
    *   Dígitos: numClickHandler
    *   Signos (+, -, /, X): signClickHandler
    *   Signo Igual (=): equalsClickHandler
*   Los botones de numeros solo admiten digitos, si se ingresa otro numero no se procesa el evento
*   Si se ingresan dos signos seguidos, por ejemplo 8** o **8, se resetean todos parámetros del estado (signo:"", res:0, num:0)
*   Los botones de signos solo admiten +, -, X, /, si se ingresa otro signo, se resetean los datos (signo:"", res:0, num:0)
*   La tecla "C" borra todos los dígitos en pantalla
*   Se permite ingresar hasta 15 dígitos
*   Las operaciones se visualizan como sigue, usando como ejemplo "90+3=":
    *   Se muestra el "90"
    *   Luego de clickear "+" se sigue mostrando **solo** el 90
    *   Luego de clickear "3" se borra el 90 y aparece **solo** el 3.
    *   Al clickear "=" se envía la request al back y se muestra la respuesta.
## 3. Back
*   Usa el puerto 3000
*   Las rutas a cada operación se encuentran en la carpeta routes