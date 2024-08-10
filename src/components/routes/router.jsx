import { createBrowserRouter } from "react-router-dom";
import Qrreader from "../qrreader/QrReader";
import QRgen from "../QRgen";

export const router = createBrowserRouter([
   {
      path: "/scan",
      element: <Qrreader />,
   },
   {
      path: "/",
      element: <QRgen />,
   },
]);
