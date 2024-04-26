import homeBackground from '../assets/home-background.jpg'

export default function Home() {
  return (
    <>
      <div 
      className="container-fluid text-center"
      style={{
        backgroundImage: `url(${homeBackground})`,
        backgroundPosition: 'center'
      }} 
      >
        <div className="row justify-content-center column-gap-5">
          <img
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          className="col-3"
          alt="مخزن"
          />
          <div className='col-3' style={{color: 'white'}}>
            <h2 dir="rtl">استیلا صنعت جام البرز</h2>
            <p dir="rtl">شرکت استیلا صنعت بر اساس نیاز کشور به دانش فنی طراحی و ساخت تجهیزات و همچنین نصب و نگهداری سیستم‌های فرایندی در زمینه تولید دارو توسط تعدادی از متخصصین با تجربه در این حوزه تاسیس شده است.</p>
          </div>
        </div>
      </div>
      {/* <div
      className='container-md'
      >

      </div> */}
    </>
  )
}