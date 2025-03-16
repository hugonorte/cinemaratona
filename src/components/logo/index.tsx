import logo from '@assets/img/logo_cinemaratona.svg'

interface LogoProps {
    width?: number
}

export default function Logo({ width = 200 }: LogoProps) {
  return (
    <img src={logo} alt="Logo Cinemaratona" width={width} />
  )
}
