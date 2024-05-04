import homeBackground from '../assets/home-background.jpg'
import cleanRoom1 from '../assets/clean-room-carousel/clean-room1.jpg'
import passBox from '../assets/passBox.jpg'
import fermenter from '../assets/fermenter.jpg'
import bioractor from '../assets/bioractor.jpg'
import steelTank from '../assets/steelTank.jpg'
import magenitcMixer from '../assets/magneticMixer.jpg'
import carbonPiping from '../assets/carbon-piping.png'
import steelPolish from '../assets/steel-tank-polish.jpg'
import filterHousing from '../assets/filter-housing.jpg'
import Footer from '../components/Footer'
import {SafetyCertificateFilled, StarFilled, FundFilled, FlagFilled} from '@ant-design/icons'
import Card from '../components/Card'
import CleanRoom from '../components/CleanRoom'
import products from '../assets/products.json'

export default function Home() {
  return (
    <>
        <section
        style={{
          backgroundImage: `url(${homeBackground})`,
        }} 
        >
          <div className="row justify-content-center p-3 text-center">
            <CleanRoom className="col-6"/>
            <div className='col-7 text-white fs-4'>
              <h2>استیلا صنعت جام البرز</h2>
              <p>شرکت استیلا صنعت جام البرز با تکیه بر تخصص، آگاهی و تجارب افراد کارآمد و مجهز به دانش فنی، طراحی و ساخت تجهیزات و همچنین نصب و نگهداری سیستم های فرآیندی در زمینه تولید دارو تاسیس گردیده است.</p>
            </div>
          </div>
        </section>
      <section
      className='container my-5 text-center'
      dir="rtl"
      >
       <div className="row justify-content-center column-gap-5 text-white fs-4">
         <div className="col p-3 rounded-pill bg-dark bg-gradient">
            {<SafetyCertificateFilled /> }
            <p> ضمانت کیفیت </p>
         </div>
         <div className="col p-3 rounded-pill bg-dark bg-gradient">
            {<StarFilled />}
            <p> خدمات نمونه </p>
         </div>
         <div className="col p-3 rounded-pill bg-dark bg-gradient">
            {<FundFilled />}
            <p> قیمت بصرفه</p>
         </div>
         <div className="col p-3 rounded-pill bg-dark bg-gradient">
            {<FlagFilled />}
            <p> کیفیت جهانی</p>
          </div>
       </div>
      </section>
      <section 
      className='p-5'
      style={{backgroundColor: "rgb(19, 49, 38)"}}
      >
        <div className="container-md text-white" dir="rtl">
          <h1 className='text-center my-5'>محصولات استیلا صنعت</h1>
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
              image={filterHousing}
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
              <Card
              title={products[6].name}
              description={products[6].description}
              image={carbonPiping}
              />
              <Card
              title={products[7].name}
              description={products[7].description}
              image={cleanRoom1}
              />
              <Card
              title={products[8].name}
              description={products[8].description}
              image={steelPolish}
              />
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}