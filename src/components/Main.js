import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import resume from '../assets/file/resume.pdf'
import Menu from './Tree/index'
import { Button } from 'semantic-ui-react';




class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img style={{
            margin: "20px auto", opacity: "0.85"
          }} src={pic01} alt="" /></span>
          < p > Hello my name is Jon! I'm an aspiring software engineer working out of the greater boston area. I have worked mostly in the financial and education industry, with an emphasis on sales, with time spent toward my passions of coding and computer science. I currently hold a degree in Finance and I have completed a Full Stack Coding Bootcamp in 2018. I'm currently taking courses toward an MS in Data Analytics. I primarily use the MERN stack to build minimalistic and eye - catching websites or apps.</p>
          <p>
            <h3>Current Technologies:</h3>
            <ul>
              <li><strong>Front End:</strong> HTML5, CSS3, jQuery, JavaScript, React, Gatsby, React-Spring</li>
              <li><strong>Back End:</strong> Node, Express </li>
              <li><strong>Containers:</strong> Docker </li>
              <li><strong>Databases:</strong> MySQL, MongoDB </li>
              <li><strong>IDE of choice:</strong> VScode </li>
            </ul>
            <h3>Now Learning:</h3>
            <ul>
              <li>Angular</li>
              <li>GraphQL</li>
              <li>Python</li>
              <li>PHP</li>
              <li>Kubernetes</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>

          <h2 className="major">Work</h2>



          <span className="image main"><img style={{ width: "100%" }} src={pic02} alt="" /></span>

          <section style={{ textAlign: "center" }}>
            <span className='icon fa-file'> <a href={resume} target='_blank' style={{ marginRight: "5px" }}>Full Resume</a></span> | <span style={{ marginLeft: "5px" }} className='icon fa-linkedin'></span><a href='https://www.linkedin.com/in/jonathanlascaze' target='_blank' rel="noopener noreferrer" > LinkedIn</a>
          </section>
          <hr></hr>

          <h3 style={{ marginTop: "1rem" }}>Financial Aid Services - <span>Oct 18 <span className="icon fa-caret-right"></span> Jan 19</span></h3>
          <h5>Jr Front End Developer</h5>
          <p style={{ fontSize: '20px' }}>Assisted design and development of front-end for organization client portal, utilizing Polymer, Immutable JS, Nuclear JS, Kubernetes, and Google Cloud</p>
          <h3>Southern NH University - <span>Feb 14 <span className="icon fa-caret-right"></span> June 18</span></h3>
          <h5>Team lead</h5>
          <p style={{ fontSize: '20px' }}>
            Executed admission performance goals and standards as a leader of a team consisting of ten or more individuals focused on weekly, monthly, and yearly targets
          </p>
          <h3>Citizens Bank - <span>2012 <span className="icon fa-caret-right"></span> 2014</span></h3>
          <h5>Banker</h5>
          <p style={{ fontSize: '20px' }}>
            Opened personal and business banking accounts according to operational standards & policies, while conducting proactive communictions around securing new-to-bank clientele
          </p>
          <h3>Fidelity Investments - <span>2011 <span className="icon fa-caret-right"></span> 2012</span></h3>
          <h5>Non-profit Customer Support</h5>
          <p style={{ fontSize: '20px' }}>
            Delivered plan-specific guidance to customers, using up-to-date policy and procedures defined by their organizations to maintain and update non-profit retirement accounts
          </p>
          {close}
        </article>

        <article id="projects" className={`${this.props.article === 'projects' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>
            <Menu />
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <section style={{ width: "100%", textAlign: "center" }}>
            <img src="https://i.postimg.cc/L4wq5ptV/Type.gif" alt='' style={{ borderRadius: "50%", width: "150px" }} />
            <p>I'm currently open to new opportunties and look forward to receiving your email.</p>
            <a style={{ border: "none" }} href="mailto:lascaze.j@gmail.com"><Button>Email</Button></a>
            <ul className="icons" style={{ marginTop: "2rem" }}>
              <li><a href="http://www.github.com/Jlasc" target='_blank' rel="noopener noreferrer" className=" icon fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="https://www.linkedin.com/in/jonathanlascaze" target='_blank' rel="noopener noreferrer" className="icon fa-linkedin"><span className="label">LinkedIn</span></a></li>
            </ul>
          </section>

          {close}
        </article >

      </div >
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main