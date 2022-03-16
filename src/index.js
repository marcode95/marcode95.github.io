import canvas from './components/canvas';
canvas();

const mediaQuery = window.matchMedia('(max-width: 540px)')

const handleTabletChange = (e) => {
  if (e.matches) {
    const selfStack = document.querySelectorAll("div.self-stack-check, span.self-stack-name");
    for (let i = 0; i < selfStack.length; i++) {
      let item = selfStack[i];
      item.setAttribute('data-aos', '')
    }
  }

  else {
    const selfStackName = document.querySelectorAll("span.self-stack-name");
    const selfStackCheck = document.querySelectorAll("div.self-stack-check");
    for (let i = 0; i < selfStackName.length; i++) {
      let item = selfStackName[i];
      item.setAttribute('data-aos', 'fade')
    }
    for (let i = 0; i < selfStackCheck.length; i++) {
      let item = selfStackCheck[i];
      item.setAttribute('data-aos', 'fade-left')
    }
  }
}

mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

const projectImageContainers = document.querySelectorAll('div.project-image-container');

projectImageContainers[0].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="600">IN THE WOODS</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500" data-aos-anchor=".project-title">JavaScript / Phaser</p>
    <p class="project-summary" data-aos="fade-down" data-aos-delay="400" data-aos-duration="400" data-aos-anchor=".project-title">Sidescroller Jump 'n Run game including shooting enemies, collecting coins, an end boss fight, and a leaderboard API.</p>
    <div class="d-flex">
      <a href="https://agitated-curie-05b9b2.netlify.app/" class="github-link" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
      <a href="https://github.com/marcode95/phaser-game" class="github-link" data-aos="fade-left" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    </div>
  </div>`;
})
projectImageContainers[0].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})

projectImageContainers[1].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="600">IN THE WOODS</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500" data-aos-anchor=".project-title">VCL / NG-VCL</p>
    <p class="project-summary" data-aos="fade-down" data-aos-delay="400" data-aos-duration="400" data-aos-anchor=".project-title">A comprehensive library of components for Angular 11+ with VCL based styling.</p>
    <div class="d-flex">
      <a href="https://vcl.github.io/" class="github-link" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
      <a href="https://github.com/vcl" class="github-link" data-aos="fade-left" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    </div>
  </div>`;
})
projectImageContainers[1].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})

projectImageContainers[2].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
    <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
      <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="600">E-DEALS</p>
      <p class="project-stack" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500" data-aos-anchor=".project-title">HTML / CSS / Rails</p>
      <p class="project-summary" data-aos="fade-down" data-aos-delay="400" data-aos-duration="400" data-aos-anchor=".project-title">Mobile app for keeping track of the user's spendings. Turn on 'Touch Simulation' in Firefox when checking it out!</p>
      <div class="d-flex">
        <a href="https://desolate-beach-15262.herokuapp.com/" class="github-link" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
        <a href="https://github.com/marcode95/e-deals" class="github-link" data-aos="fade-left" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
      </div>
    </div>`;
})
projectImageContainers[2].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})

projectImageContainers[3].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="600">PRO-CON</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500" data-aos-anchor=".project-title">HTML / CSS</p>
    <p class="project-summary" data-aos="fade-down" data-aos-delay="400" data-aos-duration="400" data-aos-anchor=".project-title">HTML&CSS website for selling gaming controllers.</p>
    <div class="d-flex">
      <a href="https://raw.githack.com/marcode95/HTML-CSS-capstone/feature/index.html" class="github-link" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
      <a href="https://github.com/marcode95/HTML-CSS-capstone" class="github-link" data-aos="fade-left" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    </div>
  </div>`;
})
projectImageContainers[3].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})

projectImageContainers[4].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="600">TO-DO'S</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="300" data-aos-duration="500" data-aos-anchor=".project-title">HTML / CSS / JavaScript</p>
    <p class="project-summary" data-aos="fade-down" data-aos-delay="400" data-aos-duration="400" data-aos-anchor=".project-title">The classic: An app for keeping track of the user's "to-do's" built with JS!</p>
    <div class="d-flex">
      <a href="https://cocky-ardinghelli-805b0e.netlify.app/" class="github-link" data-aos="fade-right" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
      <a href="https://github.com/marcode95/to-do-list" class="github-link" data-aos="fade-left" data-aos-delay="200" data-aos-duration="600" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    </div>
  </div>`;
})
projectImageContainers[4].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})