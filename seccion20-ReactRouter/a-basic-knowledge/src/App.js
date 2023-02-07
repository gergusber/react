import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Homepage from './pages/Home'
import Products from './pages/Products'
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetail from './pages/ProductDetail';


const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: '', element: <Homepage /> },
      { path: 'products', element: <Products /> },
      { path: 'products/:productId', element: <ProductDetail /> }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
