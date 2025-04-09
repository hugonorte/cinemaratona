import { Link } from 'react-router';
import Main from '@/components/containers/main';
import BaseLayout from '@/components/layout';
import Title from '@/components/title';
import style from './style.module.scss';
import ButtonPrimary from '@/components/button/primary';
import { IoSearch } from "react-icons/io5";
import FriendCard from '@/components/card/friend';

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

export default function Friends() {
  return (
    <BaseLayout>
        <Main>
            <div className={style.container}>
                <div className={style.title}>
                    <Title tag='h1'>Amigos</Title>
                    <Link to='/social'>Voltar</Link>
                </div>
                <div className={style.search}>
                    <span>
                        324 amigos
                    </span>
                    <label>
                        Buscar amigo
                        <div className={style.input}>
                            <input type="text" placeholder="Buscar"/>
                            <button>
                                <IoSearch />
                            </button>
                        </div>                            
                    </label>
                </div>
                <div className={style.requests}>
                    <span>
                        Solicitações de amizade (3)
                    </span>
                </div>

                <div className={style.friendship}>
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                    <FriendCard />
                </div>
            </div>
        </Main>
    </BaseLayout>
  )
}
