import react from "react"
//import { cabecalho } from ""
import { Cabecalho } from "./style"

export function Header(){
    
    return(

        <Cabecalho>
          <h1>LabeTube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </Cabecalho>
        )
}