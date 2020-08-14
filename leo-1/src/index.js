import _ from 'lodash';
// 引入样式文件
import './style/index.css';
import './style/leo.scss';

function createElement(){
    let div = document.createElement('div');
    div.innerHTML = _.join(['my', 'name', 'is', 'leo'], '');
    div.className = 'box';
    return div;
}
document.body.appendChild(createElement());