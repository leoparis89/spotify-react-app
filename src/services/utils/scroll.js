export const onBottomScroll = (cb) => {
  window.onscroll = (e) => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      cb();
    }
  };
};
