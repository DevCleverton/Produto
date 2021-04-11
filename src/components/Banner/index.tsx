import * as S from 'components/Banner/styles'
import Image from 'next/image'

export const Banner = () => {
  return (
    <>
      <S.ContainImg>
        <Image
          src="/img/headers/banner-home.jpg"
          alt="Bem-vindo(a) à Pizzaria Toffanetto"
          layout="fill"
          objectFit="cover"
          quality={90}
        />
      </S.ContainImg>
    </>
  )
}
