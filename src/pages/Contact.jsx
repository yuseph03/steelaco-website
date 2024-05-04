import homeBackground from '../assets/home-background.jpg'
import Footer from '../components/Footer'
import {PhoneFilled, EnvironmentFilled, CaretLeftOutlined, MailFilled} from '@ant-design/icons'

export default function Contact() {
    return (
      <>
        <section 
        className="row my-5 p-5 fs-5 justify-content-center" 
        dir='rtl'
        style={{
          backgroundImage: `url(${homeBackground})`,
        }} 
        >
          <iframe 
          className="col"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d807.6740186273913!2d50.614417428432105!3d35.929938584214526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8d01002d35b255%3A0x3ae9e1779aa5862a!2z2LTYsdqp2Kog2KfYs9iq24zZhNinINi12YbYudiqINis2KfZhSDYp9mE2KjYsdiy!5e0!3m2!1sen!2scl!4v1714384953950!5m2!1sen!2scl" 
          width="600" 
          height="450" 
          allowfullscreen="" 
          loading="lazy">
          </iframe>
          <div className='col'>
              <h2 className='my-4 text-white'>{<CaretLeftOutlined />}راه های تماس</h2>
              <div 
              className='d-flex flex-row column-gap-2 justify-content-center p-2 m-3 rounded'
              style={{
                backgroundColor: 'white',
              }} 
              >
                  <div>
                    <p><span>{<PhoneFilled/>}</span>09120904694</p>
                    <p><span>{<PhoneFilled/>}</span>09129104492</p>  
                    <p><span>{<PhoneFilled/>}</span>09127683859</p>
                    <p><span>{<PhoneFilled/>}</span>02645253897</p>
                  </div>
              </div>
              <div 
              className='d-flex flex-row column-gap-2 justify-content-center p-2 m-3 rounded'
              style={{
                backgroundColor: 'white',
              }} 
              >
                <span>{<MailFilled />}</span>
                <p>steelasanatjam@gmail.com</p>
              </div>
              <div 
              className='d-flex flex-row column-gap-2 justify-content-center p-3 m-3 rounded'
              style={{
                backgroundColor: 'white',
              }} 
              >
                <span>{<EnvironmentFilled />}</span>
                <p>البرز، شهرک صنعتی نظرآباد، حسین آباد، کوچه گل مریم، پلاک ۱۰</p>        
              </div>
          </div>
        </section>
        <Footer/>
      </>
    )
  }