const Navbar =()=>{
    return(
        <div>
        <div class="navbar ">
  <div class="flex-1">
    <a className="text-3xl font-bold">LOGO</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><a>Home</a></li>
      <li><a>Portfolio</a></li>
      <li><a>Contact us</a></li>
      <li><a><button class="btn btn-sm btn-warning">Sign in</button></a></li>
    </ul>
  </div>
  </div>
  <hr></hr>
</div>
    )
}
export default Navbar;