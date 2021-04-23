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
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">E-DEALS</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title">HTML, CSS, Rails</p>
    <a href="https://github.com/marcode95/e-deals" class="github-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    <a href="https://desolate-beach-15262.herokuapp.com/" class="project-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
  </div>`;
})
projectImageContainers[0].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})

projectImageContainers[1].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">TO-DO'S</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title">HTML, CSS, Javascript</p>
    <a href="https://github.com/marcode95/to-do-list" class="github-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    <a href="https://cocky-ardinghelli-805b0e.netlify.app/" class="project-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
  </div>`;
})
projectImageContainers[1].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})

projectImageContainers[2].addEventListener('mouseenter', (e) => {
  e.target.innerHTML = `
  <div class="project-description w-100 h-100 d-flex flex-column align-items-center">
    <p class="project-title" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">PRO-CON</p>
    <p class="project-stack" data-aos="fade-down" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title">HTML, CSS</p>
    <a href="https://github.com/marcode95/HTML-CSS-capstone" class="github-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">GITHUB</a>
    <a href="https://raw.githack.com/marcode95/HTML-CSS-capstone/feature/index.html" class="project-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title" target="_blank">LIVE DEMO</a>
  </div>`;
})
projectImageContainers[2].addEventListener('mouseleave', (e) => {
  e.target.innerHTML = ``;
})
