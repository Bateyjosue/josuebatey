import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './socialHandles.css';

const SocialHandles = () => {
  return (
    <ul className="social-icons">
      <li><a href="https://github.com/Bateyjosue"><GitHubIcon/></a></li>
      <li><a href="https://www.linkedin.com/in/josue-ishara"><LinkedInIcon/></a></li>
      <li><a href="https://twitter.com/JosueBatey"><TwitterIcon/></a></li>
    </ul>
  )
}

export default SocialHandles