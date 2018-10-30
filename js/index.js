(function () {
  let devWidth = 640;
  let clientWidth = document.documentElement.clientWidth;
  let ratio = clientWidth / devWidth;
  let mainEle = document.querySelector('.main');
  if (clientWidth > devWidth) {
    mainEle.style.margin = '0 auto';
    mainEle.style.width = devWidth + 'px';
    return
  }
  document.documentElement.style.fontSize = ratio * 100 + 'px';
})();



initSwiper();

function initSwiper() {
  new Swiper('.swiper-container', {
    loop: true,
    direction : 'vertical',
    on: {
      slideChangeTransitionEnd: function () {
        let slideArr = this.slides;
        let curIndex = this.activeIndex;
        let allCount = slideArr.length;

        let tarId = 'page';
        switch (curIndex) {
          case 0:
            tarId += allCount - 2;
            break;
          case (allCount - 1):
            tarId += 1;
            break;
          default:
            tarId += curIndex
        }

        Array.from(slideArr).forEach(function (item, index) {
          if (curIndex === index) {
            item.id = tarId;
            return;
          }
          item.id = ''
        })
      }
    }
  })
}

(function () {
  let musicEle = document.getElementsByClassName('music')[0];
  let audioEle = document.getElementById('music-audio');

  musicEle.addEventListener('click', function () {
    if (audioEle.paused) {  // 判断暂停
      audioEle.play();
      musicEle.className = 'music rotate';
      return
    }
    audioEle.pause();
    musicEle.className = 'music';
  }, false);

  function controlMusic() {
    audioEle.volume = 0.1;
    audioEle.play();
    audioEle.addEventListener('canplay', function () {
      musicEle.style.display = 'block';
      musicEle.className = 'music rotate'
    }, false)
  }

  window.setTimeout(controlMusic, 1000)
})();