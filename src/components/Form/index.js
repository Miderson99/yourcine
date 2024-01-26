import TextField from '../TextField'
import DropdownList from "../DropdownList";
import './form.css'
import StarRating from '../FiveStars/StarRating.js';
import Button from '../Button/index.js';
import { useState } from 'react';

const Form = (props) => {

  const [valueFieldName, setValueFieldName] = useState('')
  const [valueFieldImage, setValueFieldImage] = useState('')
  const [valueDropdowList, setValueDropDownList] = useState('')
  const [valueRating, setValueRating] = useState('')
  const [onSubmitRating, setOnSubmitRating] = useState(false);
  

  const addInformationsMovie = (e) => {
    e.preventDefault();

     let movie = {
       valueFieldName,
       valueFieldImage,
       valueDropdowList,
       valueRating,
     };

     setOnSubmitRating(true);



     props.movieAdded(movie);

    setValueFieldName('')
    setValueFieldImage('')
    setValueDropDownList('')
    setValueRating('')

    
    
  }


    return (
      <section className="form">
        <form onSubmit={addInformationsMovie}>
          <h2>Preencha os dados para adicionar o seu filme</h2>
          <>
            <TextField
              value={valueFieldName}
              required={true}
              label="Nome"
              alteredField={(valueReceivedFromField) =>
                setValueFieldName(valueReceivedFromField)
              }
              tip="Insira o Nome do filme"
            />
            <TextField
              value={valueFieldImage}
              required={true}
              label="Image"
              alteredField={(valueReceivedFromField) =>
                setValueFieldImage(valueReceivedFromField)
              }
              tip="Insira um link de imagem"
            />
            <DropdownList
              value={valueDropdowList}
              selectedValue={(valueReceivedFromDrop) =>
                setValueDropDownList(valueReceivedFromDrop)
              }
              category={props.category}
              label={"Selecione a categoria do filme:"}
              required={true}
            />
            <StarRating
              alteredRadio={(valueFromRating) =>
                setValueRating(valueFromRating)
              }
              formSubmitted={onSubmitRating}
              formSubmittedChanged={(item) => setOnSubmitRating(item)}
            />
            <Button />
          </>
        </form>
      </section>
    );
}

export default Form