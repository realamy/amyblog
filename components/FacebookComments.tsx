import React from 'react';



import { Comments, FacebookProvider } from 'react-facebook';


export const FacebookComments = ({ href }: { href: string }) => {
  const appId = '1800948846925444'
  return (
    <FacebookProvider appId={appId}>
      <Comments href={href} />
    </FacebookProvider>
  )
}