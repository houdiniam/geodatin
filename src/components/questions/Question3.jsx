import React, {useState} from 'react'
import Main from '../templates/Main'

//Var que irá exibir o número de vogais no input
var countFinal = 0;

function Question3(props){

    //Const que exibirá o que foi digitado pelo usuário
    const [text, setText] = useState(' ');
    
    //Função que atualizará o input com o que o user digitar e contar as vogais
    const textChange = (ev) =>{
        setText(ev.target.value);
        var countVowels = ev.target.value.match(/[aeiou]/gi);
        countFinal = (countVowels === null ? 0 : countVowels.length);
    }
    return (
        <Main> 
            <div>
                <h5>
                3 - Construa uma página com um campo de texto e uma label*, semelhante a primeira
                atividade, a partir do que for digitado no campo o label deve indicar o número de vogais.
                </h5>

                <div className="form-group">
                    <label htmlFor="">Campo de Texto</label>
                    <input type="text" value={text} className="form-control" onChange={(ev)=> textChange(ev)}/>
                    <label htmlFor=""> N° de vogais: {countFinal} </label>
                </div>
            </div>
        </Main>
    )
}

export default Question3;