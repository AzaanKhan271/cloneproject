import "./whatIDo.css";
import WhatIDoCards from './WhatIDoCards'
import CopyrightIcon from "@material-ui/icons/Copyright";
import Grid from '@material-ui/core/Grid';

const WhatIDo = () => {
  return (
    <div className='whatIDoMainDiv'>
    <div className='heading'>
      <h2>What I Do</h2>
      <div id="left_line"></div>
      <div id="right_line"></div>
    </div>
    <br/>
    <div>
<WhatIDoCards 
icon={<CopyrightIcon  style={{ color: '#007ced', width:'45%' ,height:'45%'}}/>}
heading={'Copyright'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
    </div>
    </div>
  );
};

export default WhatIDo;
