# namastae react


# parcel
- dev build
- local server
- HMR= hot module replacement
- file watching algorithm- written in c++
- caching - faster Builds
- image opitimizaztion
- minification of file
- bundling
- compress
-  consistent hashing
- code spliting
- differtial bundling-support older browsers
- diagnostic 
- error handling
- https 
- tree shacking- remove usued produbt
- differebt dev and prod bundals
******************************************************************************************
    **food ordering app**
    /* 
* Header
-logo
-menubar lists
-cart
* Body
- search bar and seacrh button
- reastarant card(card)
* footer
- copy rights
- links
- address
- contact

*/

# REACT HOOKS
(normal JS utility funtion)
- useState() -super powerfull state variables in react: whenever state variable updates react rerenders the component
whenever state variable changes react re renders the components
- useEffect()

###### MONOLITH ARCHITECTURE  #####

## json extension viewer active
## cors extension 
swiggy api:
https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

## shimmer ui: 
load with shimmer ui , instead ofloaading we can use shimmer ui

## NOTES
WHENEVER STATE variables update, react  triggers a reconciliation cycle(re-renders the component)
## two types of routing in web apps
- clilent side routing:all the componnets are alredy loaded into app, when we want to load particular its load or refesh the page

- server side routing : network calls  the page by different .html page
## useEffect Hook:
useEffect is called from reactlbr after every time header component render useeffect will called
()=>{}call back funtions
[]dependecy 
# useState:
it is used for creating local state variable inside yor fuctional components
- don't do the state variables in for loop, conditons and inside the funtions it will create inconsistenct in your program
- it will crete inside the functiona components on the top layer 
#### REACT LIFE CYLCE DIAGRAM ####- projects.wotekmaj.

#### Mounting
- mounting is an life cycle method. it has render phase and commit phase
- render phase:
  * constructor 
  * render
- commit phase:
  * React updates the DOM 

  
- constructor(dummy)
- render(dummy)
- <Html Dummy>
- Component didMount
      <API call>
      <this.setState>-> State variable os updated
 ### UPDATAE
      - render (Api data)
      - <Html (new api data)>
      - ComponentDidUpdate
       /* .header{ 
display: flex;
justify-content: space-between;
background-color: goldenrod;
}
.logo {
width: 100px;
margin-left: 20px;
margin-top: 1px;

}

.nav-items > ul {
display: flex;
font-size: 20px;
}
.nav-items >ul > li{
padding: 10px;
margin: 10px;

list-style-type: none;
}
.res-card{
padding: 5px;
width: 250px;
margin-top: 10px;
margin: 10px;
transition: transform .1s;

}
.res-card:hover{
cursor: pointer;
border: 1px solid black;
transform: scale(1.05);
}
.res-img{
width: 250px;
height: 150px;
object-fit: cover;
}
.icon{
justify-content: space-between;
}
.food-container{
display: flex;
flex-wrap: wrap;
}
.menu-container{
border: 1px solid black;
border-radius: 50px;
background-color: rgb(200, 216, 246);
}
.menu-container > ul{
display: flex;
gap: 10px;
}
.menu-container>ul>li{
list-style-type: none;
padding: 10px;
margin: 20px;
align-items: center;

}
#i{
font-size: 30px;
}
.sign-in-button{
display: inline-flex;
align-items: center;
cursor: pointer;
border: none;
background-color: rgb(2, 29, 57);
margin: 5px;
padding: 10px;
color: white;
}
.sign-in-button i{
margin-left: 5px;
font-size: 10px;
}
.dropdown-menu{
background-color: white;
box-shadow: 0 4px 8px rgba(0,0,0,0.1);
list-style: none;
padding: 10px;
z-index: 1;
min-width: 160px;}
.dropdown-menu i{
margin: 5px 0;

}

.dropdown-item {
margin: 5px;
padding: 10px;
display: flex;
align-items: center;
text-decoration: none;
color: black;
text-transform: capitalize;

}
.dropdown-menu a:hover{
background-color: rgb(146, 138, 138);
}
.dropdown-toggle{
content: '';
display: block;


}
.dropdown-content {
margin-top: 10px;
}
.bi-chevron-down{
font-size: 10px;
}
.loan-img{
width: 50px;
margin: 8px; 
margin-top: 5px; }
.loan{
border: 1px solid black;
width: 60px;
height: 100px;
background-color: rgb(32, 32, 78);

}
.price{
background-color: blueviolet;
border: 1px solid blueviolet;
width: 100px;
}
.filter-btn{
margin: 10px;
cursor: pointer;
}
.shimmer-container{
display: flex;
flex-wrap: wrap;
}
.shimmer-card{
width: 200px;
height: 350px;
margin: 20px;
background-color: #f0f0f0;
}
.filter{
display: flex;
margin: 10px;
}
.search{
margin: 10px;
}
a{
text-decoration: none;
color: inherit;
}
a:hover{
font-size: 15;  }
.resdetails{
text-align: center;
}
.resName{
margin-left: 1px;
}
.Menu-card{
border: 1px solid rgb(190, 185, 185);
justify-content: center;
text-align:left;
align-items: center;
width: 50%;
margin: 20px;
margin-left: 30%;
border-radius: 30px;
box-shadow:  10px 10px 5px rgba(196, 191, 191, 0.5), /* right 
       -10px 10px 5px rgba(190, 182, 182, 0.5), /* left 
0 10px 5px rgba(192, 184, 184, 0.5);     /* bottom 


}
.Menu-card .menu{
margin-left: 20px;

}
.Menu-card .cuisine{
color: orangered;
border-bottom: 1px solid;
width: 28%;
}
.resdetails .order{
display: flex;
margin: 10px;
margin-left: 30%;
width: 50%;
text-align: left;
border-bottom: 1px solid grey;

}

.dine{
margin-left: 30px;

}
.online{
border-bottom:5px solid orangered ;
}
.user-card {
padding: 10px;
border: 1px rgb(9, 9, 9) solid;
}
.userClass-card{
padding: 10px;
border: 1px solid rgb(9,9,9);
}
.rec-list{
padding: 10px;
border-bottom: 1px solid rgb(212, 210, 210);
margin: 10px;
width: 50%;
list-style-type: none;
text-align: left;
display: flex;
justify-content: space-between;
align-items: center;
}
.recommendations {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
}
.rec-content{
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
}
.rec-details{
flex: 1;
padding-right: 20px;
}
.rec-img{
width: 100px;
height:auto;
object-fit: cover; */

### Redux toolkit###
- install @reduxjs/toolkit and  npm i react-redux
- Build our  store
- connect our store to our app
- slice (cartSlice)
- dispatch(action)
- Selector