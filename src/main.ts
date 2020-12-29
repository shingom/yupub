import * as Yup from 'yup';

interface Window {
  yup: any
}
declare var window: Window

window.yup = Yup;

