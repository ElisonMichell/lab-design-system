import clsx from 'clsx';
import { useState } from 'react';

function Switch() {
  const [checked, setChecked] = useState(false);

  return(
    <button 
      onClick={() => setChecked(!checked)}
      className={clsx(
        'relative h-6 w-12 rounded-full bg-light-200 border-light-100 drop-shadow-3D',
        'transition-colors duration-200 ease-in-out',
        { 'bg-dark-200 border-dark-100' : checked }
      )}
    >
      <div 
        className={clsx(
          'w-4 h-4 rounded-full bg-primary-200 transition-all duration-200 ease-in-out',
          { 
            'translate-x-7 bg-light-200' : checked === true,
            'translate-x-1 bg-dark-100' : checked === false
          }
        )}
      />
    </button>
  )
}
export default Switch;