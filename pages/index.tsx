import Head from "next/head";
import Layout from '../components/layout';
import { useAppDispatch, useAppSelector } from "../components/redux/hook/hook";
import { useEffect, useState } from "react";
import { decrement, increment, incrementByAmount } from "../components/redux/slice/counterSlice";
import { setUserAge, setUsername, setUserEmail } from "../components/redux/slice/userSlice";
import { fetchFirstData } from "../components/redux/slice/asyncSlice";

function HomePage() {

    // The `state` arg is correctly typed as `RootState` already
    const count = useAppSelector((state) => state.counterReducer.value)
    const dispatch = useAppDispatch()

    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;

    // 第二個slice 
    const user = useAppSelector((state) => state.user)
    const [name, setName] = useState('');
    const [age, setAge] = useState('0');
    const [email, setEmail] = useState('');

    const ageValue = Number(age) || 0;

    // 第三個slice
    const asyncData = useAppSelector((state) => state.async)

    useEffect(() => {
        dispatch(fetchFirstData());
    }, [])

    console.log(asyncData)

    return (
        <Layout>
            <Head>
                <title>新版Redux</title>
            </Head>
            <div className="flex flex-col items-center">
                <h1 className="text-3xl mt-3">新版Redux用法</h1>
                <h2 className="text-2xl mt-3">範例一</h2>
                <div>count：{count}</div>

                <button onClick={() => dispatch(increment())} className="p-2 m-1">Increment</button>
                <button onClick={() => dispatch(decrement())} className="p-2 m-1">Decrement</button>

                <div>
                    <input
                        aria-label="Set increment amount"
                        value={incrementAmount}
                        onChange={(e) => setIncrementAmount(e.target.value)}
                        className="p-2 m-1"
                    />
                    <button
                        onClick={() => dispatch(incrementByAmount(incrementValue))}
                        className="p-2 m-1"
                    >
                        根據Input來Add Amount
                    </button>
                </div>


                <h2 className="text-2xl mt-3">範例二</h2>
                <div>username：{user.username}</div>
                <div>age：{user.age}</div>
                <div>email：{user.email}</div>

                <div>
                    <input
                        aria-label="Set increment amount"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 m-1"
                    />
                    <button
                        onClick={() => dispatch(setUsername(name))}
                        className="p-2 m-1"
                    >
                        設定Name
                    </button>
                </div>
                <div>
                    <input
                        aria-label="Set increment amount"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="p-2 m-1"
                    />
                    <button
                        onClick={() => dispatch(setUserAge(ageValue))}
                        className="p-2 m-1"
                    >
                        設定年齡
                    </button>
                </div>
                <div>
                    <input
                        aria-label="Set increment amount"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 m-1"
                    />
                    <button
                        onClick={() => dispatch(setUserEmail(email))}
                        className="p-2 m-1"
                    >
                        設定mail
                    </button>
                </div>

                <h2 className="text-2xl mt-3">範例三 (非同步資料)</h2>
                <div className="border border-title p-5 m-3">
                    <div>asyncData userId: {asyncData.userId}</div>
                    <div>asyncData id: {asyncData.id}</div>
                    <div>asyncData title: {asyncData.title}</div>
                    <div>asyncData completed: {`${asyncData.completed}`}</div>
                    <div>asyncData isLoading: {`${asyncData.isLoading}`}</div>
                </div>

                <a href="https://react-redux-neon.vercel.app/useReduxOfficial" rel="noopener" target="_blank" className="border p-2 rounded border-title hover:bg-title hover:text-black mt-5">回去學習~</a>
            </div>
        </Layout>
    )
}

export default HomePage