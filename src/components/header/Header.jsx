import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

export default function Header() {
  return <div className='container header__container'>

    <header>
        <Link to='/' className='logo' ><span>Green</span> planet </Link>
        <nav>
            <ul>
                <li><Link className='a' to='contact'> تواصل معنا</Link></li>
                <li><Link className='a' to='faq'> الاسئلة الشائعة</Link></li>
                <li><Link className='a' to='map'>الخريطة</Link></li>
            </ul>
        </nav>

        <section className='registeration'>
           <Link to='login'>تسجيل دخول</Link>
           <Link to='#'> ازرع شجرة</Link>
        </section>

        <section className='languages'>
             <button>Eng</button>
             <button>arb</button>
        </section>
    </header>
  </div>;
}
