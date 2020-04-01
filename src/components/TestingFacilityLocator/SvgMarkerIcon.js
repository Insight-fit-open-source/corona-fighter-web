import * as React from 'react';

const SvgHospital = props => {
  return (
    <svg
      viewBox='0 0 512 512'
      width='36px'
      height='36px'
      fill='#FFF'
      {...props}>
      <path
        d='M87.088 192c-.456-5.272-.688-10.6-.688-16C86.4 78.8 162.336 0 256 0s169.6 78.8 169.6 176c0 5.392-.232 10.728-.688 16h.688c0 96.184-169.6 320-169.6 320S86.4 288.712 86.4 192h.688z'
        fill='#e04f5f'
      />
      <circle cx={255.992} cy={172.8} r={119.384} fill='#fff' />
      <g fill='#415e72'>
        <path d='M185.28 152.8h141.392v40H185.28z' />
        <path d='M235.992 102.104h40v141.392h-40z' />
      </g>
    </svg>
  );
};

export default SvgHospital;
