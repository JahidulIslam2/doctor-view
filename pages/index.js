import Head from 'next/head'
import { Inter } from '@next/font/google'
import Banner from './../components/home/banner/Banner';
import Card from './../components/home/appointment/card/Card';
import Service from './../components/home/service/Service';
import SecondBanner from './../components/home/secondBanner/SecondBanner';
import Appointment from './../components/home/appointment/Appointment';
import Testimonial from './../components/home/testimonial/Testimonial';
import ContactUs from './../components/home/contactUs/ContactUs';
import ProtectedPage from './page/protectedPage/ProtectedPage';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>doctors view</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="px-5">
        <ProtectedPage>
          <Banner />
          <Card />
          <Service />
          <SecondBanner />
          <Appointment />
          <Testimonial />
          <ContactUs />
        </ProtectedPage>

      </main>
    </>
  )
}
