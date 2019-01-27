import React, { Component } from 'react';
import GalleryImage  from '../components/GalleryImage';
import GalleryModal from '../components/GalleryModal';

import    './Gallery.css';


 let imgUrls = [
    'https://source.unsplash.com/k3IogSsONd4/500x300',
    'https://source.unsplash.com/gThfDnqgfMw/500x300',
    'https://source.unsplash.com/_1x_x8Vtg2w/500x300',
    'https://source.unsplash.com/TFP_s4_jRuE/500x300',
    'https://source.unsplash.com/pElM4yerF5Q/500x300',
    'https://source.unsplash.com/sFsy8CKyQ5c/500x300',
    'https://source.unsplash.com/0WGucY1VHI0/500x300',
    'https://source.unsplash.com/1ciHU-qPifY/500x300',
    'https://source.unsplash.com/JZCJotPa96c/500x300',
    'https://source.unsplash.com/8X19catOuNI/500x300',
    'https://source.unsplash.com/_GDff35-Pa8/500x300',
    'https://source.unsplash.com/XYok1nBGvhk/500x300'
 ]



class Gallery extends Component{
    constructor(props) {
      super(props);
      
      this.state = {
        showModal: false,
        url: ''
      }
      
      this.openModal = this.openModal.bind(this);
      
      this.closeModal = this.closeModal.bind(this);
    }
    
    render() {
      return(
        <div refs='gallery-container' className='container-fluid gallery-container'>
          <div className='row'>
            {
              imgUrls.map((url, index) => {
                 return ( 
                 <div key={index} className='col-sm-6 col-md-3 col-xl-2'>
                    <div className='gallery-card'>
                      <GalleryImage  className='gallery-thumbnail' src={url} alt={'Image number ' + (index + 1)} />
                      
                      <span className='card-icon-open fa fa-expand-arrows-alt' value={url} onClick={(e) => this.openModal(url, e)}></span>
                    </div>
                  </div>
                 )
               })
             }
          </div>
          
          <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} /> 
        </div>
      )
    }
    
    // Function for opening modal dialog
    openModal(url, e) {
       this.setState({
         showModal: true,
         url: url
       })
     };
  
    // Function for closing modal dialog
    closeModal() {
      this.setState({
        showModal: false,
        url: ''
      })
    }
  }
 
 
export default Gallery;
