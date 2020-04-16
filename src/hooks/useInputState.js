import { useState } from 'react';

export default intialValue => {
  const [value, setValue] = useState(intialValue);

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const resetValue = () => setValue('');

  return [value, changeValue, resetValue];
};
