import { NgxMaterialPasswordStrengthDemoPage } from './app.po';

describe('ngx-material-mat-password-strength-demo App', () => {
  let page: NgxMaterialPasswordStrengthDemoPage;

  beforeEach(() => {
    page = new NgxMaterialPasswordStrengthDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
