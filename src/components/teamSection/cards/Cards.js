import React from 'react'
// import '../cards/cardCss/Card.css'


export default function Cards(props) {
    return (
        
            <div className="card  p-2" style={{ width: '17rem', backgroundColor: '#F5F7FF' }}>
                <img className="card-img-top" src={props.img1} alt="Card image cap" />
                <img className="card-img-top img2 rounded-circle" src={props.img2} alt="Card image cap" style={{ width: '50%', position: 'absolute', top: '20%', left: '25%' }} />

                <div class="card-body mt-5 ">
                    <div className="row">
                        <div className="mt-2">
                            <div className="d-flex justify-content-between">
                                <strong>{props.name}</strong>
                                <strong>{props.position}</strong>
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <p className='text-secondary' style={{ fontSize: '20px', fontWeight: 'lighter' }}>{props.adress}</p>
                                <p className='text-secondary p1'><span style={{ fontSize: '40px', fontWeight: 'bold' }}>{props.member}</span> <br /> Members</p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        
    )
}
