import steelaLogo from '../assets/steela-logo.jpg'
import {PhoneFilled, EnvironmentFilled, CaretLeftOutlined, MailFilled} from '@ant-design/icons'

export default function Footer() {
    return (
    <footer className="d-flex flex-row justify-content-evenly flex-wrap p-4" dir="rtl">
          <div>
            <img src={steelaLogo} alt="لوگوی شرکت استلا صنعت" style={{maxHeight: 200}}/>
            <p
            style={{maxWidth: '350px'}}
            >
              متخصصان شرکت استیلا صنعت با اخذ مدارک بین المللی در زمینه حوزه فعالیت خود، کیفیت محصولات و ارائه خدمات شرکت استیلا صنعت را تضمین می‌نمایند
            </p>
          </div>
          <div>
            <h4 className='my-4'>{<CaretLeftOutlined />}پل ارتباطی با ما</h4>
            <div className='d-flex flex-row column-gap-2'>
                <span className='align-self-center'>{<PhoneFilled/>}</span>
                <div className='lh-1'>
                  <p>09120904694</p>
                  <p>09129104492</p>
                  <p>09127683859</p>
                  <p>02645253897</p>
                </div>
            </div>
            <div className='d-flex flex-row column-gap-2'>
              <span>{<MailFilled />}</span>
              <p>steelasanatjam@gmail.com</p>
            </div>
            <div className='d-flex flex-row column-gap-2'>
              <span>{<EnvironmentFilled />}</span>
              <p className='text-center' >
                البرز، شهرک صنعتی نظرآباد، حسین آباد، کوچه گل مریم، پلاک 
                ۱۰
              </p>
            </div>
          </div>
    </footer>
    )
}