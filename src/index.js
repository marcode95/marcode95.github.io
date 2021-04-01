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