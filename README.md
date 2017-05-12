# bel-card
Two-sided card that switches sides on hover

See [demo](https://ninabreznik.github.io/bel-card)

You can use bel-card as an NPM module
```bash
npm install bel-card
```
```js
var card = require('bel-card')

var el = card({
  name      : 'Nina Breznik',      
  /* name and surname will be displayed on the front page of the card */                                                
  username  : 'ninabreznik',                                                        
  /*
    username field will be displayed under the name and surname
    and  also for linking to the social media profiles
    var twitter           = `https://twitter.com/${username}`
    var github            = `https://github.com/${username}`
    var codepen           = `https://codepen.io/${username}`
  */
  cardText  : `Teaching JavaScript @wizardamigos.com |     
              Community builder @codingamigos.com |
              Hacktivist @refugeeswork.com |
              Client stuff @fairydust.agency`,    
  /* card text will be displayed on the back of the hard (visible on hover)*/                           
  imageUrl  : 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'   
  /* link to the image, displayed as a profile on the front page of the card */
})

document.body.appendChild(el)
```
