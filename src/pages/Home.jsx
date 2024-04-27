import homeBackground from '../assets/home-background.jpg'
import mixingTank from '../assets/home-mixing-tank.jpg'
import passBox from '../assets/passBox.jpg'
import piping from '../assets/piping.jpg'
import fermenter from '../assets/fermenter.jpg'
import bioractor from '../assets/bioractor.jpg'
import steelTank from '../assets/steelTank.jpg'
import magenitcMixer from '../assets/magneticMixer.jpg'
import {SafetyCertificateFilled, StarFilled, FundFilled, FlagFilled} from '@ant-design/icons'
import Card from '../components/Card'
import products from '../assets/products.json'

export default function Home() {
  return (
    <>
      <section 
      className="container-fluid text-center p-10"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }} 
      >
        <div className="row justify-content-center">
          <img
          src={mixingTank}
          className="col-3 img-thumbnail m-4"
          alt="مخزن"
          />
          <div className='col-3 m-4 text-white fs-4'>
            <h2 dir="rtl">استیلا صنعت جام البرز</h2>
            <p dir="rtl">شرکت استیلا صنعت بر اساس نیاز کشور به دانش فنی طراحی و ساخت تجهیزات و همچنین نصب و نگهداری سیستم‌های فرایندی در زمینه تولید دارو توسط تعدادی از متخصصین با تجربه در این حوزه تاسیس شده است.</p>
          </div>
        </div>
      </section>
      <section
      className='container my-5 text-center'
      dir="rtl"
      >
       <div className="row justify-content-center column-gap-5 text-white fs-3">
         <div className="col p-4 rounded-pill bg-dark bg-gradient">
            {<SafetyCertificateFilled /> }
            <p> ضمانت کیفیت </p>
         </div>
         <div className="col p-4 rounded-pill bg-dark bg-gradient">
            {<StarFilled />}
            <p> خدمات نمونه </p>
         </div>
         <div className="col p-4 rounded-pill bg-dark bg-gradient">
            {<FundFilled />}
            <p> قیمت بصرفه</p>
         </div>
         <div className="col p-4 rounded-pill bg-dark bg-gradient">
            {<FlagFilled />}
            <p> کیفیت جهانی</p>
          </div>
       </div>
      </section>
      <section>
        <div className="container-md" dir="rtl">
          <h2 className='text-center my-5 fs-2 fw-semibold'>محصولات استیلا صنعت</h2>
          <div className="row row-gap-5 colum-gap-3">
              <Card
              title={products[0].name}
              description={products[0].description}
              image={passBox}
              />
              <Card
              title={products[1].name}
              description={products[1].description}
              image={fermenter}
              />
              <Card
              title={products[2].name}
              description={products[2].description}
              image={piping}
              />
              <Card
              title={products[3].name}
              description={products[3].description}
              image={bioractor}
              />
              <Card
              title={products[4].name}
              description={products[4].description}
              image={steelTank}
              />
              <Card
              title={products[5].name}
              description={products[5].description}
              image={magenitcMixer}
              />
          </div>
        </div>
      </section>
    </>
  )
}