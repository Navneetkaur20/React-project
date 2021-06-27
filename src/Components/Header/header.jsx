import React from 'react';
import HeadInfo from './Contactinfo';
import Menu from './menu';
const Header =()=>{
return(
<header>
<div className="container">
<div className="header-top">
<div className="row between a-center">

   <div class="logo">
      <img src="img/logo.png"/>
    </div>

<div class="list">
<HeadInfo/>

</div>
</div>
</div>

<div className="nav-list">
<Menu/>
</div>
</div>
</header>

)

}

export default Header;
