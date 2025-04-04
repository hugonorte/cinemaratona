import style from './style.module.scss'
import BaseLayout from '../../components/layout'
import Main from '../../components/containers/main'
import Title from '../../components/title'
import ButtonPrimary from '../../components/button/primary'
import ButtonLight from '../../components/button/light'
import { useGenresStore } from '../../store/useMovieGenres'
import { useEffect } from 'react'
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { Link } from 'react-router'

export default function Profile() {
    const user = {
        name: 'Silvio Santos',
        email: 'silvio@sbt.com.br',
        reviews: 4,
        favorite_movies: [1125899, 1165067, 822119, 777443, 1356039],
        recommended_movies: [],
        watched_movies: 252,
        movies_to_watch: 43,
        followers: 123,
        following: 123,
        member_since: '2021-01-01',
        profile_picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRUUZ9UwhvJRuQaYvBYYEkurKsHuum9dH8g-VOVS6wuzx_CRnMJLpBPijMx9scxRDycudaVYjA2qrF8XL8kz7i0ow'
      }
    
    const { genres, fetchGenres } = useGenresStore();
    
    useEffect(() => {
    fetchGenres();

    }, [fetchGenres]);

  return (
    <BaseLayout>
        <Main>
            <div className={style.container}>
                <div className={style.title}>
                    <Title tag='h1'>Configuração de Perfil</Title>
                    <Link to='/social'>Voltar</Link>
                </div>
                <div className={style.image}>
                    <div className={style.profile_picture_container}>
                        <img src={user.profile_picture} alt={user.name} />
                    </div>
                    <p>Editar <HiOutlinePencilSquare /></p>
                </div>
                <form>
                    <fieldset>
                        <Title tag='h3'>Nome do Usuário</Title>
                        <input type="text" value="Silvio Santos" />
                        <Title tag='h3'>E-mail</Title>
                        <input type="email" value="silvio@sbt.com.br" />
                        <Title tag='h3'>Gêneros preferidos</Title>
                        <div className={style.genres}>
                            {genres?.map(genre => (
                                <ButtonLight type="button" key={genre.id}  >
                                    {genre.name}
                                </ButtonLight>
                            ))}
                        </div>
                        
                        <ButtonPrimary label='Salvar alterações' type="button" />
                    </fieldset>
                </form>
            </div>
        </Main>
    </BaseLayout>
  )
}
