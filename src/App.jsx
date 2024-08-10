import { RouterProvider } from "react-router-dom";
import QRgen from "./components/QRgen";
import Qrreader from "./components/qrreader/QrReader";
import { router } from "./components/routes/router";

function App() {
   return <RouterProvider router={router} />;
}

export default App;
