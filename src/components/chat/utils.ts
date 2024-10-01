export const isAtBottom = () => {
  return window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
};

export const scrollBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    left: 0,
    behavior: 'smooth'
  });
}

export const scrollFunc = (isFirstRender: any) => {
  if (isFirstRender.current){
    isFirstRender.current = false;
    scrollBottom()
  }else{
    if (!isAtBottom()) {
      scrollBottom();
    }
  }
}