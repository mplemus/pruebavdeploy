import fotos from "./galeria";
import preguntas from "./preguntas";
import header from "./header";
import footer from "./footer";
import cards from "./cards";

const getPageContext = (page) =>{

    return {
        ...preguntas,
        ...fotos,
        ...header,
        ...footer,
        ...cards
    };
}

export default getPageContext;