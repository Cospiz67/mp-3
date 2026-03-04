import { RouterProvider } from 'react-router';
import {router} from "./components/Root";

export default function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
