import "./whatIDo.css";
import Grid from '@material-ui/core/Grid';



const WhatIDoCards = (props) => {
  return (
    // <div className='whatCardsMainDiv'>
    //   <div className="whatIcon">
    //     {props.icon}
    //   </div>
    //   <div style={{
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginLeft: '7%'
    //   }} >
    //     {/* style={{marginLeft:'-40px'}} */}
    //     <div className='whatTextHeading'>
    //       <h3>{props.heading}</h3>
    //     </div>
    //     <div className='whatText'><p >{props.text}</p>
    //     </div>
    //   </div>
    // </div>
    <>
      <Grid  item spacing={2} xs={1}>
        <div className="whatIcon">
          {props.icon}
        </div>
      </Grid>
      <Grid item xs={11}>
        <Grid container  xs>
          <Grid item xs={12}>
            <div className='whatTextHeading'>
              <h4 style={{fontSize:'16px'}}>{props.heading}</h4>
            </div>
          </Grid>
          <Grid item xs>
            <div className='whatText'><p style={{fontSize:'14px'}}>{props.text}</p>
            </div>
          </Grid>
        </Grid>
      </Grid>

    </>
  );
};

export default WhatIDoCards;
