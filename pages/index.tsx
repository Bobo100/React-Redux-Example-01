import Head from "next/head";
import Layout from '../components/layout';
import { useAppDispatch, useAppSelector } from "../components/redux/hook/hook";
import { useState } from "react";
import { decrement, increment, incrementByAmount } from "../components/redux/slice/counterSlice";
import { setUserAge, setUsername, setUserEmail } from "../components/redux/slice/userSlice";

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
            </div>
        </Layout>
    )
}

export default HomePage