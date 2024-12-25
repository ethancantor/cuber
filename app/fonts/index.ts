import { JetBrains_Mono } from "next/font/google"

import localFont from 'next/font/local'

export const TitleFont = localFont({
  src: './Beleren-Bold.ttf',
  display: 'swap'
})

export const BodyFont = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})