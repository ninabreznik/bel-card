var bel = require('bel')
var csjs = require('csjs-inject')

module.exports = card

function card (data) {
  if (!data) data = {}
  var name              = data.name || 'Example name'
  var username          = data.username || 'exampleusername'
  var cardText          = data.cardText || 'This is an example text'
  var imageUrl          = data.imageUrl || 'https://nomadlist.com/assets/img/cities/phuket-thailand-500px.jpg'
  /* --------------------------------------------------------
                            FONTS
  ---------------------------------------------------------- */

  var fonts             = ['https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css', 'https://fonts.googleapis.com/css?family=Ubuntu']
  var fontAwesome       = bel`<link href=${fonts[0]} rel='stylesheet' type='text/css'>`
  var fontUbuntu        = bel`<link href=${fonts[1]} rel="stylesheet">`
  var font_ubuntu       = 'Ubuntu, sans-serif'
  document.head.appendChild(fontAwesome)
  document.head.appendChild(fontUbuntu)
  /* --------------------------------------------------------
                          VARIABLES
  ---------------------------------------------------------- */
  var twitter           = `https://twitter.com/${username}`
  var github            = `https://github.com/${username}`
  var codepen           = `https://codepen.io/${username}`

  // COLORS
  var backgroundWhite   = '##f6f6f6'
  var fontGrey          = '##606060'
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

  // HTML
  var cardContainer = bel`
    <div class=${css.cardContainer}>
      <img src=${imageUrl} class=${css.profileImage}></img>
      <div class=${css.cardTitle}>${name}</div>
      <div class=${css.cardSubtitle}>@${username}</div>
    </div>
  `
  var el = bel`
    <div class=${css.card} onmouseenter=${hoverCard} onmouseleave=${unhoverCard}>
      ${cardContainer}
    </div>
  `

  // HELPERS

  /* --------------------------------------------------------
                    CARD EVENT LISTENERS
  ---------------------------------------------------------- */

  /* --------------- hover & unhover the card ---------------*/

  var cardContainer_hover = bel`
    <div class=${css.cardContainer_hover}>
      <div class=${css.cardText}>${cardText}</div>
      <div class=${css.cardSocial}>
        <a href=${twitter} target='_blank'>
          <i class="${css.cardSocial_fontawesome} fa fa-twitter" aria-hidden="true"></i></a>
        <a href=${github} target='_blank'>
          <i class="${css.cardSocial_fontawesome} fa fa-github" aria-hidden="true"></i>
        </a>
        <a href=${codepen} target='_blank'>
          <i class="${css.cardSocial_fontawesome} fa fa-codepen" aria-hidden="true"></i>
        </a>
      </div>
      <div class=${css.cardProjects} onclick=${showProjects}>See My Projects!</div>
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
