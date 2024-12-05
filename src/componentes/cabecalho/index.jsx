import { styled } from "styled-components";
import CampoTexto from "../campotexto";

const HeaderEstilizado = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
    img {
        max-width: 212px;
    }
`;

const Cabecalho = ({ filtro, setFiltro }) => {
    return (
        <HeaderEstilizado>
            <img src="/imagens/logo.png" alt="Logo do site" />
            <CampoTexto setFiltro={setFiltro} />
        </HeaderEstilizado>
    );
};

export default Cabecalho;