import React, { useState } from 'react'

export default function About(props) {

  return (
    <>
      <div className={`container my-5 text-${props.mode==='light'?'dark':'light'}`}>
        <h1 className='my-4'>About Us</h1>
        <p className='fs-5 fst-italic'>
          Welcome to TextUtils, your go-to website for all your text formatting needs
          At TextUtils, we understand the importance of clear and well-formatted text. That's why we've created a user-friendly website that allows you to quickly and easily modify your text in a variety of ways. Whether you're looking to convert your text to uppercase or lowercase, remove extra space, copy text, or clear your text altogether, TextUtils has got you covered.</p>

        <p className='fs-5 fst-italic'>Our website is designed to be simple and intuitive, with a clean and modern interface that makes formatting your text a breeze. With just a few clicks, you can transform your text into exactly what you need it to be, saving you time and hassle.</p>

        <p className='fs-5 fst-italic'>At TextUtils, we're committed to providing you with the highest quality text formatting tools available. Our algorithms are constantly being updated to ensure accuracy and speed, and we're always working to add new features and capabilities to our platform.</p>


        <p className='fs-5 fst-italic'>So whether you're a student, a professional, or just someone who wants to make sure their text looks its best, TextUtils is the perfect solution for all your text formatting needs. Thanks for choosing TextUtils!</p>
      </div>
    </>
  )
}
