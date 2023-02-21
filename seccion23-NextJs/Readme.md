

Los paths se arman dinamicamente con las carpetas,
Cada carpeta debe tener un index file que va a ser la nested route y las rutas dinamicas se definen como [parameter].js :
http://localhost:3000/news/something-important
en la carpeta news tenemosun index file que va a corresponder al http://localhost:3000/news/
y un http://localhost:3000/news/something-important que va a corresponder al archivo something-important

las rutas dinamicas se generan con el nombre del parametro a extraer  de la siguiente manera:
[parameter].js  el archivo se genera (dentro del path especifico.)

se utiliza un hook para obtener el valor del parametro que es el useRouter de next/router.


 useRouter:
    const router = useRouter(); // llamamos al hook
  const { query } = router;  // extraemos query params del router
  return <h1>The DetailPage {query.newsId}</h1>  // obtenemos el nombre del parametro definido en la ruta(http://localhost:3000/news/something-important)

  Link component from next/link uses load the component and change the url but its not create a refresh of th page and we want a pwa.

  