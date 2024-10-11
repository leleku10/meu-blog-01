import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreateArticlePage = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    const navigate = useNavigate();
    
    const createArticle = async () => {
        //limpa mensagens anteriores
        setError('');
        setSuccess('');
        
        //segue a validação dos campos
        if (!name || !title || !content) {
            setError('Todos os campos devem ser preenchidos!!')
            return;
        };
        
        //POST dos dados
        try {
            const response = await axios.post('http://localhost:8000/api/create-article', {
                name,
                title,
                content,

            });
            if (response.status === 201) {
                alert('Sucesso!!!')
                navigate('/articlelist')
            } else {
                setError("Falha na criação do artigo!")
            }
        }
        catch (error) {
            setError("Falha na criação do artigo!")
        }

    }

    return (
        <>
            <div>
                <h1>Criar novo artigo</h1>
                {error && <p>{error}</p>}
                {success && <p>{success}</p>}
                <input
                    type="text"
                    placeholder="Nome do autor"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Título do artigo"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input
                    type="textarea"
                    placeholder="Conteúdo do artigo"
                    value={content}
                    onChange={e => setContent(e.target.value)}
                />
                <button onClick= {createArticle} >Publicar artigo</button>
            </div>
        </>
    )
};

export default CreateArticlePage;