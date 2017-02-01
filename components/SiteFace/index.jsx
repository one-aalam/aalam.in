import React from 'react'
import moment from 'moment'
import Helmet from 'react-helmet'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config';
import profilePic from '../../pages/avatar.png'

import './style.css';

class SitePage extends React.Component {
    render() {
        const { title, segments } = this.props

        return (
            <section className="stage">
                <Helmet title={ title }/>
                <section className="container">
                    <section className="content intro">
                        <article className="avatar">
                            <img src={prefixLink(profilePic)} width='200' height='200' />
                        </article>
                        <h1 className="me-name-and-hi">
                            <strong>Hi!</strong> I'm <a href="https://www.linkedin.com/in/oneaalam" title="Visit Linkedin" parent="_self">Aftab</a>
                        </h1>
                        <strong className="me-things">{config.siteDesc}</strong>
                        <br/>
                        <em className="me-current">{config.siteAuthorCurr}</em>                       
                        <br/>
                        <br/>
                  <a href={ config.siteTwitterUrl }><i className='fa fa-twitter'></i></a>
                
                  <a href={ config.siteGithubUrl }><i className='fa fa-github-alt'></i></a>
                
                  <a href={ config.siteLinkedinUrl }><i className='fa fa-linkedin'></i></a>
              
                        <small>this webspace is still shaping up..</small>
                    </section>
                </section>
            </section>
            );
    }
}

SitePage.propTypes = {
    segments: React.PropTypes.array,
    title: React.PropTypes.string
}

export default SitePage