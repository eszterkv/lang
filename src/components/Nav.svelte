<script>
  export let segment
</script>

<nav>
  <ul>
    <li>
      <a aria-current='{segment === undefined ? "page" : undefined}' href='.'>
        Book
      </a>
    </li>
    <li>
      <a aria-current='{segment === "about" ? "page" : undefined}' href='about'>
        About
      </a>
    </li>
  </ul>
</nav>

<style>
  nav {
    padding: 0 1em;
    font-family: 'IBM Plex Sans';
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: .5px;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: '';
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  a {
    opacity: .4;

    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }

  a[aria-current] {
    opacity: 1;
  }
</style>
