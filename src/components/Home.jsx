import React from 'react';

export default function Home() {
  return (
    <div>
    <br /><br /><br />
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images-static.nykaa.com/uploads/c8b26f26-b7fc-4b61-b30d-035f5d8ffb4c.jpg?tr=w-1200,cm-pad_resize"className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-static.nykaa.com/uploads/e140cbf3-4e3a-4f16-a102-51db09a7811e.png?tr=w-1200,cm-pad_resize" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://images-static.nykaa.com/uploads/189cf576-5376-4b28-b5b9-0227bfe7232d.jpg?tr=w-1200,cm-pad_resize" className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
           
    </div>
  )
}
