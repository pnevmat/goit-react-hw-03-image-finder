import React, { Component } from 'react';
import ApiService from './components/Utils/ApiService';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './App.css';

const apiService = new ApiService();

class ImageFinder extends Component {
    state = {
        images: [],
        query: '',
        modalImage: '',
        modalOpen: false,
    };

    componentDidMount() {
        apiService.resetPage();
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            apiService.query = this.state.query;
            apiService.fetchImages().then(images => {
                this.setState({images});
            });
        };
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    onSubmit = (value) => {
        this.setState({query: value});
    };

    onLoadMore = () => {
        apiService.setPage();
        apiService.fetchImages().then(images => {
            this.setState(prevState => {
                return {
                    images: [...prevState.images, ...images]
                };
            });
        });
    };

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.modalToggle();
        };
    };

    handleBackdropClick = e => {
        if (e.currentTarget === e.target) {
            this.modalToggle();
        };
    };

    OpenModalHandler = e => {
        const imageId = Number(e.target.id);
        const image = this.state.images.find(image => Number(image.id) === imageId);
        this.setState({modalImage: image});
        this.modalToggle();
    };

    modalToggle = () => {
        this.setState(prevState => {
            return {
                modalOpen: !prevState.modalOpen
            };
        });
    };

    render() {
        return (
            <section className="App">
                <SearchBar onSubmit={this.onSubmit} />
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs
                />
                <ImageGallery 
                    images={this.state.images}
                    onToggleModal={this.OpenModalHandler}
                />
                {this.state.images.length > 0 &&
                    <Button 
                        onLoadMore={this.onLoadMore}
                    />
                }
                {this.state.modalOpen &&
                    <Modal onClick={this.handleBackdropClick}>
                        <img src={this.state.modalImage.largeImageURL} alt="" />
                    </Modal>
                }
            </section>
        );
    };
};

export default ImageFinder;