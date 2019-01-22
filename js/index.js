//cache gallery container
const galleryContainer =document.querySelector('.react-gallery');

//Create new array with URLS for images

let imgUrls = [
    "https://unsplash.com/photos/k3IogSsONd4/800x600",
    "https://unsplash.com/photos/gThfDnqgfMw/800x600",
    "https://unsplash.com/photos/_1x_x8Vtg2w/800x600",
    "https://unsplash.com/photos/TFP_s4_jRuE/800x600",
    "https://unsplash.com/photos/pElM4yerF5Q/800x600",
    "https://unsplash.com/photos/sFsy8CKyQ5c/800x600",
    "https://unsplash.com/photos/0WGucY1VHI0/800x600",
    "https://unsplash.com/photos/1ciHU-qPifY/800x600",
    "https://unsplash.com/photos/JZCJotPa96c/800x600",
    "https://unsplash.com/photos/8X19catOuNI/800x600",
    "https://unsplash.com/photos/_GDff35-Pa8/800x600",
    "https://unsplash.com/photos/XYok1nBGvhk/800x600"

];

//Component for gallery image
class GalleryImage extends React.Component {
    
    render() { 
        return ( 
           
                <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
           
        )
    }
}
 
//Component for gallery modal
class GalleryModal extends Component {
    
    render()  { 
        if (this.props.isOpen === flase) {
            return null;
        }
        return (  
            <div isOpen={this.props.isOpen} className="modal-overlay" onClick={this.props.onClick} name={this.props.name}>
              <div className="modal-body">
              <a className="modal-close" href="#" onClick={this.props.onClick}><span className="fa fa-times"></span></a>
                <img src={this.props.src} />

              </div>
            </div>
        );
    }
}
 

//Component for Gallery
class Gallery extends Component {
    constructor(props){
        super(props);

        this.state = {
            showModal: false,
            url: ''
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
   
    render() { 
        return ( 
            <div refs="gallery-container" className="container-fluid gallery-container">
                <div className="row">
                  {
                      imgUrls.map((url, index) => {
                          return <div className="col-sm-6 col-md3 col-xl-2">
                            <div className="gallery-card">
                                <GalleryImage className="gallery-thumbnail" src={url} alt={"Image number " + (index +1)} />
                                <span className="card-icon-open fa fa-expand" value={url}  onClick={(e)=> this.openModal(url, e)}></span>
                            </div>
                </div>

                      })
            
                  }

            </div>

          <GalleryModal isOpen={this.state.showModal} onClick={this.closeModal} src={this.state.url} />
          </div>


         );
    }

    //Function for opening modal dialog
    openModal(url, e) {
        this.setState({
            showModal:true,
            url:url
        })
    };


    //Function for closing modal dialog
    closeModal(){
        this.setState({
            showModal:false,
            url:''
        })
    }



}
 


//Let's render the whole thing
ReactDOM.render(
    <Gallery imgUrls={imgUrls} />, galleryContainer );
