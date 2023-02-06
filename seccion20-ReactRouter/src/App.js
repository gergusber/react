import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Home'
import Products from './pages/Products'


const routerDefinitions = createRoutesFromElements(
  <Route>
      <Route path='/' element={<Homepage />} />
      <Route path='/products' element={<Products />} />
  </Route>
)
// const router = createBrowserRouter([
//   { path: '/', element: <Homepage /> },
//   { path: '/products', element: <Products /> }
// ])
const router = createBrowserRouter(routerDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
