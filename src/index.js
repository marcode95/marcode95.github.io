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





document.querySelectorAll('div.project-image-container').forEach(item => {
  item.addEventListener('mouseenter', (e) => {
    e.target.innerHTML = `
    <div class="project-description w-100 h-100 d-flex flex-column justify-content-between align-items-center">
      <div class="project-title-stack-container data-aos="fade-down" data-aos-delay="200" data-aos-duration="500">
        <p class="project-title">Project</p>
        <p class="project-stack">Javascript</p>
      </div>
      <a href="#" class="project-link" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-anchor=".project-title-stack-container">LIVE DEMO</a>
    </div>`;
  })
  item.addEventListener('mouseleave', (e) => {
    e.target.innerHTML = ``;
  })
})
