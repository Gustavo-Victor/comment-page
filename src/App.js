import './App.css';
import logo from './img/people.svg';
import {useState} from 'react';
import {FaTrash} from 'react-icons/fa';

function App() {
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  function handleChange(event){
    setComment(event.target.value);
  }

  function newComment() {
    if(comment != '' && comment != null){
      setAllComments([...allComments, comment]);
      setComment('');
    }
  }

  function deleteComment(index){
    const permission = window.confirm('Tem certeza que deseja apagar este comentário?');
    if(permission){      
      allComments.splice(index, 1);
      setAllComments(allComments);      
      window.alert('Comentário excluído com sucesso!');
    }
  }

  return (
    <div className="App">
      <img src={logo} title='Logo' id='logo' alt='Logo'/>
      <textarea onChange={handleChange} placeholder='Seu comentário aqui...' value={comment} id='comment' name='comment' />
      <button onClick={newComment} id='submit'>Comentar</button>

      {allComments.length > 0 && ( 
      <ul className='comment-list'>
        {allComments.map((comment, index) => (
          <li key={index}>{comment} <span onClick={() => {deleteComment(index)}}><FaTrash/></span></li>
        ))}
      </ul>)}
    </div>
  );
}

export default App;
