import Button from './Button.jsx';

function Header() {
  return (
    <div>
      <div className='mt-9 bg-black p-9 font-semibold'>
        <span>GoEco</span>
        <img src='/img/logo.png' alt='logo' />
      </div>
      <Button> Zec mi</Button>
    </div>
  );
}

export default Header;
