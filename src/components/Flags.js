import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCountries } from "../actions/FlagActions";
import { FaGift } from "react-icons/fa";

//Bu sadece bir API kullanım örneği

const Flags = (props) => {
    const flag = props.flag
    console.log(flag)
    useEffect(() => {
        props.getCountries();
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
                        flag.countries.map((country) => {
                            return (
                                <tr key={country.id} className=" ">
                                    <td>{country.name}</td>
    
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

const mapStateToProps = (flag) => {
    return flag
};

export default connect(mapStateToProps, { getCountries })(Flags);
