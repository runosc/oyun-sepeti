import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getPeople } from "../actions/PeopleActions";
import { FaGift } from "react-icons/fa";

//Bu sadece bir API kullanım örneği

const PeopleList = (props) => {
    const people = props.people
    console.log("people",people)
    useEffect(() => {
        props.getPeople();
    }, []);
    return (
        <div >
            
            <table className="w-full  ">
                <thead>
                    <tr >
                        <th className="text-left">Adı</th>
                        <th className="text-left">İşlem</th>
                    </tr>
                </thead>
                <tbody>
                    {props.isLoading ? (
                        <p>Yükleniyor...</p>
                    ) : (
                        people.people.map((p) => {
                            return (
                                <tr key={p.id} className=" ">
                                    <td>{p.name}</td>
    
                                    <td><button className="py-2 px-4 w-full justify-center flex bg-green-500 rounded text-white hover:bg-green-400">
                                        <FaGift />
                                    </button></td>
    
                                </tr>
                            );
                        })
                    )}
                   
                </tbody>
            </table>

        </div>

    );
};

const mapStateToProps = (people) => {
    return people
};

export default connect(mapStateToProps, { getPeople})(PeopleList);
