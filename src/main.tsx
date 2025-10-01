import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.sass'
import {Provider} from "@/components/ui/provider.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from "@/pages/homepage";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider>
        <BrowserRouter>
          <Routes>
            <Route path={"*"} element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
  </StrictMode>,
)
