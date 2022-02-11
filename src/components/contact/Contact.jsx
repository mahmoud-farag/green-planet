import React from 'react';
import './Contact.css'


export default function Contact() {
  return <div className='contactUs__conatiner'>
      <section className='contacts'>
        <div className='title'>
          <h1>تواصل معنا</h1>
          <p>للإجابة على أسئلتكم، نرجوا تعبئة النموذج أدناه وسنقوم بالرد عليكم في أسرع وقت</p>
        </div>
        <div className='contacts__body'>
        <div className='contacts__body__part1'>
              <div>
                <h5>الهاتف</h5>
                <p>01023476282</p>
              </div>
              <div>
                <h5>البريد الإلكتروني</h5>
                <p>info@nabatik.com</p>
              </div>
              <div>
                <h5>العنوان</h5>
                <p>شارع أسماء بنت ابي بكر، الظهران، ٣٤٢٥٨</p>
              </div>
              <div>
                <h5>حسابات التواصل الإجتماعي</h5>
                <p></p>
              </div>
          </div>
          <div className="form__container">
            <div className='form_title'>
              <p>لديك سؤال؟</p>
              <p>سنقوم بالإجابة على اسئلتكم في أسرع وقت ممكن</p>
            </div>
            <form>
              <input type='text' name='name' placeholder='ادخل اسمك هنا'></input>
              <input type='emai' name='email' placeholder='البريد الالكتروني'></input>
              <textarea placeholder='محتوى رسالتك'></textarea>
              <button type='submeit'> ارسال</button>
            </form>
          </div>
          
        </div>
      </section>
  </div>;
}









































