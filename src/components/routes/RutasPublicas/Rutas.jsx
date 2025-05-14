import { Routes, Route } from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import { Analitica } from "../../pages/Analitica/Analitica";
import { Api } from "../../pages/Api/Api";

import { Menu } from "../../common/Menu/Menu";

export function Rutas(){
    return(

        <>
            <Menu></Menu>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/analitica" element={<Analitica/>}></Route>
                <Route path="/api" element={<Api/>}></Route>
            </Routes>
        </>
    )
}