import {useState} from 'react';
import Button from '../ui/Button';
import Modal from '../components/Modal';
import background from "../assets/images/start.png"
import {useAuth} from "../hooks/useAuth";

const Check = () => {
  const [isModalOpen, setisModalOpen] = useState(false);

  const {finishedAuth, getAuth} = useAuth()

  return finishedAuth ? (
    <div className="h-full bg-top bg-cover flex flex-col justify-between items-center">
      <div className={"relative m-auto"}>
          <h1 className="uppercase text-header-text text-[24px] max-w-[60%] font-medium text-center absolute top-[34px] left-1/2 -translate-x-1/2">
              Шашлычный калькулятор
          </h1>
        <img src={background} alt={""} />
        <p className="text-[16px] text-center max-w-[90%] absolute top-[47%] left-1/2 -translate-x-1/2 w-full">
          Чтобы воспользоваться калькулятором, проверьте подписку на наше сообщество «Открытая кухня»
        </p>
      </div>

      <div className="w-full  bg-white rounded-t-[15px]  h-[180px] flex justify-center px-[19px]">
        <div className="flex flex-col w-full gap-[15px] mb-[33px] mt-[23px] items-center">
            <a className={"block w-full"} href={"https://t.me/otkrytaya_kuhnya"}>
                <Button type="primary">
                    Подписаться
                </Button>
            </a>

          <Button type="secondary" onClick={async () => {
              await getAuth()
              setisModalOpen(true)
          }}>
            Проверить подписку
          </Button>
          <span className="text-[#A9A9A9] text-[12px]">@kalkulyator_bot</span>
        </div>
      </div>

      {isModalOpen && <Modal handleClose={() => setisModalOpen(false)} />}
    </div>
  ) : undefined
};

export default Check;
