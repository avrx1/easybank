import React, { useEffect, useState } from 'react'
import "./App.css"

const Navbar = () => {
  const [navActive, setNavActive] = useState(false)

  useEffect(() => {
    
    window.addEventListener("resize", () => {

      let sWidth = window.innerWidth
      console.log(sWidth)
      if(sWidth > 660)
        setNavActive(false)
    })

  },[])
  return (
    <div style={{backgroundColor: "white"}}>

      {navActive && <div className={`navigation ${navActive ? "navActive":""}`}>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
          </ul>
        </div>}
      <nav className='container'>
          <div>
            <img src="images/logo.svg" />
          </div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">Careers</a></li>
          </ul>
          <div className='btn'>Request Invite</div>
          <img className="burger" src="images/icon-hamburger.svg" alt=""
              onClick={() => {
                setNavActive(p => !p)
              }}
          />
      </nav>
  </div>);
}

const Top = () => {
  return (
    <div className='container top-section'>
      <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. 
          Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
        </p>
        <div className='btn'>
          Request Invite
        </div>
      </div>
      <div>
        <img src="images/bg-intro-desktop.svg"/>
      </div>
    </div>
  );
}

const WhyChoose = () => {
  return <section className='container choose-wrapper'>
  <h2>Why choose Easybank?</h2>
  <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
your finances like never before.
  </p>

  <div className='choices'>
    <div className='choice'>
         <img src="images/icon-online.svg"/>
        <h3>Online Banking</h3>
        <p>Our modern web and mobile applications allow you to keep track of your finances 
        wherever you are in the world. </p>
    </div>
    <div className='choice'>
      <img src="images/icon-budgeting.svg"/>
      <h3>Simple Budgeting</h3>
      <p>See exactly where your money goes each month. Receive notifications when you’re 
        close to hitting your limits.</p>
    </div>
    
    <div className='choice'>
      <img src="images/icon-onboarding.svg"/>
      <h3>Fast Onboarding</h3>
        <p>We don't do branches. Open your account in minutes online and start taking control 
        of your finances right away.</p>
    </div>

    <div className='choice'>
      <img src="images/icon-api.svg"/>
        <h3>Open API</h3>
        <p>Manage your savings, investments, pension, and much more from one account. Tracking 
        your money has never been easier.</p>
    </div>

  </div>


  </section>
}

const Articles = () => {
  return (
    <div className='container article-container'>
      <h2>Latest Articles</h2>
      <div className='articles'>
        <div className='article'>
          <div className='article-img'>
            <img src="images/image-currency.jpg" alt="" />
          </div>
          <div className='article-info'>
            <p className='article-author'>By Claire Robinson</p>
            <h3 className='article-title'>Receive money in any currency with no fees </h3>
            <p className='article-content'>The world is getting smaller and we're becoming more mobile. So why should you be 
            forced to only receive money in a single …</p>
          </div>
        </div>

        <div className='article'>
          <div className='article-img'>
            <img src="images/image-restaurant.jpg" alt="" />
          </div>
          <div className='article-info'>
            <p className='article-author'>  By Wilson Hutton</p>
            <h3 className='article-title'>Treat yourself without worrying about money </h3>
            <p className='article-content'>  Our simple budgeting feature allows you to separate out your spending and set 
                realistic limits each month. That means you …</p>
          </div>
        </div>
        <div className='article'>
          <div  className='article-img'>
            <img src="images/image-plane.jpg" alt="" />
          </div>
          <div className='article-info'>
            <p className='article-author'>By Wilson Hutton</p>
            <h3 className='article-title'>Take your Easybank card wherever you go</h3>
            <p className='article-content'>  We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …</p>
          </div>
        </div>
        <div className='article'>
          <div  className='article-img'>
            <img src="images/image-confetti.jpg" alt="" />
          </div>
          <div className='article-info'>
            <p className='article-author'>By Claire Robinson</p>
            <h3 className='article-title'>Our invite-only Beta accounts are now live! </h3>
            <p className='article-content'>  After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...
</p>
          </div>
        </div>



      </div>
    </div>
  );
}

const Footer = () => {
  return <footer>
    <div className='container'>
      <div className='footer-left'>
        <div className='logo'>
          <img src="images/logo.svg" alt="" />
        </div>
        <div className='icons'>
          <img src="images/icon-facebook.svg" alt="" />
          <img src="images/icon-youtube.svg" alt="" />
          <img src="images/icon-twitter.svg" alt="" />
          <img src="images/icon-pinterest.svg" alt="" />
          <img src="images/icon-instagram.svg" alt="" />
        </div>
      </div>
      <div className='footer-middle'>
        <ul >
          <li><a href=''>About Us</a></li>
          <li><a href=''>Contact</a></li>
          <li><a href=''>Blog</a></li>
          <li><a href=''>Careers</a></li>
          <li><a href=''>Support</a></li>
          <li><a href=''>Privacy Policy</a></li>
        </ul>
      </div>
      <div className='footer-right'>
        <div></div>
        <div>
          <div className='btn'>Request Invite</div>
          <div>© Easybank. All Rights Reserved</div>
        </div>
      </div>
    </div>
  </footer>
}

const App = () => {
  return (
    <div>
      <Navbar/>
      <Top/>
      <WhyChoose/>
      <Articles/>
      <Footer/>
    </div>  
  )
}




export default App
