import React from 'react';

export default function About() {
  return (
    <main className="bg-white">
      {/* max-w-6xl and mx-auto keep it perfectly aligned with your Schedule section */}
      <section className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        {/* The Title sits on top and centered */}
        <h1 className="font-serif text-4xl text-sh-navy font-bold mb-12 text-center uppercase tracking-wide">
          ABOUT US
        </h1>

        {/* 
          The CSS Grid Container: 
          1 column on mobile (stacked), 2 columns on desktop (side-by-side)
          gap-12 provides generous breathing room between the blocks of text
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sh-navy leading-relaxed">
          <p className="text-md">
            Souls Harbor Church is a fast growing, multi-cultural,
            Christ-Centered Apostolic Church located in Sparks, Nevada. We are
            passionate about worshiping God and seeing the awesome
            transformation that takes place when people give their lives to Him.
            Most importantly we want to do more than merely teach you about God,
            but to introduce you to a living God who is very real, loves you
            very much, and is waiting to have a relationship with you that will
            last throughout eternity! We are a church with a vision for the
            future. Our mission is to grow and to be able to reach and help more
            and more people have the abundant life God has for them. If you come
            with a hunger and thirst for God, you can leave feeling full of real
            joy and peace! Please come and visit us, we’ll make you feel right
            at home!
          </p>

          <p className="text-md">
            In the Bible, the book of Acts featured the birth of the New
            Testament Church. In Chapter two, the Holy Ghost was poured out in
            an upper room, to about 120 believers who were gathered together.
            This group of believers was first called the church in verse 47 of
            the same chapter: Acts 2:47 – “And the Lord added to the church
            daily such as should be saved.” The growth rate was outstanding – in
            that same day, after Peter preached, over 3000 souls were added to
            the church! Acts 2:41 – “And the same day there were added unto them
            about three thousand souls” Souls Harbor Apostolic Church is an
            exciting, Book of Acts church in the Sparks Nevada. It’s our desire
            to pattern ourselves after the Christian Biblical principles found
            in the Word of God — after all, the disciples were the first to be
            called Christians, in Acts 11:26.
          </p>
        </div>
      </section>
    </main>
  );
}
