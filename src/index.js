import $ from 'jquery';
import './style.scss';

let num = 0;
setInterval(function () {
  $('#main').html(`You have been on this page for ${num} seconds`);
  num++;
}, 1000);
