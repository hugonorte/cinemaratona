import { Link } from 'react-router';
import Main from '@/components/containers/main';
import BaseLayout from '@/components/layout';
import Title from '@/components/title';
import style from './style.module.scss';
import FriendCard from '@/components/card/friend';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import FriendshipRequestsModal from '@/components/modal/friendship_requests';
import rato from '@/assets/img/friends/rato.png';
import ellen from '@/assets/img/friends/ellen.png';
import elke from '@/assets/img/friends/elke.png';
import pedro from '@/assets/img/friends/pedro.png';
import SmallSearch from '@/components/search/small_search';

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
                            4 amigos
                        </span>
                        <SmallSearch label='Buscar amigos' placeholder='Buscar'/>
                    </div>
                    <div className={style.requests}>
                        <Dialog>
                            <DialogTrigger>
                                <button type="button" className="text-gray-900 focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Solicitações de Amizade (1)</button>
                            </DialogTrigger>
                            <DialogContent className="bg-white ">
                                <DialogHeader>
                                    <DialogTitle>Solicitações de amizade</DialogTitle>
                                    <DialogDescription>
                                        <FriendshipRequestsModal />
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div className={style.friendship}>
                        <FriendCard name='Pedro de Lara' picture={pedro} onClick={()=>console.log("clique")}/>
                        <FriendCard name='Elke Maravilha' picture={elke} onClick={()=>console.log("clique")}/>
                        <FriendCard name='Ellen Ganzarolli' picture={ellen} onClick={()=>console.log("clique")}/>
                        <FriendCard name='Ratinho' picture={rato} onClick={()=>console.log("clique")}/>
                    </div>
                </div>
            </Main>
        </BaseLayout>
    )
}
