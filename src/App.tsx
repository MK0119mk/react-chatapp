import { useState } from 'react';
import './App.css'
import { useForm } from 'react-hook-form';

function App() {
  const {
     register,
     handleSubmit, 
     formState:  { errors },
   } = useForm();

   const onSubmit = (data: any) => {
    console.log(data);
   };

  return (
    <div className='form-container'>
     <h1>ログインフォーム</h1>
     <form onSubmit={handleSubmit(onsubmit)}>
      <label htmlFor='名前'>名前</label>
      <input id='name' type="text" {...register('name', { required: true })} />
      <label htmlFor='メールアドレス'>メールアドレス</label>
      <input id='email' type="email" {...register('email')} />
      <label htmlFor='パスワード'>パスワード</label>
      <input id='password' type="password" {...register('password')} />

      <button type='submit'>送信</button>
    </form>
    </div>
    );
}

export default App;
