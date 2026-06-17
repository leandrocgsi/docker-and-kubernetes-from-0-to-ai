import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css';

import logoImage from '../../assets/logo.svg';

export default function NewBook() {
const [id, setId] = useState(null);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [launchDate, setLaunchDate] = useState('');
    const [price, setPrice] = useState('');

    const { bookId } = useParams();

    const accessToken = localStorage.getItem('accessToken');
    
    const authorization = {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    };

    const history = useHistory();

    
    useEffect(() => {
        if(bookId === '0') return
        else loadBook();      
    });

    async function loadBook() {
        try {
            const response = await api.get(`book/${bookId}`, authorization);

            let adjustedDate = response.data.launchDate.split("T", 10)[0]

            setId(response.data.id);
            setTitle(response.data.title);
            setAuthor(response.data.author);
            setPrice(response.data.price);
            setLaunchDate(adjustedDate);
        } catch (err) {
            alert('Error recovering Book! Try Again.');
            history.push('/books');
        }
    }

    async function saveOrUpdateBook(e) {
        e.preventDefault();

        const data = {
            title,
            author,
            launchDate,
            price,
        }; 

        try {
            if(bookId === '0') {
                await api.post('book', data, authorization);
            } else {
                data.id = id; 
                await api.put('book', data, authorization);
            }
            history.push('/books')
        } catch (err) {
            alert('Error while recording Book! Try Again.')
        }
    }

    return (
        <div className="new-book-container">
            <div className="content">
                <section className="form">
                    <img src={logoImage} alt="Erudio"/>
                    <h1>{bookId === '0' ? 'Add New' : 'Update'} Book</h1>
                    <p>Enter the book information and click on {bookId === '0' ? "'Add'" : "'Update'!  ####"} {id}</p>
                    <Link className="back-link" to="/books">
                        <FiArrowLeft size={16} color="#251FC5" />
                        Back to Books
                    </Link>
                </section>

                <form onSubmit={saveOrUpdateBook}>
                    <input
                        placeholder="Title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <input
                        placeholder="Author"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input
                        type="date"
                        value={launchDate}
                        onChange={e => setLaunchDate(e.target.value)}
                    />

                    <input
                        placeholder="Price"
                        value={price}
                        onChange={e => setPrice(e.target.value.replace(",", "."))}
                    />

                    <button className="button" type="submit">{bookId === '0' ? 'Add' : 'Update'}</button>

                </form>
            </div>
        </div>
    );
}