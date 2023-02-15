
Hooks básicos
useState:
const [state, setState] = useState(initialState);
Devuelve un valor con estado(state) y una función para actualizarlo setState() 

Durante el renderizado inicial, el estado devuelto (state) es el mismo que el valor pasado como primer argumento (initialState).

La función setState se usa para actualizar el estado. Acepta un nuevo valor de estado y sitúa en la cola una nueva renderización del componente.

useEffect
useContext



react-router-dom:

useSearchParams:
  usamos este hook para obtener desde los query params los props que vamos a utilizar 
  para obtener el value de una prop,  utilizamos el hook :
    const [searchParams, setSearchParams] = useSearchParams()
  setSearchParams=> Funcion para setear una property en el query param
  searchParams=> prop para obtener el parametro de la siguiente forma:  searchParams.get('mode') 
    http://localhost:3000/auth?mode=signup de aca vendria a ser  searchParams.get('mode')  = signup