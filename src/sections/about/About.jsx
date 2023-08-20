import AboutImage from '../../assets/about.JPG'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Hey there, I’m Alex a frontend software developer with a strong background as an IT specialist based in Albany, NY. I am proficient in a range of programming languages and technologies and have a keen interest in both front-end and back-end development. Through hands-on projects and collaborative experiences, I've developed an appreciation for creating seamless user experiences and robust, scalable systems.                </p>
                <p>
                I am dedicated to continuous learning and thrive in dynamic environments, eagerly embracing new technologies and methodologies to enhance my skill set. With a strong work ethic and drive for innovation, I am actively seeking opportunities to excel in the world of software development. Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download Resume <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About