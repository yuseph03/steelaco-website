import { lazy } from 'react';
import Footer from '../components/Footer'
import resume1 from '../assets/resume/resume1.jpg'
import resume2 from '../assets/resume/resume2.jpg'
import resume3 from '../assets/resume/resume3.jpg'
import resume4 from '../assets/resume/resume4.jpg'

export default function Resume() {
    return (
      <>
        <section className='row mt-5 justify-content-center'>
          <img src={resume1} alt="عکس رزومه اول" style={{maxWidth: 750}} loading='lazy'/>
          <img src={resume2} alt="عکس رزومه دوم" style={{maxWidth: 750}} loading='lazy'/>
          <img src={resume3} alt="عکس رزومه سوم" style={{maxWidth: 750}} loading='lazy'/>
          <img src={resume4} alt="عکس رزومه چهارم" style={{maxWidth: 750}} loading='lazy'/>
        </section>
        <Footer />
      </>
    )
}