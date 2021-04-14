import {A} from 'hookrouter'

export const Navbar = () => {
  return (
    <div>
      <h1>John Stephenson STL's WebSite</h1>
      <div style={{ display: "flex", justifyContent: 'space-around', padding: '20px', borderBottom: '1ps solid grey' }}>
        <A href='/'>Home</A>
        <A href='/about'>About</A>
        <A href='/contact/1234'>Contact</A>
        <A href='/demo'>Demo</A>
      </div>
    </div>
  )
}