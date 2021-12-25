import logo from './img/people.svg';
import {useState} from 'react';
import {Button, MainDiv} from './components/styles';
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
      const newArray = allComments.filter((c) => c != allComments[index]);
      setAllComments(newArray);
    }
  }

  return (
    <MainDiv>
      <img src={logo} title='Logo' id='logo' alt='Logo'/>
      <textarea onChange={handleChange} placeholder='Seu comentário aqui...' value={comment} id='comment' name='comment'/>
      <Button isOn={comment} onClick={newComment} id='submit'>Comentar</Button>

      {allComments.length > 0 && ( 
      <ul className='comment-list'>
        {allComments.map((comment, index) => (
          <li key={index}>{comment} <span onClick={() => {deleteComment(index)}}><FaTrash /></span></li>
        ))}
      </ul>)}
    </MainDiv>
  );
}

export default App;
