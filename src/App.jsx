import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/ Header';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
    </Route>
  )
)

function App({ routes }) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}


export default App;