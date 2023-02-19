import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './socialHandles.css';

const SocialHandles = () => {
  return (
    <ul className="social-icons">
      <li><a href="#"><GitHubIcon/></a></li>
      <li><a href="#"><LinkedInIcon/></a></li>
      <li><a href="#twitter"><TwitterIcon/></a></li>
    </ul>
  )
}

export default SocialHandles