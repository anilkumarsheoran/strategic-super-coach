import React from 'react';

export default function Layout({ header, stickyMenu, content }) {
    return (
      <div className="">
        <div className="min-h-screen grid-rows-layout lg:container lg:mx-auto lg:grid">
          {header}
          {stickyMenu}
          <main className="min-w-0 pt-5 bg-dark-blue min-h-screen">{content}</main>
        </div>
      </div>
    )
  }