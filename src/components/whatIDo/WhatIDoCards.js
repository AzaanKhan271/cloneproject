import "./whatIDo.css";


const WhatIDoCards = (props) => {
  return (
    <div className='whatCardsMainDiv'>
      <div className="whatIcon">
        {props.icon}
      </div>
      <div style={{marginLeft:'-40px'}}>
          <div className='whatTextHeading'>
              <h3>{props.heading}</h3>
          </div>
          <div className='whatText'><p >{props.text}</p>
          </div>
      </div>
    </div>
  );
};

export default WhatIDoCards;
