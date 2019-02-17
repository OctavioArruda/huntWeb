import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {    // Estado é sempre um objeto!!!
        // É onde se armazena as variáveis 
        products: [],
        productInfo: {},
        page: 1, // Página inicial
    }   

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data; // Criando duas variaveis: docs e productInfo

        this.setState({ products: docs, productInfo, page });
    };

    prevPage = () => {
        const { page, productInfo } = this.state;

        if (page === 1) return; // Não tem como voltar já estando na primeira página

        const pageNumber = page - 1;

        this.loadProducts(pageNumber);
    }

    nextPage = () => {
        const { page, productInfo } = this.state;

        if (page === productInfo.pages) return; // Se estiver na última página não faz nada

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    render() {
        // Processo de desestruturação 
        const { products, page, productInfo } = this.state;

        return (
        <div className="product-list">
            {products.map(product => (
                <article key={product._id}> 
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Proximo</button>
            </div>
        </div> 
        )
    }
}
