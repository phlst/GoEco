import Button from './Button.jsx';

function Header() {
  return (
    <div>
      <div className='align-items flex h-20 w-full justify-between p-4 py-3'>
        <div className='flex items-center justify-center'>
          <span className='font-bold'>GoEco</span>
          <img className='h-12' src='/img/logo.png' alt='logo' />
        </div>
        <div className='flex items-center justify-center'>
          <Button size='sm' variant='primary'>
            <span> Find Route </span>
            <box-icon name='search'></box-icon>
          </Button>
          <box-icon className='pl-2' size='lg' name='menu'></box-icon>
        </div>
      </div>
    </div>
  );
}

export default Header;
