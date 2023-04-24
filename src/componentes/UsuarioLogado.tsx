import React from "react";
import { Text } from "react-native";
import Padrao from "../estilo/Padrao";

export default (props: any) => {
    const usuario = props.usuario || {}

    return(
        <>
           {/*<Text style={Padrao.txtG}>
             Usuário Logado
           </Text> 
           <Text style={Padrao.txtG}>
             {usuario.nome} - {usuario.email}
    </Text>*/}
        </>
    )
}