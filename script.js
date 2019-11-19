//console.log(row); 
// Exo 1 compteur click footer 
  // Find
  let theFooter = document.getElementsByTagName('footer')[0];
  // Init
  let nbClick = 0;
  theFooter.addEventListener('click',onFooterClick);
  // Do
  function onFooterClick() {
      console.log(`Clique`)
      nbClick += 1;
      console.log(`Clic numéro : ${nbClick}`);
  }

// Exo 2 Hamburger menu
  //find
    let navbarButton = document.querySelector('button');
    let navbarHeader = document.getElementById('navbarHeader');
  //init
    let navbarHeaderStatus = false;
    navbarButton.addEventListener('click',navbarCollapse);
  //Do
    function navbarCollapse(){
      if (navbarHeaderStatus) {
        navbarHeader.classList.add("collapse");
      } else {
        navbarHeader.classList.remove("collapse");
      }
      navbarHeaderStatus = ~ navbarHeaderStatus;

    }

// Exo 3 
  //find
    let card1text = document.querySelector('.card-text');
    let card1Button = document.querySelector('.btn-group .btn-outline-secondary');
  //Init
    card1Button.addEventListener('click',textInRed);
  //do 
    function textInRed(){
      card1text.style.color = 'red';
    }

// Exo 4
  //find
    let card2Text = document.querySelectorAll('.card-text')[1];
    let card2Button = document.querySelectorAll('.btn-group .btn-outline-secondary')[1];
  //Init
    card2Button.addEventListener('click',toggleTextGreen);
  //Do 
    function toggleTextGreen (){
      if (card2Text.style.color == "rgb(33, 37, 41)") {
        card2Text.style.color = "green";
      }
      else {
        card2Text.style.color ="rgb(33, 37, 41)";
      }
    }


// Exo 5
  //find
    let navBar = document.getElementsByTagName("Header")[0];
    let navBarLink = document.getElementsByTagName("Link")[0];
  //Init
    navBar.addEventListener("dblclick", toggleBootstrap );
  //Do
    function toggleBootstrap() {
      if (navBarLink.href == "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
        navBarLink.href = "#";
      }
      else {
        navBarLink.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      }
    };

// Exo 6
  // Find
    let cards = document.querySelectorAll('.card');
    let cardViewButtons = document.querySelectorAll('.btn-success');
  // Init
    let isCollapsed = [];
  // Do 
    for (let i = 0; i < cardViewButtons.length; i++) {
      isCollapsed[i] = false
      cardViewButtons[i].addEventListener('mouseover',function (){
        if (isCollapsed[i]) {
          cards[i].getElementsByClassName('card-text')[0].classList.remove("collapse");
          cards[i].getElementsByClassName('card-img-top')[0].style.width = "100%";
        } else {
          cards[i].getElementsByClassName('card-text')[0].classList.add("collapse");
          cards[i].getElementsByClassName('card-img-top')[0].style.width = "20%";
        }
        isCollapsed[i] = ~ isCollapsed[i]
      });
    };

// Exo 7
  // Find
    let buttonRight = document.getElementsByClassName("btn btn-secondary my-2")[0];
    let row = document.getElementsByClassName("row")[1];

  // Init
    buttonRight.addEventListener("click", moveRight );
  // Do
    function moveRight() {
      row.insertBefore(row.getElementsByClassName("col-md-4")[5], row.getElementsByClassName("col-md-4")[0]);
    };

// Exo 8
  // find
    var left = document.getElementsByClassName("btn btn-primary my-2")[0];
  // Init
    left.addEventListener("click", moveLeft);
  // Do
    function moveLeft() {
      left.removeAttribute("href");
      for (let i = 0; i < 5; i++) {
        row.insertBefore(row.getElementsByClassName("col-md-4")[5], row.getElementsByClassName("col-md-4")[0]);
      }
    };

// exo 9
