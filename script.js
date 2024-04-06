// var tabela = document.getElementById('table');
// function CriaColuna(IMG,URL,Video){
//   var td = document.createElement('td');
//   var div = document.createElement('div');
//     div.classList.add('box');
//     div.style = 'background-image: url('+IMG+')';
//   var a = document.createElement('a');
//     a.href = URL;
//     a.target = '_blank';
//   var legend = document.createElement('legend');
//   var b = document.createElement('b');
//     b.innerHTML = Video;
//   legend.appendChild(b);
//   a.appendChild(legend);
//   div.appendChild(a);
//   td.appendChild(div);
//   return td;
// };

fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLy72FHfxKPDgVOnEj7gydNMKO0S6a9sJW&key=AIzaSyAJuOk3vN2zB-1Jtqd2yBBSp3VRuNTrbSo')
.then(res => {
  return res.json();
})
.then(data => {
  data.items.forEach((curr) => {
  Title = curr.snippet.title;
  URLVi = 'https://youtu.be/'+curr.snippet.resourceId.videoId
  URLIm = 'https://i.ytimg.com/vi/'+curr.snippet.resourceId.videoId+'/maxresdefault.jpg'
  
  Html = `<div class="box" style='background-image: url(${URLIm}'><a href="${URLVi}" target="_blank" ><legend><b>${Title}</b></legend></div>`
    
  // `<div class='column' style='background-image: url(${URLIm}'>
  // <a href="${URLVi}" target="_blank"><h2>${Title}</h2></a>
  // </div>`
  // count = data.length;
  // console.log(Title);
    
  document.getElementById('table').insertAdjacentHTML('beforeend',Html)
    
  });
})
