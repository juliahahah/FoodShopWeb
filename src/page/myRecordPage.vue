<template>
    <div>
      <!-- Header -->
      <div id="header">
        <div class="container">
          <!-- Logo -->
          <h1><router-link to="/">Horizons</router-link></h1>
          <!-- Nav -->
          <nav id="nav">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li>
                <a href="#">Dropdown</a>
                <ul>
                  <li><a href="#">Lorem ipsum dolor</a></li>
                  <li><a href="#">Magna phasellus</a></li>
                  <li><a href="#">Etiam dolore nisl</a></li>
                  <li>
                    <a href="#">Phasellus consequat</a>
                    <ul>
                      <li><a href="#">Lorem ipsum dolor</a></li>
                      <li><a href="#">Phasellus consequat</a></li>
                      <li><a href="#">Magna phasellus</a></li>
                      <li><a href="#">Etiam dolore nisl</a></li>
                      <li><a href="#">Veroeros feugiat</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Veroeros feugiat</a></li>
                </ul>
              </li>
              <li><router-link to="/left-sidebar">Left Sidebar</router-link></li>
              <li><router-link to="/right-sidebar">Right Sidebar</router-link></li>
              <li><router-link to="/no-sidebar">No Sidebar</router-link></li>
            </ul>
          </nav>
          <!-- Banner -->
          <div id="banner">
            <div class="container">
              <section>
                <header class="major">
                  <h2>Welcome to Horizons!</h2>
                  <span class="byline"
                    >… a responsive HTML5 site template freebie by <a href="http://templated.co">TEMPLATED</a>. Released for
                    free under the <a href="http://templated.co/license">Creative Commons Attribution</a> license, so use it
                    for whatever (personal or commercial) – just give us credit!</span
                  >
                </header>
                <router-link to="#" class="button alt">Sign Up</router-link>
              </section>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Featured -->
      <div class="wrapper style2">
        <section class="container">
          <header class="major">
            <h2>Nulla luctus eleifend</h2>
            <span class="byline">Mauris vulputate dolor sit amet nibh</span>
          </header>
          <div class="row no-collapse-1">
            <section class="4u">
              <router-link to="#" class="image feature">
                <img src="images/pic02.jpg" alt="" width="368" height="180" />
              </router-link>
              <p>
                Nam in massa. Sed vel tellus. Curabitur sem urna, consequat vel, suscipit in, mattis placerat.
              </p>
            </section>
            <section class="4u">
              <router-link to="#" class="image feature">
                <img src="images/pic03.jpg" alt="" width="368" height="180" />
              </router-link>
              <p>
                Donec ornare neque ac sem. Mauris aliquet. Aliquam sem leo, vulputate sed, convallis. Donec magna.
              </p>
            </section>
            <section class="4u">
              <router-link to="#" class="image feature">
                <img src="images/pic04.jpg" alt="" width="368" height="180" />
              </router-link>
              <p>Curabitur sem urna, consequat vel, suscipit convallis sem leo, mattis placerat, nulla. Sed ac leo.</p>
            </section>
          </div>
        </section>
      </div>
  
      <!-- Main -->
      <div id="main" class="wrapper style1">
        <section class="container">
          <header class="major">
            <h2>Nulla luctus eleifend</h2>
            <span class="byline">Mauris vulputate dolor sit amet nibh</span>
          </header>
          <div class="row">
            <!-- Content -->
            <div class="6u">
              <section>
                <ul class="style">
                  <li>
                    <span class="fa fa-wrench"></span>
                    <h3>Integer ultrices</h3>
                    <span>
                      In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate
                      enim.
                    </span>
                  </li>
                  <li>
                    <span class="fa fa-cloud"></span>
                    <h3>Aliquam luctus</h3>
                    <span>
                      Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus
                      accumsan.
                    </span>
                  </li>
                </ul>
              </section>
            </div>
            <div class="6u">
              <section>
                <ul class="style">
                  <li>
                    <span class="fa fa-cogs"></span>
                    <h3>Integer ultrices</h3>
                    <span>
                      In posuere eleifend odio. Quisque semper augue mattis wisi. Maecenas ligula. Pellentesque viverra vulputate
                      enim.
                    </span>
                  </li>
                  <li>
                    <span class="fa fa-leaf"></span>
                    <h3>Aliquam luctus</h3>
                    <span>
                      Pellentesque viverra vulputate enim. Aliquam erat volutpat. Maecenas condimentum enim tincidunt risus
                      accumsan.
                    </span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
  
      <!-- Footer -->
      <div id="footer">
        <div class="container">
          <!-- Lists -->
          <div class="row">
            <div class="8u">
              <section>
                <header class="major">
                  <h2>Donec dictum metus</h2>
                  <span class="byline">Quisque semper augue mattis wisi maecenas ligula</span>
                </header>
                <div class="row">
                  <section class="6u">
                    <ul class="default">
                      <li><a href="#">Pellentesque elit non gravida blandit.</a></li>
                      <li><a href="#">Lorem ipsum dolor consectetuer elit.</a></li>
                      <li><a href="#">Phasellus nibh pellentesque congue.</a></li>
                      <li><a href="#">Cras vitae metus aliquam pharetra.</a></li>
                    </ul>
                  </section>
                  <section class="6u">
                    <ul class="default">
                      <li><a href="#">Pellentesque elit non gravida blandit.</a></li>
                      <li><a href="#">Lorem ipsum dolor consectetuer elit.</a></li>
                      <li><a href="#">Phasellus nibh pellentesque congue.</a></li>
                      <li><a href="#">Cras vitae metus aliquam pharetra.</a></li>
                    </ul>
                  </section>
                </div>
              </section>
            </div>
            <div class="4u">
              <section>
                <header class="major">
                  <h2>Donec dictum metus</h2>
                  <span class="byline">Mattis wisi maecenas ligula</span>
                </header>
                <ul class="contact">
                  <li>
                    <span class="address">Address</span>
                    <span>1234 Somewhere Road #4285 <br />Nashville, TN 00000</span>
                  </li>
                  <li>
                    <span class="mail">Mail</span>
                    <span><a href="#">someone@untitled.tld</a></span>
                  </li>
                  <li>
                    <span class="phone">Phone</span>
                    <span>(000) 000-0000</span>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="copyright">Design by: <a href="https://templated.co/">TEMPLATED</a></div>
    </div>
  </template>
  
  <script>
  export default {
    name: "YourComponentName",
  };
  </script>
  
  <style scoped>
  /* Add your component-specific styles here */
  </style>
  