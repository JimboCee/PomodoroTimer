import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <a href='https://github.com/JimboCee'
    className='github-social'>
        <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    </div>
  );
}
