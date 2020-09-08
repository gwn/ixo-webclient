import React from 'react'

const Rating = (props: any): JSX.Element => {
  return (
    <svg
      width={props.width || 24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.5 9.5C18.47 9.5 17.6 10.12 17.21 11H14.29C13.9 10.12 13.03 9.5 12 9.5C10.97 9.5 10.1 10.12 9.71 11H6.79C6.4 10.12 5.53 9.5 4.5 9.5C3.12 9.5 2 10.62 2 12C2 13.38 3.12 14.5 4.5 14.5C5.53 14.5 6.4 13.88 6.79 13H9.71C10.1 13.88 10.97 14.5 12 14.5C13.03 14.5 13.9 13.88 14.29 13H17.21C17.6 13.88 18.47 14.5 19.5 14.5C20.88 14.5 22 13.38 22 12C22 10.62 20.88 9.5 19.5 9.5Z"
        fill={props.fill || '#fff'}
      />
    </svg>
  )
}

export default Rating
