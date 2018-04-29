require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


//获取图片相关的数据
let imageDatas = require('../data/imageData.json');

//利用自执行函数，将图片名信息转换成图片url路径信息
imageDatas = (function getImageURL(imageDatasArray){
   for(let i = 0;i<imageDatasArray.length;i++){
        var singleImageData = imageDatasArray[i];
        singleImageData.imageURL = require('../images/'+singleImageData.fileName);
        imageDatasArray[i] = singleImageData;
   }
  return imageDatasArray;
})(imageDatas);


class AppComponent extends React.Component {
  render() {
    return (
     <section className="stage">
             <section className="img-sec"></section>
             <nav className="controller-nav">

             </nav>
     </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
