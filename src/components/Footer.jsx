import './css/Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../portfolio';
const {social,email,contact} = about

const Footer = () => (
  <footer className='footer'>
    
    <div className='container'>
      <div className='row'>
        <ul>
          <li> <strong>CONTACT DETAILS:</strong></li>
          <li> <a href className='footer-link '>
           E-mail Address: {email}</a></li>
            <li> <a href className='footer-link ' >
            Phone No.: {contact}</a></li>
        </ul>
        <div className='icons'>
        {social.github && (
              <a
                target='_blank'
                rel="noreferrer"
                href={social.github} 
                aria-label='github'
                className='link--icon'
                >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target='_blank'
                rel="noreferrer"
                aria-label='linkedin'
                className='link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
        </div>
      </div>
    </div>
  </footer>
)

export default Footer