import React, {useState} from 'react'
import Main from '../templates/Main'

function Question4(props){
    
    //Const que exibirá o que foi digitado pelo usuário
    const [text, setText] = useState('');
    //Const que salvará as informações das palavras e q quantidade de sua repetição
    const [qtt, setQtt] = useState([]);
    //HashMap que facilitará o manuseio das informações
    let myMap = new Map()
    
    
    //Função que atualizará o input com o que o user digitar e gerenciar as palavras digitadas
    const textChange = (ev) =>{
        setText(ev.target.value);
        const splitString = ev.target.value.split(" ");
        var counts = {};
        for (var i = 0; i < splitString.length; i++) {
            var num = splitString[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        let stgArray = Object.entries(counts);
        for(let aux of stgArray){
            myMap.set(aux[0], aux[1]);
        }
        var data = Array.from(myMap);
        setQtt(data);
    }

    return (
        <Main> 
            <div>
                <h6>
                    4 - Construa uma página com um campo de texto e elementos html de sua escolha, esses
                    elementos irão representar as palavras digitadas, de acordo com a quantidade de palavras
                    na frase o elemento que a representa deve crescer. Ex: ninguém solta a mão de ninguém.
                    A partir dessa frase, o maior elemento deve ser aquele que representa a palavra ninguém e
                    assim sucessivamente. A imagem abaixo exemplifica o resultado esperado. A estilização
                    deve ser própria.
                </h6>

                <div className="form-group">
                    <label htmlFor="">Campo de Texto</label>
                    <input type="text" value={text} className="form-control" onChange={(ev)=> textChange(ev)}/>
                    {
                        qtt.map((option, key) =>{
                            return(
                                <div 
                                    className={`m-1 col-md-${option[1] === 1 ? 2 : option[1]+1 }`} 
                                    key={key}  
                                    style={{backgroundColor: 'pink', borderRadius: '10px'}}
                                >
                                    <label htmlFor="">{option[0]}</label>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Main>
    )
}

export default Question4;