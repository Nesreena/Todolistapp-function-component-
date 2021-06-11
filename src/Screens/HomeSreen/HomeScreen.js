import React, { useEffect, useState } from "react"
import Button from "../../Component/Button/Button"
import ListItems from '../../Component/ListItems/ListItems'
import { data } from '../../data'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

import './style.css'
// import date from 

function HomeScreen() {
    const [state, setState] = useState({

    });

    const[value, setValue] = useState('');
    const[list,setList]=useState([]);
    const[error, setError]=useState('');

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            console.log(response);
            setList(response.data);

        } catch (e) {
            console.log(e);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [])



    // state = {
    //     value: "" ,
    //     list: [],
    // };

    //    async componentDidMount() {  // function for one time after the first render   for data fetching ( if rerender happened it will be )

    //             try {
    //             const response = await axios.get(
    //                 "https://jsonplaceholder.typicode.com/todos"
    //             );
    //                 console.log(response);
    //                 this.setState({
    //                     list: response.data.splice(0,30),
    //                 });
    //                 } catch (e) {
    //                     console.log(e);
    //                 }
    //         }

    // componentDidMount() { 
    //     axios.get(
    //         "https://jsonplaceholder.typicode.com/todos"
    //     ).then(response)
    //         console.log(response);
    //         this.setstate({
    //             list: response.data.splice(0,30),
    //         });
    //         } catch (e) {
    //             console.log(e);
    //         }
    // }



    // componentDidMount() {  // anthor way to fetch data
    //     const fetchData = async () => {
    //         try {
    //         const response = await axios.get(
    //             "https://jsonplaceholder.typicode.com/todos"
    //         );
    //             console.log(response);
    //             this.setState({
    //                 list: response.data,
    //             });
    //             } catch (e) {
    //                 console.log(e);
    //             }
    //     };
    //     fetchData();
    // }


    return (
        <div className="inner-container">
            <h1 className="page-title">To do List </h1>
            <section className="input-section">


                <div className="input-box">
                    <input
                        // disabled={true}
                        className="add-task-input"
                        type="text"
                        placeholder="Enter a new task ... "

                        onChange={(event) => {
                            setValue(event.target.value )
                        }}

                        value={value}   // controlled input 

                    />
                    {error ? <span> {error} </span> : null}
                </div>
                <Button
                    text="Add"
                    handleClick={() => {
                        if (value) {
                            const newArr = [
                                {
                                    title: value,
                                    id: uuidv4()

                                },
                                ...list, // to add the new value in the top
                            ]; // not write data here cus the data will accept a one new value
                         

                            setList(newArr);
                            setError('');
                            setValue('');

                        } else {
                            setError("Please submit a task");
                        }
                    }}
                />
            </section>

            <section className="items-section">
                {list?.length ? ( //
                    list.map((item) => (
                        <ListItems
                            task={item.title}
                            key={item.id}
                            handleDelete={() => { //id for uniqe delete
                                const fliteredItems = list.filter(
                                    (fliteredItem) => fliteredItem.id != item.id
                                );
                                setList(fliteredItems)
                            }}
                        />
                    ))
                ) : (
                    <span>Loading ....... </span>
                )}
            </section>
        </div>
    )
}
export default HomeScreen;