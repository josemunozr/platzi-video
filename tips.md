# Curso ReactJs

### React
> Liberia de javascript para construir interfaces de usuarios.

### Particularidades
	- Declarativo. Es muy sensillo escribir interfaces y poder leerlas
	- Basado en componentes.
	- Aprende de una vez y escribe donde quieres.

### Usando ReactDom y jsx
	-	React. Nos sirve para crear nuestros componentes
	- ReactDom. Nos sirve para renderizar nuestros componentes en el navegador

```js
ReactDom.render(que voy a renderizar, donde lo haré)
```
 -	Un componente puede ser un conjunto de elementos de React

### Creando componentes en reactJs

	Modos de componentes
	- Funcional
	- Puro
	- Normal o de estado (el mas clasico)

### Estilos en React

	Existen dos formas:
	-	Con una hoja de estilos
	- Con estilos en linea (style="")

### Propiedades en React

	-	En react(jsx) existen propiedades no atributos(html)
	- las clases vienen provistas de 'this', metodo de cualquier clase

### validando tipado en Propiedades
 con la libreria "prop-types" podemos validar que tipo de propiedad se debe pasar en un componente:
  - string
	- array
	- func
	- object
	- bool
	- number
	- oneOf(['',''])
Las propiedades pueden ser requeridas con <type>.isRequired


### Enlazando eventos del DOM

 - Para lanzar un evento se debe crear method en contexto de la clase.
 - si quiera utilizar un elemento del contexto de la clase, por ejemplo. this.props.* se debe bindear this a al metodo dentro del contructor de la clase .bind(this)
 - Para evitar bindear cada evento se puede utilizar arrow function para declarar el evento en la clase, disponible en "state-2". Las arrow function siempre heredan el contexto de su padre, es por eso que no se necesita bindear.

### Estado de los componentes

	- Las propiedades de un componente no se pueden modificar ya que son inmutables
	- para poder modificar una propiedad primero se deben declaran las propiedades a modificar en el state del componente

		(ES6)
		constructor() {
			this.state = {
				prop: value
			}
		}

		(ES7)
		state = {
			prop: value
		}

	- para modificar debe ser desde el metodo setState()
		this.setState({
			prop: "newValue"
			})

### Cliclo de vida de los componentes
	Montado:
		El momento en que el componente entra en escena.

		 - Constructor: método llamado antes de que el componente sea montado (componente aun no se ve).
		 	* Podemos iniciar el estado (ES6)
			* Enlazar eventos (bind). (ES6)
			* Es el primer metodo que se llama al instanciar un componente.

		 - ComponentWillMount: método llamado inmediatamente antes de que el componente se vaya a montar (componente aun no se ve).
		 	* Podemos hacer un setState()
	   	* No hacer llamados a un API o suscripción a eventos.

		 - Render: método que contiene todos los elementos a renderizar (estructura del componente).
			* Contiene JSX en el return.
			* Puedes calcular propiedades nCompleto = name + lastName.

	   - ComponentDidMount: Método llamado luego de montarse el componente (el componente ya esta en la pantalla).
			* Solo se lanza una vez.
			* Enlazar (bind) de eventos.
			* Es el primer método que se llama al instanciar un componente.
			* Aqui podemos utilizar APIs (Navegador o Datos Externos).

	Actualización.
		Una vez el componente ya se visualiza

	 	- ComponentWillReceiveProps: método que indica que componente recivirá nuevas propiedades. Sirve para actualizar el estado con base a las nuevas propiedades.

	 	- ShouldComponentUpdate: método que condiciona si el componente se debe volver a renderizar, es utilizado para optimizar el rendimiento.
			* en este punto se debe validar si una propiedad a actulizar tendra el mismo valor o no entregando true o false

	  - ComponentWillUpdate: método llamado antes de re-renderizar un componente, es utilizado para optimizar el rendimiento.
		 	* se activa si ShouldComponentUpdate lanza true o si ShouldComponentUpdate no esta declarado

	  - Render: método que realiza el re-render.

	  - ComponentDidUpdate: método llamado luego del re-render.

	Desmontado

		- ComponentWillUnmount: método llamado antes de que el componente sea retirado de la aplicación.

	Manejo de Errores

		- ComponentDidCatch: método llamado cuando ocurre un error al renderizar el componente, el manejo de errores solamente ocurre en scomponentes hijos.

### Componentes puros y funcionales
	- Los componentes puros "PureComponent" tienen como caracteristicas que defininen por si solos el lifeCycle ShouldComponentUpdate.
	- Se suele utilizar con componentes que se utilizan muchas veces y que realizar re-render muchas veces
	- El componente funcional se caracteriza por ser declarado por una funcion y no por una clase. Los componentes funcionales no tiene lifeCycle.
	- Se recomienda que los eventos de los componentes funcionales sean lanzados por un componente que contiene estados.

### Smart & Dumb Components
	- Component Presentational => Cómo se ve. StateLess
	- Containers => Qué hace. StateFull

 Esta separación es importante por:
	- Seperación de responsabilidades
	- Mejora la capacidad de reutilizar componetes

### Portals
	- Nos sirve para renderizar componentes fuera del contenedor principal
	- Su uso comun son los modales 
	- se debe crear con createPortal proveniente de 'react-dom'

### Manejo de errores
	- Con el metodo componentDidCatch se logra capturar un error provocado en un componente.
	- Recibe los parametros "error" e "info"

### Referencia a Eventos de HTML y Formularios
	- para hacer referencia a un elemento de un formulario se debe hacer a traves de "ref". 
	- en React no se reconoce value para establecer un valor por defecto, para este caso se debe útilizar defaultValue
	- solo si el valor de input es dinamico (proviene desde un contenedor) se debe útilizar value={props.value}