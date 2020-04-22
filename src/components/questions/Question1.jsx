import React, {useState} from 'react'
import Main from '../templates/Main'

//Var que irá exibir o número de letras no input
var count = 0;

function Question1(props){

    //Const que exibirá o que foi digitado pelo usuário
    const [text, setText] = useState('');
    
    //Função que atualizará o input com o que o user digitar e contar os caracters
    const textChange = (ev) =>{
        let textW = ev.target.value.replace(/ /g, "");
        let textCount = textW.length;
        setText(ev.target.value);
        count = textCount;
    }
    return (
        <Main> 
            <div>
                <h5>
                    1 - Construa uma página que possua um campo de texto e um label, a partir das palavras
                    digitadas no campo o label deve indicar o número de letras que foram digitadas,
                    desconsidere os espaços.
                </h5>

                <div className="form-group">
                    <label htmlFor="">Campo de Texto</label>
                    <input type="text" value={text} className="form-control" onChange={(ev)=> textChange(ev)}/>
                    <label htmlFor=""> N° de letras: {count} </label>
                </div>
            </div>
        </Main>
    )
}

export default Question1;