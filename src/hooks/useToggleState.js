import { useState } from 'react';

function useToggleState(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const handleChange = () => {
    setValue(!value);
  };

  return [value, handleChange];
};

export default useToggleState;
