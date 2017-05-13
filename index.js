var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = card
/* --------------------------------------------------------
FONTS
---------------------------------------------------------- */

var fonts             = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', 'https://fonts.googleapis.com/css?family=Ubuntu']
var fontAwesome       = bel`<link href=${fonts[0]} rel='stylesheet' type='text/css'>`
var fontUbuntu        = bel`<link href=${fonts[1]} rel="stylesheet">`
var font_ubuntu       = 'Ubuntu, sans-serif'
document.head.appendChild(fontAwesome)
document.head.appendChild(fontUbuntu)

// COLORS
var backgroundWhite   = '#f6f6f6'
var fontGrey          = '#606060'
var borderGrey        = '#fafafa'
var green             = '#2a9c6d'
var red               = '#d41304'

// CSS
var css = csjs`
.card {
  font-family: ${font_ubuntu};
  background-color: ${backgroundWhite};
  border: 2px solid ${borderGrey};
  box-shadow: 0 1px 2px rgba(34,25,25,0.4);
  width: 300px;
  height: 280px;
  padding: 1em;
}
.card:hover {
  cursor: pointer;
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
  border-radius: 50%;
  width: 10em;
  height: 10em;
}
.cardTitle {
  margin-top: 1em;
  font-weight: bold;
  font-size: 2em;
}
.cardSubtitle {
  margin-top: .3em;
  font-size: 1.3em;
  color: ${green};
}
.cardText {
  font-size: 1em;
  line-height: 120%;
  text-weight: bold;
  border: 2px dotted ${red};
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
  color: ${green};
  font-size: 2em;
  padding: .3em;
}
.cardProjects {
  margin-top: .8em;
  padding: .5em 1em;
  text-decoration: none;
  font-size: 1.3em;
  border-radius: 3px;
  background-color: ${green};
  color: white;
}
@keyframes transitionIn {
  0% {opacity: 0.1}
  100% {opacity: 1}
}
`

function card (data) {
  if (!data) data = {}
  /* --------------------------------------------------------
  VARIABLES
  ---------------------------------------------------------- */
  var name              = data.name || 'Example name'
  var username          = data.username || 'exampleusername'
  var cardText          = data.cardText || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  var imageUrl          = data.imageUrl || 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'
  var twitter           = `https://twitter.com/${username}`
  var github            = `https://github.com/${username}`
  var codepen           = `https://codepen.io/${username}`

  var classes = {}
  if (data.theme) {
    classes.card                      = data.theme.card || css.card
    classes.cardContainer             = data.theme.cardContainer || css.cardContainer
    classes.cardContainer_hover       = data.theme.cardContainer_hover || css.cardContainer_hover
    classes.profileImage              = data.theme.profileImage || css.profileImage
    classes.cardTitle                 = data.theme.cardTitle || css.cardTitle
    classes.cardSubtitle              = data.theme.cardSubtitle || css.cardSubtitle
    classes.cardText                  = data.theme.cardText || css.cardText
    classes.cardSocial                = data.theme.cardSocial || css.cardSocial
    classes.cardSocial_fontawesome    = data.theme.cardSocial_fontawesome || css.cardSocial_fontawesome
    classes.cardProjects              = data.theme.cardProjects || css.cardProjects
  } else {
    classes = css
  }

  // HTML
  var cardContainer = bel`
    <div class=${classes.cardContainer}>
      <img src=${imageUrl} class=${classes.profileImage}></img>
      <div class=${classes.cardTitle}>${name}</div>
      <div class=${classes.cardSubtitle}>@${username}</div>
    </div>
  `
  var el = bel`
    <div class=${classes.card} onmouseenter=${hoverCard} onmouseleave=${unhoverCard}>
      ${cardContainer}
    </div>
  `

  // HELPERS

  /* --------------------------------------------------------
                    CARD EVENT LISTENERS
  ---------------------------------------------------------- */

  /* --------------- hover & unhover the card ---------------*/

  var cardContainer_hover = bel`
    <div class=${classes.cardContainer_hover}>
      <div class=${classes.cardText}>${cardText}</div>
      <div class=${classes.cardSocial}>
        <a href=${twitter} target='_blank'>
          <i class="${classes.cardSocial_fontawesome} fa fa-twitter" aria-hidden="true"></i></a>
        <a href=${github} target='_blank'>
          <i class="${classes.cardSocial_fontawesome} fa fa-github" aria-hidden="true"></i>
        </a>
        <a href=${codepen} target='_blank'>
          <i class="${classes.cardSocial_fontawesome} fa fa-codepen" aria-hidden="true"></i>
        </a>
      </div>
      <div class=${classes.cardProjects} onclick=${showProjects}>See My Projects!</div>
    </div>`

  function hoverCard (event) {
    el.appendChild(cardContainer_hover)
    el.removeChild(cardContainer)
  }

  function unhoverCard (event) {
    el.removeChild(cardContainer_hover)
    el.appendChild(cardContainer)
  }

  /* -------------------- showProjects ---------------------*/

  function showProjects () {
    console.log('See, these are my projects')
  }

  return el

}
