import * as Yup from 'yup';

interface Window {
  yupub: any
}
declare var window: Window

window.yupub = Yup;

