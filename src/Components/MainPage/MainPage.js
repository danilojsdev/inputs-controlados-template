import React, { useState } from 'react'
import {MainContainer, Form, Input} from './styles'

function MainPage() {

  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmitForm = () => {
    const novoForm = {
      nome: name,
      idade: age,
      email: email
    }
    console.log(novoForm)

    setName('')
    setAge('')
    setEmail('')
  }

  /*
  1. ONCHANGE DO INPUT => ACOMPANHAR A MUDANÇA
  2. O ESTADO => GUARDAR O VALOR FINAL
  3. VALUE DO INPUT => 
  */

  const handleInputName = (event) => {
    // console.log(event.target.value)
    setName(event.target.value)
    // console.log(name)
    // setName('')
  }
  
  const handleInputAge = (event) => {
    // console.log(event.target.value)
    setAge(event.target.value)
    // console.log(age)
    // setAge('')
  }
  
  const handleInputEmail = (event) => {
    // console.log(event.target.value)
    setEmail(event.target.value)
    // console.log(email)
    // setEmail('')
  }

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input onChange={handleInputName} value={name} />
        </label>
        <label>
          Idade:
          <Input onChange={handleInputAge} value={age} />
        </label>
        <label>
          E-mail:
          <Input onChange={handleInputEmail} value={email} />
        </label>
      <button onClick={handleSubmitForm} >Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage