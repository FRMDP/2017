### TP #6

#### Lineamientos
*   Tienen que hacer el PR contra la rama TP6, no contra master.
*   Resuelven la historia de usuario asignada en Taiga. Crean las subtareas que consideren necesarias y trabajan sobre esas tareas. El tablero lo manejan completamente uds, este sprint no toco nada yo.
*   Tienen tiempo hasta las 18Hs del dia martes 16/10.
*	Crean una carpeta con su apellido y dentro de esta el contenido de su trabajo.
*   Vamos a crear un diario el cual consistirá al menos de las siguientes vistas:
    *	Ver todas las noticias
    *	Ver una noticia
    *	Ver noticias por categorias
    *	Agregar noticias
*	Se utilizará localStorage para el almacenamiento. Las claves para guardar serán: news, categories y reporters.
*   Las entidades a utilizar tendrán la siguiente estructura:
```
    	Reporter: {
    		id: number,
    		name: string
    	}

    	Category: {
    		id: number,
    		name: string
    	}

    	New: {
    		id: number,
    		title: string,
    		body: string,
    		category: Category,
    		reporter: Reporter,
    		date: number
    	}
```    
*   Reporters y categories serán los mismos para todos. Deberán cargarlos a localStorage manualmente.
```
    	categories: [
    		{id: 1, name: "sports"},
    		{id: 2, name: "local"},
    		{id: 3, name: "world"},
    		{id: 4, name: "economy"},
    		{id: 5, name: "politics"},
    		{id: 6, name: "entertainment"}
    	]

    	reporters: [
    		{id: 1, name: "John Doe"},
    		{id: 2, name: "Jane Doe"},
    		{id: 3, name: "Chuck Norris"},
    		{id: 4, name: "Barack Obama"}
    	]
```
*   No se accederá desde los componentes a localStorage. Deberán crearse servicios que serán importados en los componentes que los necesiten.
*	Deberá utilizarse todo lo visto en clase.

#### Qué se evalúa?
*   Utilización de las herramientas / tecnologías aprendidas en clase.
*   Prolijidad del código: indentaciones, espacios innecesarios, utilización de convenciones, etc.
*   Nombres de variables y funciones significativas.
*   Utilización de las herramientas (Git, Github, Taiga).
*   ES6, Array#extras, String, Object, Math, Array, etc.
*   Markup HTML innecesario (no crear elementos de más ni elementos que no correspondan a lo que quieren representar).
*   Sentido común.
