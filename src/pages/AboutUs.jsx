import steelaLogo from '../assets/steela-logo.jpg'
import Footer from '../components/Footer'

export default function AboutUs() {
    return (
      <>
        <section 
        className="conainer text-center " 
        dir="rtl"
        style={{backgroundColor: "rgb(19, 49, 38)"}}
        >
          <img src={steelaLogo} className='img-thumbnail my-5' alt="لوگوی شرکت استلا صنعت" style={{maxHeight: 350}}/>
          <div className="container fs-5 p-4 text-white">
            <p>شرکت استیلا صنعت جام البرز با تکیه بر تخصص، آگاهی و تجارب افراد کارآمد و مجهز به دانش فنی، طراحی و ساخت تجهیزات و همچنین نصب و نگهداری سیستم های فرآیندی در زمینه تولید دارو تاسیس گردیده است.</p>
            <p>استیلا صنعت به پشتوانه سالها تلاش در حوزه تجهیزات داروسازی فعالیت خود را در زمینه مشاوره، طراحی، ساخت و راه اندازی واحد ها و سیستم های داروسازی آغاز نموده و گسترش داده است و بطور مستمر در حال بروزرسانی علم و تجربه خود در جهت ارایه محصولات و خدمات برتر در حوزه فعالیت خود می باشد. </p>
          </div>    
          </section>
          <Footer />
        </>
    )
  }