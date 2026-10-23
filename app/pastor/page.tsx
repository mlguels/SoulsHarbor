import Image from 'next/image';

export default function Pastor() {
  return (
    <main className="bg-white">
      <h1 className="font-serif text-4xl text-sh-navy font-bold mb-12 text-center tracking-wide pt-32">
        Pastor Jordan Riley
      </h1>
      <section className="pb-20 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sh-navy leading-relaxed">
          <Image
            src="/Pastor-Riley-and-Wife.jpg"
            width={500}
            height={250}
            alt="Jordan Riley"
          />
          <p className="text-2xl pt-25">
            Was raised in an apostolic home and was taught the Word of God from
            a very early age. He felt the Call of God to preach at age 15 and
            acknowledged that call by age of 17. He began preaching and teaching
            under his Grandfather’s ministry in his home state of Indiana. He
            first met his future wife at a church youth meeting. Sister Riley
            was also raised in a Godly home and like her husband, has been
            involved in some form of ministry from her youth. In 2010 they were
            married and began serving in a part time ministry role assisting her
            father in Arizona. After many years of labor, both Pastor and Sister
            Riley began to feel God call them to full time ministry. After much
            Prayer, God opened the door in Sparks NV, and the Rileys accepted
            the fulltime pastorate at Souls Harbor in February 2021. To God be
            the Glory!
          </p>
        </div>
      </section>
    </main>
  );
}
