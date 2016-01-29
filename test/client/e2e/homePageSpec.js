describe('homepage', function() {
  beforeEach(function() {
    return browser.ignoreSynchronization = true;
  });
   
  it('should ask for registration', function() {
    browser.get('/');
    expect(element(by.css('.intro')).getText()).toEqual("Enter Registration");
  });
});