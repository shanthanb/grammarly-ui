import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, ListItem } from '@material-ui/core';


const useStyles = makeStyles({
    bannerBg:{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'darkgray'        
    }
})
function MenuBar(props) {
    let classes = useStyles(props)
    return (
        <Box
      component="div"
      flexDirection="row"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      
      style={{ padding: '70px', marginLeft: '-10px', marginTop: '-60px'}}>
      
      <Box fontWeight="600" fontSize="14px" minWidth="70px" textAlign="center">Product

          <li style={{listStyleType:"none", fontFamily: "sans-serif", fontWeight:"200", fontSize: "14px"
}}>
<ul>Plans</ul>
<ul>Grammarly Premium</ul>
<ul>Grammarly Business</ul>
<ul>Grammarly @edu</ul>
<ul>Grammarly Desktop Apps</ul>
<ul>The Grammarly Keyboard</ul>
<ul>Grammarly for MS Office</ul>
</li>

      </Box>
      
      
      <Box fontWeight="600" fontSize="14px" minWidth="70px" textAlign="center">
          Company
          <li style={{listStyleType:"none", fontFamily: "sans-serif", fontWeight:"200", fontSize: "14px"
}}>
<ul>About</ul>
<ul>Careers & Culture</ul>
<ul>Blog</ul>
<ul>Tech Blog</ul>
<ul>Press</ul>
<ul>Affiliates</ul>
</li>
       </Box>
      
      <Box fontWeight="600" fontSize="14px" minWidth="70px" textAlign="center">
          Features
          
<li style={{listStyleType:"none", fontFamily: "sans-serif", fontWeight:"200", fontSize: "14px"
}}>
<ul>Product Feature News</ul>
<ul>Tone Detector</ul>
<ul>Grammar Checker</ul>
<ul>Plagiarism Checker</ul>
</li>
     
      </Box>
      
      <Box fontWeight="700" fontSize="14px" minWidth="70px" textAlign="center">
          Trust
     
          <li style={{listStyleType:"none", fontFamily: "sans-serif", fontWeight:"200", fontSize: "14px"
}}>
<ul>User Trust Guidelines</ul>
<ul>Privacy Policy</ul>
<ul>Terms of Service</ul>
<ul>CA Privacy Notice</ul>
<ul>Security</ul>
</li>
      </Box>
      
      
      <Box fontWeight="600" fontSize="14px" minWidth="70px" textAlign="center">
      Connect
          <li style={{listStyleType:"none", fontFamily: "sans-serif", fontWeight:"200", fontSize: "14px"
}}>     
<ul>Help Center</ul>
<ul> 
    <li style={{listStyleType:"none"}}>Contact Us</li> </ul>

<ul>Facebook</ul>
<ul>Instagram</ul>
<ul>Twitter</ul>
<ul>LinkedIn</ul>

</li>
      </Box>
    </Box>
    );
}

export default MenuBar;