function myFunction() {
    const number = +916201785597;

     var anchor = document.createElement('a');
     anchor.href = `https://wa.me/${number}?text=Hello%2C%20how%20are%20you%3F`;
     anchor.target = '_self';
     anchor.click();
  }