import "./whatIDo.css";
import WhatIDoCards from './WhatIDoCards'
import CreateIcon from '@material-ui/icons/Create';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import Grid from '@material-ui/core/Grid';

const WhatIDo = () => {
  return (
    <div className='whatIDoMainDiv'>
    <Grid container xs >
    <Grid item xs={12} >
    <div className='heading'>
      <h2>What I Do</h2>
      <div id="left_line"></div>
      <div id="right_line"></div>
    </div>
    </Grid>
    
    {/* <br/> */}
    <Grid item xs ={12}>
    <div style={{display:'flex'}}>
<WhatIDoCards 
icon={<CreateIcon fontSize='large' style={{color:'#007ced'}} />}
heading={'Copywrite'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
<WhatIDoCards 
icon={<StorefrontIcon fontSize='large' style={{color:'#007ced'}}  />}
heading={'Ecommerce'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
</div>

    
    </Grid>
    <Grid item xs ={12}>
    <div style={{display:'flex'}}>
<WhatIDoCards 
icon={<DesktopMacIcon fontSize='large' style={{color:'#007ced'}}   />}
heading={'Web Design'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
<WhatIDoCards 
icon={<RecordVoiceOverIcon fontSize='large' style={{color:'#007ced'}}  />}
heading={'Marketing'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
</div>

    
    </Grid>
    </Grid>
    </div>

  );
};

export default WhatIDo;
