var csjs = require('csjs-inject')
var bel = require('bel')
var card = require('./')

/* DEFAULT CARD */
var default_el = card({
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


document.body.appendChild(default_el)

/* CARD WITH CUSTOM THEME */

/* To change the styling add var theme with classes you want to overwrite */
var fonts = ['https://fonts.googleapis.com/css?family=Muli']
var fontMuli = bel`<link href=${fonts[0]} rel="stylesheet">`
var font_muli = 'Muli, sans-serif'

document.head.appendChild(fontMuli)

var theme = csjs`
  .card {
    font-family: ${font_muli};
    margin-top: 20px;
    background-color: pink;
    width: 400px;
    height: 300px;
    padding: 1em;
  }
  .cardContainer,
  .cardContainer_hover {
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-animation: transitionIn 0.3s ease-in;
    -moz-animation: transitionIn 0.3s ease-in;
    -o-animation: transitionIn 0.3s ease-in;
    animation: transitionIn 0.3s ease-in;
  }
  .profileImage {
    border-radius: 5px;
    width: 13em;
    height: 13em;
  }
  .cardTitle {
    margin-top: 2em;
    font-weight: bold;
    font-size: 1em;
  }
  .cardSubtitle {
    margin-top: .3em;
    font-size: 1.2em;
    color: white;
  }
  .cardText {
    font-size: 1.3em;
    line-height: 120%;
    text-weight: bold;
    border: 2px dotted white;
    border-radius: 5px;
    padding: 1em;
    text-align: center;
  }
  .cardSocial {
    margin-top: 1em;
  }
  .cardSocial a {
    text-decoration: none;
  }
  .cardSocial_fontawesome {
    color: black;
    font-size: 1.2em;
    padding: .3em;
  }
  .cardProjects {
    margin-top: .8em;
    padding: .5em 1em;
    text-decoration: none;
    font-size: 1.3em;
    border-radius: 3px;
    background-color: grey;
    color: white;
  }
`

var custom_el = card({
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
  imageUrl  : 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg',
  /* link to the image, displayed as a profile on the front page of the card */
  theme     : theme
})

document.body.appendChild(custom_el)
