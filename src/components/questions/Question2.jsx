import React, {useState} from 'react';
import Main from '../templates/Main';
import imagem from '../../assets/img/1Logo_Gedatin.png';
import Row from 'react-bootstrap/Row';

function Question2(props){
    //Const que determinará o tamanho da imagem
    const [size, setSize] = useState(200);
    
    //Função que irá alterar o tamanho da imagem
    const imageSize = (tam) =>{
        setSize(tam);
    }
    return (
        <Main> 
            <div>
                <h5>
                2 - Construa uma página com um elemento html da sua escolha e dois botões, um deles
                deve aumentar o tamanho do elemento quando clicado e o outro deve diminuir nas mesmas
                condições.
                </h5>

                <div className="form-group ml-3">
                    <Row>
                        <label htmlFor="">Imagem que será manipulada:</label>
                    </Row>
                    <Row>
                        <img src={imagem} width={size} alt=""/>
                    </Row>
                </div>
                    <button 
                        type="button" 
                        onClick={()=> imageSize(300)} 
                        className="btn btn-primary btn-sm mr-2" 
                        disabled={size===300? true:false}
                    >
                        Aumentar
                    </button>
                    <button 
                        type="button" 
                        onClick={()=> imageSize(100)} 
                        className="btn btn-primary btn-sm ml-2 mr-2" 
                        disabled={size===100? true:false}
                    >
                        Diminuir
                    </button>
                    <button 
                        type="button" 
                        onClick={()=> imageSize(200)} 
                        className="btn btn-primary btn-sm ml-2" 
                        disabled={size===200? true:false}
                    >
                        Original
                    </button>
            </div>
        </Main>
    )
}

export default Question2;