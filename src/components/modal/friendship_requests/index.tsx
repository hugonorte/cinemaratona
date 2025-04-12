import Title from '@/components/title';
import style from './style.module.scss';
import sergio from '@/assets/img/friends/sergio.png';
import AcceptBtn from '@/components/button/accept';
import RefuseBtn from '@/components/button/refuse';

export default function FriendshipRequestsModal() {
  return (
    <div className={style.friendship_request}>
      <div className={style.requester}>
        <img src={sergio} alt="User" />
        <Title tag='h3'>Sérgio Mallandro</Title>
        <p>Data de solicitação: 01/01/2023</p>
      </div>
      <div className={style.actions}>
        <AcceptBtn />
        <RefuseBtn />
      </div>
    </div>
  )
}
