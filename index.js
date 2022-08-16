const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'img/dndgenerate.png') {
    myImage.setAttribute('src','img/dndgenerate_reverse.png');
  } else {
    myImage.setAttribute('src','img/dndgenerate.png');
  }
}
