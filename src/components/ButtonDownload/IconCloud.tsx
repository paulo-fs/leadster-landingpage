import { HTMLAttributes } from 'react'

type Iconprops = HTMLAttributes<HTMLOrSVGElement>

export function IconCloud({...props}: Iconprops) {
  return (
    <svg {...props} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1209_29)">
        <path d="M8.29883 17.3718L12.2988 21.3718L16.2988 17.3718" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.2988 12.3718V21.3718" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.179 18.4618C22.0484 17.8504 22.7004 16.9779 23.0403 15.9709C23.3802 14.9639 23.3904 13.8748 23.0694 12.8616C22.7484 11.8484 22.1129 10.9638 21.2551 10.3363C20.3973 9.70879 19.3618 9.37093 18.299 9.37176H17.039C16.7382 8.19963 16.1755 7.11101 15.3931 6.18784C14.6108 5.26467 13.6292 4.53102 12.5222 4.04211C11.4153 3.55321 10.2118 3.32179 9.00253 3.36528C7.79321 3.40877 6.60952 3.72603 5.54056 4.29319C4.4716 4.86034 3.54523 5.66261 2.83119 6.63959C2.11716 7.61657 1.63406 8.74281 1.41827 9.93351C1.20248 11.1242 1.25962 12.3484 1.58539 13.5138C1.91115 14.6792 2.49706 15.7555 3.29901 16.6618" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      <defs>
        <clipPath id="clip0_1209_29">
          <rect width="24" height="24" fill="white" transform="translate(0.298828 0.371826)"/>
        </clipPath>
      </defs>
    </svg>
  )
}
