import React from 'react';

function Home(props) {
    return (
        <div>
        <div>
        {/* ======= Top Bar ======= */}
        <div id="topbar" className="d-flex align-items-center fixed-top">
          <div className="container d-flex">
            <div className="contact-info mr-auto">
              <i className="icofont-phone" /> +1 5589 55488 55
              <span className="d-none d-lg-inline-block"><i className="icofont-clock-time icofont-rotate-180" /> Mon-Sat: 11:00 AM - 23:00 PM</span>
            </div>
            <div className="languages">
              <ul>
                <li>En</li>
                <li><a href="#">De</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* ======= Header ======= */}
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <h1 className="logo mr-auto"><a href="index.html">Restaurantly</a></h1>
            {/* Uncomment below if you prefer to use an image logo */}
            {/* <a href="index.html" class="logo mr-auto"><img src="assets/img/logo.png" alt="g" class="img-fluid"></a>*/}
            <nav className="nav-menu d-none d-lg-block">
              <ul>
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#specials">Specials</a></li>
                <li><a href="#events">Events</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#chefs">Chefs</a></li>
                <li><a href="#contact">Contact</a></li>
                <li className="book-a-table text-center"><a href="#book-a-table">Book a table</a></li>
              </ul>
            </nav>{/* .nav-menu */}
          </div>
        </header>{/* End Header */}
        {/* ======= Hero Section ======= */}
        <section id="hero" className="d-flex align-items-center">
          <div className="container position-relative text-center text-lg-left" data-aos="zoom-in" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-8">
                <h1>Welcome to <span>Restaurantly</span></h1>
                <h2>Delivering great food for more than 18 years!</h2>
                <div className="btns">
                  <a href="#menu" className="btn-menu animated fadeInUp scrollto">Our Menu</a>
                  <a href="#book-a-table" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                </div>
              </div>
              <div className="col-lg-4 d-flex align-items-center justify-content-center" data-aos="zoom-in" data-aos-delay={200}>
                <a href="https://www.youtube.com/watch?v=GlrxcuEDyF8" className="venobox play-btn" data-vbtype="video" data-autoplay="true" />
              </div>
            </div>
          </div>
        </section>{/* End Hero */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay={100}>
                  <div className="about-img">
                    <img src="assets/img/about.jpg" alt="k" />
                  </div>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                  <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                  <p className="font-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua.
                  </p>
                  <ul>
                    <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                    <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <p>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum
                  </p>
                </div>
              </div>
            </div>
          </section>{/* End About Section */}
          {/* ======= Why Us Section ======= */}
          <section id="why-us" className="why-us">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Why Us</h2>
                <p>Why Choose Our Restaurant</p>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="box" data-aos="zoom-in" data-aos-delay={100}>
                    <span>01</span>
                    <h4>Lorem Ipsum</h4>
                    <p>Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={200}>
                    <span>02</span>
                    <h4>Repellat Nihil</h4>
                    <p>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</p>
                  </div>
                </div>
                <div className="col-lg-4 mt-4 mt-lg-0">
                  <div className="box" data-aos="zoom-in" data-aos-delay={300}>
                    <span>03</span>
                    <h4> Ad ad velit qui</h4>
                    <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Why Us Section */}
          {/* ======= Menu Section ======= */}
          <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Menu</h2>
                <p>Check Our Tasty Menu</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12 d-flex justify-content-center">
                  <ul id="menu-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-starters">Starters</li>
                    <li data-filter=".filter-salads">Salads</li>
                    <li data-filter=".filter-specialty">Specialty</li>
                  </ul>
                </div>
              </div>
              <div className="row menu-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-6 menu-item filter-starters">
                  <img src="assets/img/menu/lobster-bisque.jpg" className="menu-img" alt="e" />
                  <div className="menu-content">
                    <a href="#">Lobster Bisque</a><span>$5.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <img src="assets/img/menu/bread-barrel.jpg" className="menu-img" alt="w" />
                  <div className="menu-content">
                    <a href="#">Bread Barrel</a><span>$6.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-starters">
                  <img src="assets/img/menu/cake.jpg" className="menu-img" alt="w" />
                  <div className="menu-content">
                    <a href="#">Crab Cake</a><span>$7.95</span>
                  </div>
                  <div className="menu-ingredients">
                    A delicate crab cake served on a toasted roll with lettuce and tartar sauce
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <img src="assets/img/menu/caesar.jpg" className="menu-img" alt="e" />
                  <div className="menu-content">
                    <a href="#">Caesar Selections</a><span>$8.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt="t" />
                  <div className="menu-content">
                    <a href="#">Tuscan Grilled</a><span>$9.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Grilled chicken with provolone, artichoke hearts, and roasted red pesto
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-starters">
                  <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt="t" />
                  <div className="menu-content">
                    <a href="#">Mozzarella Stick</a><span>$4.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Lorem, deren, trataro, filede, nerada
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt="e" />
                  <div className="menu-content">
                    <a href="#">Greek Salad</a><span>$9.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Fresh spinach, crisp romaine, tomatoes, and Greek olives
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-salads">
                  <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt="e" />
                  <div className="menu-content">
                    <a href="#">Spinach Salad</a><span>$9.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette
                  </div>
                </div>
                <div className="col-lg-6 menu-item filter-specialty">
                  <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt="a" />
                  <div className="menu-content">
                    <a href="#">Lobster Roll</a><span>$12.95</span>
                  </div>
                  <div className="menu-ingredients">
                    Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Menu Section */}
          {/* ======= Specials Section ======= */}
          <section id="specials" className="specials">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Specials</h2>
                <p>Check Our Specials</p>
              </div>
              <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-3">
                  <ul className="nav nav-tabs flex-column">
                    <li className="nav-item">
                      <a className="nav-link active show" data-toggle="tab" href="#tab-1">Modi sit est</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-9 mt-4 mt-lg-0">
                  <div className="tab-content">
                    <div className="tab-pane active show" id="tab-1">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Architecto ut aperiam autem id</h3>
                          <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                          <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="assets/img/specials-1.png" alt="hg" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-2">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Et blanditiis nemo veritatis excepturi</h3>
                          <p className="font-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                          <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="assets/img/specials-2.png" alt="h" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-3">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                          <p className="font-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                          <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="assets/img/specials-3.png" alt="x" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-4">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                          <p className="font-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                          <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="assets/img/specials-4.png" alt="d" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane" id="tab-5">
                      <div className="row">
                        <div className="col-lg-8 details order-2 order-lg-1">
                          <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                          <p className="font-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                          <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                        </div>
                        <div className="col-lg-4 text-center order-1 order-lg-2">
                          <img src="assets/img/specials-5.png" alt="c" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Specials Section */}
          {/* ======= Events Section ======= */}
          <section id="events" className="events">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Events</h2>
                <p>Organize Your Events in our Restaurant</p>
              </div>
              <div className="owl-carousel events-carousel" data-aos="fade-up" data-aos-delay={100}>
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src="assets/img/event-birthday.jpg" className="img-fluid" alt="m" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Birthday Parties</h3>
                    <div className="price">
                      <p><span>$189</span></p>
                    </div>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src="assets/img/event-private.jpg" className="img-fluid" alt="a" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Private Parties</h3>
                    <div className="price">
                      <p><span>$290</span></p>
                    </div>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
                <div className="row event-item">
                  <div className="col-lg-6">
                    <img src="assets/img/event-custom.jpg" className="img-fluid" alt="s" />
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0 content">
                    <h3>Custom Parties</h3>
                    <div className="price">
                      <p><span>$99</span></p>
                    </div>
                    <p className="font-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                      <li><i className="icofont-check-circled" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li><i className="icofont-check-circled" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    </ul>
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Events Section */}
          {/* ======= Book A Table Section ======= */}
          <section id="book-a-table" className="book-a-table">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Reservation</h2>
                <p>Book a Table</p>
              </div>
              <form action="forms/book-a-table.php" method="post" role="form" className="php-email-form" data-aos="fade-up" data-aos-delay={100}>
                <div className="form-row">
                  <div className="col-lg-4 col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-lg-4 col-md-6 form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                  <div className="col-lg-4 col-md-6 form-group">
                    <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-lg-4 col-md-6 form-group">
                    <input type="text" name="date" className="form-control" id="date" placeholder="Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-lg-4 col-md-6 form-group">
                    <input type="text" className="form-control" name="time" id="time" placeholder="Time" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="col-lg-4 col-md-6 form-group">
                    <input type="number" className="form-control" name="people" id="people" placeholder="# of people" data-rule="minlen:1" data-msg="Please enter at least 1 chars" />
                    <div className="validate" />
                  </div>
                </div>
                <div className="form-group">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" defaultValue={""} />
                  <div className="validate" />
                </div>
                <div className="mb-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your booking request was sent. We will call back or send an Email to confirm your reservation. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Book a Table</button></div>
              </form>
            </div>
          </section>{/* End Book A Table Section */}
          {/* ======= Testimonials Section ======= */}
          <section id="testimonials" className="testimonials section-bg">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Testimonials</h2>
                <p>What they Are saying about us</p>
              </div>
              <div className="owl-carousel testimonials-carousel" data-aos="zoom-in" data-aos-delay={100}>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="s" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="f" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="d" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="f" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </div>
                <div className="testimonial-item">
                  <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left" />
                    Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                    <i className="bx bxs-quote-alt-right quote-icon-right" />
                  </p>
                  <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="k" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </div>
              </div>
            </div>
          </section>{/* End Testimonials Section */}
          {/* ======= Gallery Section ======= */}
          <section id="gallery" className="gallery">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Gallery</h2>
                <p>Some photos from Our Restaurant</p>
              </div>
            </div>
            <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
              <div className="row no-gutters">
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-1.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-1.jpg" alt="e" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-2.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-2.jpg" alt="p" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-3.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-3.jpg" alt="j" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-4.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-4.jpg" alt="u" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-5.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-5.jpg" alt="h" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-6.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-6.jpg" alt="h" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-7.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-7.jpg" alt="r" className="img-fluid" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="gallery-item">
                    <a href="assets/img/gallery/gallery-8.jpg" className="venobox" data-gall="gallery-item">
                      <img src="assets/img/gallery/gallery-8.jpg" alt="r" className="img-fluid" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Gallery Section */}
          {/* ======= Chefs Section ======= */}
          <section id="chefs" className="chefs">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Chefs</h2>
                <p>Our Proffesional Chefs</p>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay={100}>
                    <img src="assets/img/chefs/chefs-1.jpg" className="img-fluid" alt="r" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Walter White</h4>
                        <span>Master Chef</span>
                      </div>
                      <div className="social">
                        <a href><i className="icofont-twitter" /></a>
                        <a href><i className="icofont-facebook" /></a>
                        <a href><i className="icofont-instagram" /></a>
                        <a href><i className="icofont-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay={200}>
                    <img src="assets/img/chefs/chefs-2.jpg" className="img-fluid" alt="r" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>Sarah Jhonson</h4>
                        <span>Patissier</span>
                      </div>
                      <div className="social">
                        <a href><i className="icofont-twitter" /></a>
                        <a href><i className="icofont-facebook" /></a>
                        <a href><i className="icofont-instagram" /></a>
                        <a href><i className="icofont-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="member" data-aos="zoom-in" data-aos-delay={300}>
                    <img src="assets/img/chefs/chefs-3.jpg" className="img-fluid" alt="r" />
                    <div className="member-info">
                      <div className="member-info-content">
                        <h4>William Anderson</h4>
                        <span>Cook</span>
                      </div>
                      <div className="social">
                        <a href><i className="icofont-twitter" /></a>
                        <a href><i className="icofont-facebook" /></a>
                        <a href><i className="icofont-instagram" /></a>
                        <a href><i className="icofont-linkedin" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Chefs Section */}
          {/* ======= Contact Section ======= */}
          <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
              <div className="section-title">
                <h2>Contact</h2>
                <p>Contact Us</p>
              </div>
            </div>
            <div data-aos="fade-up">
              <iframe style={{border: 0, width: '100%', height: '350px'}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder={0} allowFullScreen />
            </div>
            <div className="container" data-aos="fade-up">
              <div className="row mt-5">
                <div className="col-lg-4">
                  <div className="info">
                    <div className="address">
                      <i className="icofont-google-map" />
                      <h4>Location:</h4>
                      <p>A108 Adam Street, New York, NY 535022</p>
                    </div>
                    <div className="open-hours">
                      <i className="icofont-clock-time icofont-rotate-90" />
                      <h4>Open Hours:</h4>
                      <p>
                        Monday-Saturday:<br />
                        11:00 AM - 2300 PM
                      </p>
                    </div>
                    <div className="email">
                      <i className="icofont-envelope" />
                      <h4>Email:</h4>
                      <p>info@example.com</p>
                    </div>
                    <div className="phone">
                      <i className="icofont-phone" />
                      <h4>Call:</h4>
                      <p>+1 5589 55488 55s</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 mt-5 mt-lg-0">
                  <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                        <div className="validate" />
                      </div>
                      <div className="col-md-6 form-group">
                        <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                        <div className="validate" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                      <div className="validate" />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" name="message" rows={8} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                      <div className="validate" />
                    </div>
                    <div className="mb-3">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">Your message has been sent. Thank you!</div>
                    </div>
                    <div className="text-center"><button type="submit">Send Message</button></div>
                  </form>
                </div>
              </div>
            </div>
          </section>{/* End Contact Section */}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <footer id="footer">
          <div className="footer-top">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6">
                  <div className="footer-info">
                    <h3>Restaurantly</h3>
                    <p>
                      A108 Adam Street <br />
                      NY 535022, USA<br /><br />
                      <strong>Phone:</strong> +1 5589 55488 55<br />
                      <strong>Email:</strong> info@example.com<br />
                    </p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                      <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                      <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
                      <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
                      <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                  <h4>Useful Links</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Home</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">About us</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Services</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Terms of service</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Privacy policy</a></li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Design</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Web Development</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Product Management</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Marketing</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>
                <div className="col-lg-4 col-md-6 footer-newsletter">
                  <h4>Our Newsletter</h4>
                  <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  <form action method="post">
                    <input type="email" name="email" /><input type="submit" defaultValue="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              © Copyright <strong><span>Restaurantly</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
              {/* All the links in the footer should remain intact. */}
              {/* You can delete the links only if you purchased the pro version. */}
              {/* Licensing information: https://bootstrapmade.com/license/ */}
              {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/restaurantly-restaurant-template/ */}
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>
        </footer>{/* End Footer */}
        <div id="preloader" />
        <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt" /></a>
      </div>
        </div>
    );
}

export default Home;